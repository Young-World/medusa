"use strict";
/**
 * @schema Cart
 * title: "Cart"
 * description: "Represents a user cart"
 * type: object
 * required:
 *   - billing_address_id
 *   - completed_at
 *   - context
 *   - created_at
 *   - customer_id
 *   - deleted_at
 *   - email
 *   - id
 *   - idempotency_key
 *   - metadata
 *   - payment_authorized_at
 *   - payment_id
 *   - payment_session
 *   - region_id
 *   - shipping_address_id
 *   - type
 *   - updated_at
 * properties:
 *   id:
 *     description: The cart's ID
 *     type: string
 *     example: cart_01G8ZH853Y6TFXWPG5EYE81X63
 *   email:
 *     description: The email associated with the cart
 *     nullable: true
 *     type: string
 *     format: email
 *   billing_address_id:
 *     description: The billing address's ID
 *     nullable: true
 *     type: string
 *     example: addr_01G8ZH853YPY9B94857DY91YGW
 *   billing_address:
 *     description: Available if the relation `billing_address` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/Address"
 *   shipping_address_id:
 *     description: The shipping address's ID
 *     nullable: true
 *     type: string
 *     example: addr_01G8ZH853YPY9B94857DY91YGW
 *   shipping_address:
 *     description: Available if the relation `shipping_address` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/Address"
 *   items:
 *     description: Available if the relation `items` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/LineItem"
 *   region_id:
 *     description: The region's ID
 *     type: string
 *     example: reg_01G1G5V26T9H8Y0M4JNE3YGA4G
 *   region:
 *     description: A region object. Available if the relation `region` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/Region"
 *   discounts:
 *     description: Available if the relation `discounts` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Discount"
 *   gift_cards:
 *     description: Available if the relation `gift_cards` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/GiftCard"
 *   customer_id:
 *     description: The customer's ID
 *     nullable: true
 *     type: string
 *     example: cus_01G2SG30J8C85S4A5CHM2S1NS2
 *   customer:
 *     description: A customer object. Available if the relation `customer` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/Customer"
 *   payment_session:
 *     description: The selected payment session in the cart.
 *     nullable: true
 *     $ref: "#/components/schemas/PaymentSession"
 *   payment_sessions:
 *     description: The payment sessions created on the cart.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/PaymentSession"
 *   payment_id:
 *     description: The payment's ID if available
 *     nullable: true
 *     type: string
 *     example: pay_01G8ZCC5W42ZNY842124G7P5R9
 *   payment:
 *     description: Available if the relation `payment` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/Payment"
 *   shipping_methods:
 *     description: The shipping methods added to the cart.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/ShippingMethod"
 *   type:
 *     description: The cart's type.
 *     type: string
 *     enum:
 *       - default
 *       - swap
 *       - draft_order
 *       - payment_link
 *       - claim
 *     default: default
 *   completed_at:
 *     description: The date with timezone at which the cart was completed.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   payment_authorized_at:
 *     description: The date with timezone at which the payment was authorized.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   idempotency_key:
 *     description: Randomly generated key used to continue the completion of a cart in case of failure.
 *     nullable: true
 *     type: string
 *     externalDocs:
 *       url: https://docs.medusajs.com/advanced/backend/payment/overview#idempotency-key
 *       description: Learn more how to use the idempotency key.
 *   context:
 *     description: "The context of the cart which can include info like IP or user agent."
 *     nullable: true
 *     type: object
 *     example:
 *       ip: "::1"
 *       user_agent: "PostmanRuntime/7.29.2"
 *   sales_channel_id:
 *     description: The sales channel ID the cart is associated with.
 *     nullable: true
 *     type: string
 *     example: null
 *   sales_channel:
 *     description: A sales channel object. Available if the relation `sales_channel` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/SalesChannel"
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 *   deleted_at:
 *     description: The date with timezone at which the resource was deleted.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   metadata:
 *     description: An optional key-value map with additional details
 *     nullable: true
 *     type: object
 *     example: {car: "white"}
 *   shipping_total:
 *     description: The total of shipping
 *     type: integer
 *     example: 1000
 *   discount_total:
 *     description: The total of discount
 *     type: integer
 *     example: 800
 *   item_tax_total:
 *     description: The total of items with taxes
 *     type: integer
 *     example: 8000
 *   shipping_tax_total:
 *     description: The total of shipping with taxes
 *     type: integer
 *     example: 1000
 *   tax_total:
 *     description: The total of tax
 *     type: integer
 *     example: 0
 *   refunded_total:
 *     description: The total amount refunded if the order associated with this cart is returned.
 *     type: integer
 *     example: 0
 *   total:
 *     description: The total amount of the cart
 *     type: integer
 *     example: 8200
 *   subtotal:
 *     description: The subtotal of the cart
 *     type: integer
 *     example: 8000
 *   refundable_amount:
 *     description: The amount that can be refunded
 *     type: integer
 *     example: 8200
 *   gift_card_total:
 *     description: The total of gift cards
 *     type: integer
 *     example: 0
 *   gift_card_tax_total:
 *     description: The total of gift cards with taxes
 *     type: integer
 *     example: 0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = exports.CartType = void 0;
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var feature_flag_decorators_1 = require("../utils/feature-flag-decorators");
var address_1 = require("./address");
var customer_1 = require("./customer");
var discount_1 = require("./discount");
var gift_card_1 = require("./gift-card");
var line_item_1 = require("./line-item");
var payment_1 = require("./payment");
var payment_session_1 = require("./payment-session");
var region_1 = require("./region");
var sales_channel_1 = require("./sales-channel");
var shipping_method_1 = require("./shipping-method");
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var CartType;
(function (CartType) {
    CartType["DEFAULT"] = "default";
    CartType["SWAP"] = "swap";
    CartType["DRAFT_ORDER"] = "draft_order";
    CartType["PAYMENT_LINK"] = "payment_link";
    CartType["CLAIM"] = "claim";
})(CartType = exports.CartType || (exports.CartType = {}));
var Cart = /** @class */ (function (_super) {
    __extends(Cart, _super);
    function Cart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.object = "cart";
        return _this;
    }
    Cart.prototype.afterLoad = function () {
        if (this.payment_sessions) {
            this.payment_session = this.payment_sessions.find(function (p) { return p.is_selected; });
        }
    };
    Cart.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "cart");
    };
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Cart.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Cart.prototype, "billing_address_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return address_1.Address; }, {
            cascade: ["insert", "remove", "soft-remove"],
        }),
        (0, typeorm_1.JoinColumn)({ name: "billing_address_id" }),
        __metadata("design:type", address_1.Address)
    ], Cart.prototype, "billing_address", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Cart.prototype, "shipping_address_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return address_1.Address; }, {
            cascade: ["insert", "remove", "soft-remove"],
        }),
        (0, typeorm_1.JoinColumn)({ name: "shipping_address_id" }),
        __metadata("design:type", Object)
    ], Cart.prototype, "shipping_address", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return line_item_1.LineItem; }, function (lineItem) { return lineItem.cart; }, {
            cascade: ["insert", "remove"],
        }),
        __metadata("design:type", Array)
    ], Cart.prototype, "items", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Cart.prototype, "region_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return region_1.Region; }),
        (0, typeorm_1.JoinColumn)({ name: "region_id" }),
        __metadata("design:type", region_1.Region)
    ], Cart.prototype, "region", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return discount_1.Discount; }),
        (0, typeorm_1.JoinTable)({
            name: "cart_discounts",
            joinColumn: {
                name: "cart_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "discount_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], Cart.prototype, "discounts", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return gift_card_1.GiftCard; }),
        (0, typeorm_1.JoinTable)({
            name: "cart_gift_cards",
            joinColumn: {
                name: "cart_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "gift_card_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], Cart.prototype, "gift_cards", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Cart.prototype, "customer_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return customer_1.Customer; }),
        (0, typeorm_1.JoinColumn)({ name: "customer_id" }),
        __metadata("design:type", customer_1.Customer)
    ], Cart.prototype, "customer", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return payment_session_1.PaymentSession; }, function (paymentSession) { return paymentSession.cart; }, {
            cascade: true,
        }),
        __metadata("design:type", Array)
    ], Cart.prototype, "payment_sessions", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Cart.prototype, "payment_id", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return payment_1.Payment; }),
        (0, typeorm_1.JoinColumn)({ name: "payment_id" }),
        __metadata("design:type", payment_1.Payment)
    ], Cart.prototype, "payment", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return shipping_method_1.ShippingMethod; }, function (method) { return method.cart; }, {
            cascade: ["soft-remove", "remove"],
        }),
        __metadata("design:type", Array)
    ], Cart.prototype, "shipping_methods", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "enum", enum: CartType, default: "default" }),
        __metadata("design:type", String)
    ], Cart.prototype, "type", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz"), nullable: true }),
        __metadata("design:type", Date)
    ], Cart.prototype, "completed_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz"), nullable: true }),
        __metadata("design:type", Date)
    ], Cart.prototype, "payment_authorized_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Cart.prototype, "idempotency_key", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], Cart.prototype, "context", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], Cart.prototype, "metadata", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagColumn)("sales_channels", { type: "varchar", nullable: true }),
        __metadata("design:type", Object)
    ], Cart.prototype, "sales_channel_id", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagDecorators)("sales_channels", [
            (0, typeorm_1.ManyToOne)(function () { return sales_channel_1.SalesChannel; }),
            (0, typeorm_1.JoinColumn)({ name: "sales_channel_id" }),
        ]),
        __metadata("design:type", sales_channel_1.SalesChannel)
    ], Cart.prototype, "sales_channel", void 0);
    __decorate([
        (0, typeorm_1.AfterLoad)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Cart.prototype, "afterLoad", null);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Cart.prototype, "beforeInsert", null);
    Cart = __decorate([
        (0, typeorm_1.Entity)()
    ], Cart);
    return Cart;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.Cart = Cart;
//# sourceMappingURL=cart.js.map