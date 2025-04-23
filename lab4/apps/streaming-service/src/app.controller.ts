import { Controller, Post, Body, Inject } from "@nestjs/common"
import { ClientKafka } from "@nestjs/microservices"

@Controller()
export class AppController {
  constructor(
    @Inject("KAFKA_SERVICE") private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    await this.kafkaClient.connect()
  }

  @Post("play")
  async simulateTrackPlay(@Body() body: { track_id: string; user_id: string }) {
    const event = {
      ...body,
      timestamp: Date.now(),
    }
    this.kafkaClient.emit("track_played", event)

    console.log("📡 [Streaming] Track Played Event Sent:", event)
    return { status: "event_sent", data: event }
  }
}
