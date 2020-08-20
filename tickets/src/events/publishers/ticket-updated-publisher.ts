import { Publisher, Subjects, TicketUpdatedEvent } from "@capitanyo/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
