import { Middleware } from "koa";
import { GeneralErrorSummary } from "../../types/GeneralErrorSummary";

export default function (): Middleware {
  return async (context, next): Promise<void> => {
    try {
      await next();
    } catch (error) {
      const generalError = error as GeneralErrorSummary;
      const status =
        generalError.status ||
        generalError.statusCode ||
        generalError.response?.status ||
        500;
      const message =
        generalError.message ||
        generalError.response?.message ||
        "An unexpected error occured.";
      context.status = status;
      context.body = {
        status,
        message,
      };
    }
  };
}
