import { Middleware } from "koa";
import Logger from "../../logger/logger";

export default function (logger: Logger): Middleware {
  return async (context, next): Promise<void> => {
    const { method, request } = context;
    logger.info(`${method} ${request.URL}`);
    next();
  };
}
