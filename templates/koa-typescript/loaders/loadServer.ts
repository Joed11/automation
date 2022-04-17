import Koa from "koa";
import { baseApi, errorHandler, requestLogger } from "../api";
import koaJson from "koa-json";
import Logger from "../logger/logger";

export default function (app: Koa): void {
  app.use(requestLogger(new Logger("Request Logger")));
  app.use(errorHandler());
  app.use(koaJson());
  app.use(baseApi());
}
