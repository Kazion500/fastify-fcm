import { FCM } from "@kazion/fcm-node-http";
import { FastifyPluginCallback } from "fastify";

import fp from "fastify-plugin";

interface FCMPluginOptions {
  path_to_service_account: string;
}

const fcmPlugin: FastifyPluginCallback<FCMPluginOptions> = async (
  fastify,
  options,
  done
) => {
  if (fastify.fcm) {
    return done(new Error("[fastify-fcm]: has been defined before"));
  } else {
    const fcm = new FCM(options.path_to_service_account);
    fastify.decorate("fcm", fcm);

    fastify.addHook("onClose", (_, done) => {
      done();
    });
  }
};

const fcmClientPlugin = fp(fcmPlugin, { name: "fastify-fcm", fastify: "4.x" });

export default fcmClientPlugin;

declare module "fastify" {
  interface FastifyInstance {
    fcm: FCM;
  }
}
