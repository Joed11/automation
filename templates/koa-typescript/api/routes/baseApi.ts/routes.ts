import compose from "koa-compose";
import router from "./router";

export default () => compose([router.allowedMethods(), router.routes()]);
