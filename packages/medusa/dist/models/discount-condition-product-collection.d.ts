import { DiscountCondition } from "./discount-condition";
import { ProductCollection } from "./product-collection";
export declare class DiscountConditionProductCollection {
    product_collection_id: string;
    condition_id: string;
    product_collection?: ProductCollection;
    discount_condition?: DiscountCondition;
    created_at: Date;
    updated_at: Date;
    metadata: Record<string, unknown>;
}
/**
 * @schema DiscountConditionProductCollection
 * title: "Product Collection Discount Condition"
 * description: "Associates a discount condition with a product collection"
 * type: object
 * required:
 *   - condition_id
 *   - created_at
 *   - metadata
 *   - product_collection_id
 *   - updated_at
 * properties:
 *   product_collection_id:
 *     description: The ID of the Product Collection
 *     type: string
 *     example: pcol_01F0YESBFAZ0DV6V831JXWH0BG
 *   condition_id:
 *     description: The ID of the Discount Condition
 *     type: string
 *     example: discon_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   product_collection:
 *     description: Available if the relation `product_collection` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/ProductCollection"
 *   discount_condition:
 *     description: Available if the relation `discount_condition` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/DiscountCondition"
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
