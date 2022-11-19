import dayjs from "dayjs";

import { transactionsCollection } from "../database/db.js";
import transactionSchema from "../schema/transactionSchema.js";

export async function postTransaction(req, res) {
  const transaction = req.body;

  try {
    const { error } = transactionSchema.validate(transaction, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }

    const { userId } = req.session;
    const date = `${dayjs().date()}/${dayjs().month() + 1}`;

    await transactionsCollection.insertOne({ ...transaction, userId, date });

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function getTransaction(req, res) {}
