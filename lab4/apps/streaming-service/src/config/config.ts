export default () => ({
  port: parseInt(process.env.APP_PORT || "3000", 10),
  kafkaBroker: process.env.KAFKA_BROKER || "localhost:9092",
})
