import Koa from "koa";
import configs from "./configs";
import loadApplication from "./loaders/loadApplication";
import Logger from "./logger/logger";

const app = new Koa();

const startServer = (): void => {
  const logger = new Logger("Server");
  loadApplication(app);
  const { port } = configs.server;
  app.listen(port, () => {
    logger.info(`Server now listening on port: ${port}`);
  });
};

startServer();
