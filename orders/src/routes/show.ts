import express, { Request, Response, response } from "express";

const router = express.Router();

router.get("/api/orders/:orderId", async (req: Request, res: Response) => {
  response.send({});
});

export { router as showOrderRouter };
