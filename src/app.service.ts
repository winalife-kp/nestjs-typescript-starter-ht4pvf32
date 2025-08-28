import { Injectable } from '@nestjs/common';
import { OrderWebhookBody } from './types/channel';

@Injectable()
export class AppService {
  constructor() {}
  
  async handleNewOrder(webhookBody: OrderWebhookBody): Promise<void> {
    // 1. retrieve order details using injected ChannelService


    // 2. parse order from external form to OrderDto


    // 3. send dto to kafka queue using injected KafkaService

    
  }
}
