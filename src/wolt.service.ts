import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { WOLT_ORDER_MOCK } from './mocks/woltOrder.mock';
import { WoltOrder } from './types/wolt';

@Injectable()
export class WoltService {
  
  /**
   * Get details of the order by id
   * @param orderId ID of the order
   * @param restaurantId ID of the restaurant assigned to order
   */
  async getOrderDetails(orderId: number, restaurantId: string): Promise<WoltOrder> {
    if(WOLT_ORDER_MOCK.restaurant_id !== restaurantId) throw new ForbiddenException();
    if(WOLT_ORDER_MOCK.order_id !== orderId) throw new NotFoundException();
    
    return WOLT_ORDER_MOCK;
  }
}
