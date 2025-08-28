import { Injectable } from '@nestjs/common';
import { WoltWebhookBody } from './types/wolt';

@Injectable()
export class AppService {
  constructor() {}
  
  async handleNewOrder(woltWebhookBody: WoltWebhookBody): Promise<void> {
    // 1. retrieve order details using injected ChannelService


    // 2. parse order from external form to OrderDto


    // 3. send dto to kafka queue using injected KafkaService


  }
}
