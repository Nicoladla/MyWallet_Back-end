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

  

  res.sendStatus(200);
}

export async function signIn(req, res) {}

export async function signOut(req, res) {}
