import Koa from "koa";
import loadServer from "./loadServer";

export default function (app: Koa): void {
  loadServer(app);
}
