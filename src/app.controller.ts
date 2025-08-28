import { Body, Controller, Get, HttpCode, HttpStatus, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { WoltWebhookBody } from './types/wolt';
import { WOLT_WEBHOOK_MOCK } from './mocks/woltWebhook.mock';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @HttpCode(HttpStatus.OK)
  @Post('webhook')
  handleWebhook(body: WoltWebhookBody = WOLT_WEBHOOK_MOCK): Promise<void> {
    Logger.log(`New order ${body.order.id}`);
    return this.appService.handleNewOrder(body);
  }
}
