import express from "express";
import { json } from "body-parser";
import "express-async-errors";
import { errorHandler, NotFoundError, currentUser } from "@capitanyo/common";
import cookieSession from "cookie-session";

import { createTicketRouter } from "./routes/new";
import { showRouter } from "./routes/show";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.use(currentUser);
app.use(createTicketRouter);
app.use(showRouter);

app.all("*", async (req, res, next) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
