import { FindParams } from "../../../../types/common";
/**
 * @oas [post] /orders/{id}/shipping-methods
 * operationId: "PostOrdersOrderShippingMethods"
 * summary: "Add a Shipping Method"
 * description: "Adds a Shipping Method to an Order. If another Shipping Method exists with the same Shipping Profile, the previous Shipping Method will be replaced."
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (query) expand {string} Comma separated list of relations to include in the result.
 *   - (query) fields {string} Comma separated list of fields to include in the result.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrdersOrderShippingMethodsReq"
 * x-authenticated: true
 * x-codegen:
 *   method: addShippingMethod
 *   params: AdminPostOrdersOrderShippingMethodsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.addShippingMethod(order_id, {
 *         price: 1000,
 *         option_id
 *       })
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/orders/{id}/shipping-methods' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "price": 1000,
 *           "option_id": "{option_id}"
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
 * @schema AdminPostOrdersOrderShippingMethodsReq
 * type: object
 * required:
 *   - price
 *   - option_id
 * properties:
 *   price:
 *     type: number
 *     description: The price (excluding VAT) that should be charged for the Shipping Method
 *   option_id:
 *     type: string
 *     description: The ID of the Shipping Option to create the Shipping Method from.
 *   date:
 *     type: object
 *     description: The data required for the Shipping Option to create a Shipping Method. This will depend on the Fulfillment Provider.
 */
export declare class AdminPostOrdersOrderShippingMethodsReq {
    price: number;
    option_id: string;
    data?: Record<string, unknown>;
}
export declare class AdminPostOrdersOrderShippingMethodsParams extends FindParams {
}
