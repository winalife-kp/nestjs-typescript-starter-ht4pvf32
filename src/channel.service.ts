import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CHANNEL_ORDER } from './mocks/channelOrder';
import { ChannelOrderInterface } from './types/channel';

@Injectable()
export class ChannelService {
  
  /**
   * Get details of the order by id
   * @param orderId ID of the order
   * @param restaurantId ID of the restaurant assigned to order
   */
  async getOrderDetails(orderId: number, restaurantId: string): Promise<ChannelOrderInterface> {
    if(CHANNEL_ORDER.restaurant_id !== restaurantId) throw new ForbiddenException();
    if(CHANNEL_ORDER.order_id !== orderId) throw new NotFoundException();
    
    return CHANNEL_ORDER;
  }
}
