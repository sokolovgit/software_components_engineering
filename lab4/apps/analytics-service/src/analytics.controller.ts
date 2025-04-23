import { Controller } from "@nestjs/common"
import { EventPattern, Payload } from "@nestjs/microservices"

@Controller()
export class AnalyticsController {
  @EventPattern("track_played")
  handleTrackPlayed(@Payload() message: any) {
    console.log("📡 [Analytics] Track Played Event Received:", message)
  }
}
