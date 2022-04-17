export default {
  server: {
    port: +(process.env.PORT || 8000),
  },
  environment: process.env.NODE_ENV || "dev",
};
