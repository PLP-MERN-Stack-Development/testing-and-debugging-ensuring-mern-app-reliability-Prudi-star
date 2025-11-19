import request from "supertest";
import express from "express";
import bugRoutes from "../../src/routes/bugRoutes.js";

const app = express();
app.use(express.json());
app.use("/api/bugs", bugRoutes);

describe("Bug API", () => {
  it("should create a bug", async () => {
    const res = await request(app).post("/api/bugs").send({ title: "Test Bug", description: "Testing" });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Test Bug");
  });
});