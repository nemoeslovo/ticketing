import express, { Request, Response, response } from "express";
import { requireAuth, validateRequest } from "@capitanyo/common";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/api/orders/",
  requireAuth,
  [body("ticketId").not().isEmpty().withMessage("ticketId must be provided")],
  async (req: Request, res: Response) => {
    response.send({});
  }
);

export { router as newOrderRouter };
