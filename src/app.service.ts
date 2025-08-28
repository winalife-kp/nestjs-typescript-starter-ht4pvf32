import { Injectable } from '@nestjs/common';
import { OrderWebhookBody } from './types/channel';

@Injectable()
export class AppService {
  constructor() {}
  
  async handleNewOrder(webhookBody: OrderWebhookBody): Promise<void> {
    // retrieve order details using incjected ChannelService
    // parse order from external form to OrderDto
    // send dto to kafka queue using incjected KafkaService
  }
}
