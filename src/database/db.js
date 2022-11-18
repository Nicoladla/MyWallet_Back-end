import { MongoClient } from "mongodb";

const mongoClient = new MongoClient(process.env.MONGO_URI);
try {
  await mongoClient.connect();
  console.log("MongoDB connect!");
} catch (error) {
  console.log(error);
}

const db = mongoClient.db("MyWallet");
export const usersCollection = db.collection("users");
export const walletCollection = db.collection("wallet");
export const sessionsCollection = db.collection("sessions");