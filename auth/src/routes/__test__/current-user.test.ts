import request from "supertest";
import { app } from "../../app";
import { currentUserRouter } from "../current-user";

it("responds with details about the current user", async () => {
  const cookie = await global.signin();

  const currentUser = await request(app)
    .get("/api/users/currentuser")
    .set("Cookie", cookie)
    .send();

  expect(currentUser.body.currentUser.email).toEqual("test@test.com");
});

it("response with null if not authenticated", async () => {
  const response = await request(app)
    .get("/api/users/currentuser")
    .send()
    .expect(200);

  expect(response.body.currentUser).toEqual(null);
});
