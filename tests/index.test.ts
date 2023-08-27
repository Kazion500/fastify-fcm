import fastify from "fastify";
import { describe, expect, it } from "vitest";
import fcmPlugin from "../src";

const buildApp = () => {
  const app = fastify();
  app.register(fcmPlugin, {
    path_to_service_account: "./tests/test-data/service-account.json",
  });
  return app;
};

describe("fastify-fcm", () => {
  it("fcm should be defined", async () => {
    const app = buildApp();
    await app.ready();
    expect(app.fcm).toBeDefined();
  });
});
