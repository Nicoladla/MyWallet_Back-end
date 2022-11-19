import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
try {
  await mongoClient.connect();
  console.log("MongoDB connect!");
} catch (error) {
  console.log(error);
}

const db = mongoClient.db("MyWallet");
export const usersCollection = db.collection("users");
export const transactionsCollection = db.collection("transactions");
export const sessionsCollection = db.collection("sessions");