import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";

import { usersCollection, sessionsCollection } from "../database/db.js";
import { userSchema } from "../schema/userSchema.js";

export async function signUp(req, res) {
  const user = req.body;

  const { error } = userSchema.validate(user, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send({ message: errors });
  }

  try {
    const emailExist = await usersCollection.findOne({ email: user.email });
    if (emailExist) {
      return res.status(409).send({ message: "Email já cadastrado!" });
    }

    const passwardHash = bcrypt.hashSync(user.password, 10);

    await usersCollection.insertOne({ ...user, password: passwardHash });

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function signIn(req, res) {
  const { email, password } = req.body;

  try {
    const user = await usersCollection.findOne({ email });

    if (!user || !bcrypt.compareSync(password, user?.password)) {
      return res.status(422).send({ message: "Email ou senha incorreto!" });
    }

    const sessionExist = await sessionsCollection.findOne({ userId: user._id });
    if (sessionExist) {
      await sessionsCollection.deleteOne(sessionExist);
      console.log("excluindo: ",sessionExist)
    }

    const token = uuid();
    await sessionsCollection.insertOne({ userId: user._id, token });

    res.status(200).send(token);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function signOut(req, res) {}
