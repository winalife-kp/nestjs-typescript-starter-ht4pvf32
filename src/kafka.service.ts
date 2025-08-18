import { Injectable, Logger } from "@nestjs/common";
import { OrderDto } from "./types/order";

@Injectable()
export class KafkaLibService {
  async emitOrderCreateRequestEvent(order: OrderDto) {
    Logger.log(`Emit order: ${JSON.stringify(order)}`);
  }

}