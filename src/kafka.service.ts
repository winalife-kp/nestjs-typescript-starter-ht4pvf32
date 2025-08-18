import { Injectable, Logger } from "@nestjs/common";
import { OrderDto } from "./types/order";
import { Observable, of } from "rxjs";

@Injectable()
export class KafkaLibService {
  emitOrderCreateRequestEvent(order: OrderDto): Observable<void> {
    Logger.log(`Emit order: ${JSON.stringify(order)}`);
    return of();
  }

}