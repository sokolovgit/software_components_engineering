import config from "./config/config"

import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { AnalyticsController } from "./analytics.controller"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
  ],
  controllers: [AnalyticsController],
  providers: [],
})
export class AppModule {}
