import express, { Request, Response, response } from "express";

const router = express.Router();

router.get("/api/orders", async (req: Request, res: Response) => {
  response.send({});
});

export { router as indexOrderRouter };
