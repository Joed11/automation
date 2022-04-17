import { Middleware } from "koa";

export default function (): Middleware {
  return async (context): Promise<void> => {
    context.body = "test succeded";
  };
}
