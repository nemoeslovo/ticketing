export enum OrderStatus {
  // when the order has been created,
  // but the ticket it is trying to order has not been reserved
  Created = "created",

  // The ticket the order is trying ot reserve has already
  // been reserved, or when the user has cancelled the order.
  // The order expires before payment
  Canceled = "cancelled",

  // The order has successfully reserver the ticket
  AwaitingPayment = "awaiting:payment",

  // The order has reserved the ticket and the user has
  // provided payment successfuly
  Complete = "complete",
}
