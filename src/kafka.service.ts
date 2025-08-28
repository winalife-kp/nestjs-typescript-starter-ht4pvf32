import { Injectable, Logger } from "@nestjs/common";
import { OrderDto } from "./types/order";
import { Observable, of } from "rxjs";

@Injectable()
export class KafkaService {
  emitOrderCreateEvent(order: OrderDto): Observable<OrderDto> {
    Logger.log(`Emit order: ${JSON.stringify(order)}`);
    return of(order);
  }

}