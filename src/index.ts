import { FastifyPluginCallback } from "fastify";
import fp from "fastify-plugin";

const examplePlugin: FastifyPluginCallback = async (fastify, options, done) => {
  fastify.decorate("example", () => {
    //
  });

  fastify.addHook("onClose", (fastify, done) => {
    //
  });
};

export default fp(examplePlugin, { name: "fastify-example" });

declare module "fastify" {
  interface FastifyInstance {
    //
  }
}
