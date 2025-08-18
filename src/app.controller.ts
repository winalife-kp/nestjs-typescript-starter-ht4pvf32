import { Body, Controller, Get, HttpCode, HttpStatus, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { OrderWebhookBody } from './types/channel';
import { ORDER_CREATED_WEBHOOK } from './mocks/orderCreatedWebhook';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @HttpCode(HttpStatus.OK)
  @Post('webhook')
  handleWebhook(body: OrderWebhookBody = ORDER_CREATED_WEBHOOK): Promise<void> {
    Logger.log(`New order ${body.order.id}`);
    return this.appService.handleNewOrder(body);
  }
}
