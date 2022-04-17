import Router from "koa-router";
import { testHandler } from "../../handlers";

export default new Router({ prefix: "/baseApi" }).get("/test", testHandler());
