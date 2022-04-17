import configs from "../configs";

export default class Logger {
  name: string;

  environment: string;

  constructor(name: string) {
    this.name = name;
    this.environment = configs.environment;
  }

  info(message: string, ...items: any[]): void {
    this.logToConsole(message, "INFO", ...items);
  }

  warn(message: string, ...items: any[]): void {
    this.logToConsole(message, "WARN", ...items);
  }

  error(message: string, ...items: any[]): void {
    this.logToConsole(message, "ERROR", ...items);
  }

  debug(message: string, ...items: any[]): void {
    if (this.environment !== "production") {
      this.logToConsole(message, "DEBUG", ...items);
    }
  }

  logToConsole(message: string, level: string, ...items: any[]): void {
    console.log(
      `[${this.makeTimestamp()}] [${this.name}] [${level}] ${message}`,
      ...items
    );
  }

  makeTimestamp(): string {
    return new Date(Date.now()).toLocaleString("en-US", { timeZone: "EST" });
  }
}
