import { sessionsCollection, usersCollection } from "../database/db.js";

export default async function tokenValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  try {
    if (!token) return res.sendStatus(401);

    const session = await sessionsCollection.findOne({ token });
    if (!session) return res.status(401).send("daqui do middleware");

    const user = await usersCollection.findOne({ _id: session.userId });
    if (!user) return res.sendStatus(401);

    req.token = token;
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
