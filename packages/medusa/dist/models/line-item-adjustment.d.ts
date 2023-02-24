import { Discount } from "./discount";
import { LineItem } from "./line-item";
export declare class LineItemAdjustment {
    id: string;
    item_id: string;
    item: LineItem;
    description: string;
    discount: Discount;
    discount_id: string;
    amount: number;
    metadata: Record<string, unknown>;
    private beforeInsert;
}
/**
 * @schema LineItemAdjustment
 * title: "Line Item Adjustment"
 * description: "Represents a Line Item Adjustment"
 * type: object
 * required:
 *   - amount
 *   - description
 *   - discount_id
 *   - id
 *   - item_id
 *   - metadata
 * properties:
 *   id:
 *     description: The Line Item Adjustment's ID
 *     type: string
 *     example: lia_01G8TKE4XYCTHSCK2GDEP47RE1
 *   item_id:
 *     description: The ID of the line item
 *     type: string
 *     example: item_01G8ZC9GWT6B2GP5FSXRXNFNGN
 *   item:
 *     description: Available if the relation `item` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/LineItem"
 *   description:
 *     description: The line item's adjustment description
 *     type: string
 *     example: Adjusted item's price.
 *   discount_id:
 *     description: The ID of the discount associated with the adjustment
 *     nullable: true
 *     type: string
 *     example: disc_01F0YESMW10MGHWJKZSDDMN0VN
 *   discount:
 *     description: Available if the relation `discount` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/Discount"
 *   amount:
 *     description: The adjustment amount
 *     type: integer
 *     example: 1000
 *   metadata:
 *     description: An optional key-value map with additional details
 *     nullable: true
 *     type: object
 *     example: {car: "white"}
 */