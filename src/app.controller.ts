import { Body, Controller, Get, HttpCode, HttpStatus, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { OrderWebhookBody } from './types/channel';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @HttpCode(HttpStatus.OK)
  @Post('webhook')
  handleWebhook(@Body() body: OrderWebhookBody): Promise<void> {
    Logger.log(`New order ${body.order.id}`);
    return this.appService.handleNewOrder(body);
  }
}
