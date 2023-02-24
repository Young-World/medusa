import { BaseEntity } from "../interfaces/models/base-entity";
import { ClaimOrder } from "./claim-order";
import { Order } from "./order";
import { ReturnItem } from "./return-item";
import { ShippingMethod } from "./shipping-method";
import { Swap } from "./swap";
export declare enum ReturnStatus {
    REQUESTED = "requested",
    RECEIVED = "received",
    REQUIRES_ACTION = "requires_action",
    CANCELED = "canceled"
}
export declare class Return extends BaseEntity {
    status: ReturnStatus;
    items: ReturnItem[];
    swap_id: string | null;
    swap: Swap;
    claim_order_id: string | null;
    claim_order: ClaimOrder;
    order_id: string | null;
    order: Order;
    shipping_method: ShippingMethod;
    location_id: string | null;
    shipping_data: Record<string, unknown>;
    refund_amount: number;
    received_at: Date;
    no_notification: boolean | null;
    metadata: Record<string, unknown> | null;
    idempotency_key: string | null;
    private beforeInsert;
}
/**
 * @schema Return
 * title: "Return"
 * description: "Return orders hold information about Line Items that a Customer wishes to send back, along with how the items will be returned. Returns can be used as part of a Swap."
 * type: object
 * required:
 *   - claim_order_id
 *   - created_at
 *   - id
 *   - idempotency_key
 *   - location_id
 *   - metadata
 *   - no_notification
 *   - order_id
 *   - received_at
 *   - refund_amount
 *   - shipping_data
 *   - status
 *   - swap_id
 *   - updated_at
 * properties:
 *   id:
 *     description: The return's ID
 *     type: string
 *     example: ret_01F0YET7XPCMF8RZ0Y151NZV2V
 *   status:
 *     description: Status of the Return.
 *     type: string
 *     enum:
 *       - requested
 *       - received
 *       - requires_action
 *       - canceled
 *     default: requested
 *   items:
 *     description: The Return Items that will be shipped back to the warehouse. Available if the relation `items` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/ReturnItem"
 *   swap_id:
 *     description: The ID of the Swap that the Return is a part of.
 *     nullable: true
 *     type: string
 *     example: null
 *   swap:
 *     description: A swap object. Available if the relation `swap` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/Swap"
 *   claim_order_id:
 *     description: The ID of the Claim that the Return is a part of.
 *     nullable: true
 *     type: string
 *     example: null
 *   claim_order:
 *     description: A claim order object. Available if the relation `claim_order` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/ClaimOrder"
 *   order_id:
 *     description: The ID of the Order that the Return is made from.
 *     nullable: true
 *     type: string
 *     example: order_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   order:
 *     description: An order object. Available if the relation `order` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/Order"
 *   shipping_method:
 *     description: The Shipping Method that will be used to send the Return back. Can be null if the Customer facilitates the return shipment themselves. Available if the relation `shipping_method` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/ShippingMethod"
 *   shipping_data:
 *     description: Data about the return shipment as provided by the Fulfilment Provider that handles the return shipment.
 *     nullable: true
 *     type: object
 *     example: {}
 *   location_id:
 *     description: The id of the stock location the return will be added back.
 *     nullable: true
 *     type: string
 *     example: sloc_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   refund_amount:
 *     description: The amount that should be refunded as a result of the return.
 *     type: integer
 *     example: 1000
 *   no_notification:
 *     description: When set to true, no notification will be sent related to this return.
 *     nullable: true
 *     type: boolean
 *     example: false
 *   idempotency_key:
 *     description: Randomly generated key used to continue the completion of the return in case of failure.
 *     nullable: true
 *     type: string
 *     externalDocs:
 *       url: https://docs.medusajs.com/advanced/backend/payment/overview#idempotency-key
 *       description: Learn more how to use the idempotency key.
 *   received_at:
 *     description: The date with timezone at which the return was received.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 *   metadata:
 *     description: An optional key-value map with additional details
 *     nullable: true
 *     type: object
 *     example: {car: "white"}
 */
