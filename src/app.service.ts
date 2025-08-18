import { Injectable } from '@nestjs/common';
import { OrderWebhookBody } from './types/channel';

@Injectable()
export class AppService {
  constructor() {}
  
  async handleNewOrder(webhookBody: OrderWebhookBody) {
    // retrieve order
    // parse order to dto
    // send dto to kafka queue
  }
}
