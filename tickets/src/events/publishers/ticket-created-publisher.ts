import { Publisher, Subjects, TicketCreatedEvent } from "@capitanyo/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
