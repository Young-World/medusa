import { Currency } from "../../../../models";
import { ExtendedRequest } from "../../../../types/global";
/**
 * @oas [post] /currencies/{code}
 * operationId: "PostCurrenciesCurrency"
 * summary: "Update a Currency"
 * description: "Update a Currency"
 * x-authenticated: true
 * parameters:
 *   - (path) code=* {string} The code of the Currency.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostCurrenciesCurrencyReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.currencies.update(code, {
 *         includes_tax: true
 *       })
 *       .then(({ currency }) => {
 *         console.log(currency.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/currencies/{code}' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "includes_tax": true
 *       }'
 * tags:
 *   - Currency
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminCurrenciesRes"
 */
declare const _default: (req: ExtendedRequest<Currency>, res: any) => Promise<void>;
export default _default;
/**
 * @schema AdminPostCurrenciesCurrencyReq
 * type: object
 * properties:
 *   includes_tax:
 *     type: boolean
 *     description: "[EXPERIMENTAL] Tax included in prices of currency."
 */
export declare class AdminPostCurrenciesCurrencyReq {
    includes_tax?: boolean;
}