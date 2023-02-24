import { AddressPayload, FindParams } from "../../../../types/common";
/**
 * @oas [post] /orders/{id}
 * operationId: "PostOrdersOrder"
 * summary: "Update an Order"
 * description: "Updates and order"
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (query) expand {string} Comma separated list of relations to include in the result.
 *   - (query) fields {string} Comma separated list of fields to include in the result.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrdersOrderReq"
 * x-codegen:
 *   method: update
 *   params: AdminPostOrdersOrderParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.update(order_id, {
 *         email: 'user@example.com'
 *       })
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/orders/adasda' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "email": "user@example.com"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Order
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminOrdersRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
/**
 * @schema AdminPostOrdersOrderReq
 * type: object
 * properties:
 *   email:
 *     description: the email for the order
 *     type: string
 *   billing_address:
 *     description: Billing address
 *     anyOf:
 *       - $ref: "#/components/schemas/AddressFields"
 *   shipping_address:
 *     description: Shipping address
 *     anyOf:
 *       - $ref: "#/components/schemas/AddressFields"
 *   items:
 *     description: The Line Items for the order
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/LineItem"
 *   region:
 *     description: ID of the region where the order belongs
 *     type: string
 *   discounts:
 *     description: Discounts applied to the order
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Discount"
 *   customer_id:
 *     description: ID of the customer
 *     type: string
 *   payment_method:
 *     description: payment method chosen for the order
 *     type: object
 *     properties:
 *       provider_id:
 *         type: string
 *         description: ID of the payment provider
 *       data:
 *         description: Data relevant for the given payment method
 *         type: object
 *   shipping_method:
 *     description: The Shipping Method used for shipping the order.
 *     type: object
 *     properties:
 *       provider_id:
 *         type: string
 *         description: The ID of the shipping provider.
 *       profile_id:
 *         type: string
 *         description: The ID of the shipping profile.
 *       price:
 *         type: integer
 *         description: The price of the shipping.
 *       data:
 *         type: object
 *         description: Data relevant to the specific shipping method.
 *       items:
 *         type: array
 *         items:
 *           $ref: "#/components/schemas/LineItem"
 *         description: Items to ship
 *   no_notification:
 *     description: A flag to indicate if no notifications should be emitted related to the updated order.
 *     type: boolean
 */
export declare class AdminPostOrdersOrderReq {
    email?: string;
    billing_address?: AddressPayload;
    shipping_address?: AddressPayload;
    items?: Record<string, unknown>[];
    region?: string;
    discounts?: Record<string, unknown>[];
    customer_id?: string;
    payment_method?: PaymentMethod;
    shipping_method?: ShippingMethod[];
    no_notification?: boolean;
}
declare class PaymentMethod {
    provider_id?: string;
    data?: Record<string, unknown>;
}
declare class ShippingMethod {
    provider_id?: string;
    profile_id?: string;
    price?: number;
    data?: Record<string, unknown>;
    items?: Record<string, unknown>[];
}
export declare class AdminPostOrdersOrderParams extends FindParams {
}
