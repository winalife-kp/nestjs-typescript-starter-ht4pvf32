import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CHANNEL_ORDER } from './mocks/channelOrder';

@Injectable()
export class ChannelService {
  async getOrderDetails(providerId: string, orderId: number) {
    if(CHANNEL_ORDER.provider_id !== providerId) throw new ForbiddenException();
    if(CHANNEL_ORDER.order_id !== orderId) throw new NotFoundException();
    
    return CHANNEL_ORDER;
  }
}
