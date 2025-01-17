"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var dateFilter = function () {
    return joi_1.default.object({
        lt: joi_1.default.alternatives(joi_1.default.date().timestamp("unix"), joi_1.default.date()),
        gt: joi_1.default.alternatives(joi_1.default.date().timestamp("unix"), joi_1.default.date()),
        gte: joi_1.default.alternatives(joi_1.default.date().timestamp("unix"), joi_1.default.date()),
        lte: joi_1.default.alternatives(joi_1.default.date().timestamp("unix"), joi_1.default.date()),
    });
};
Object.assign(joi_1.default, {
    objectId: require("joi-objectid")(joi_1.default),
    address: function () {
        return joi_1.default.alternatives().try(joi_1.default.string(), joi_1.default.object().keys({
            first_name: joi_1.default.string().required(),
            last_name: joi_1.default.string().required(),
            company: joi_1.default.string().optional(),
            address_1: joi_1.default.string().required(),
            address_2: joi_1.default.string().allow(null, "").optional(),
            city: joi_1.default.string().required(),
            country_code: joi_1.default.string().required(),
            province: joi_1.default.string().allow(null, "").optional(),
            postal_code: joi_1.default.string().required(),
            phone: joi_1.default.string().optional(),
            metadata: joi_1.default.object().allow(null, {}).optional(),
        }));
    },
    dateFilter: dateFilter,
    orderFilter: function () {
        return joi_1.default.object().keys({
            id: joi_1.default.string(),
            q: joi_1.default.string(),
            status: joi_1.default.array()
                .items(joi_1.default.string().valid("pending", "completed", "archived", "canceled", "requires_action"))
                .single(),
            fulfillment_status: joi_1.default.array()
                .items(joi_1.default.string().valid("not_fulfilled", "fulfilled", "partially_fulfilled", "shipped", "partially_shipped", "canceled", "returned", "partially_returned", "requires_action"))
                .single(),
            payment_status: joi_1.default.array()
                .items(joi_1.default.string().valid("captured", "awaiting", "not_paid", "refunded", "partially_refunded", "canceled", "requires_action"))
                .single(),
            display_id: joi_1.default.string(),
            cart_id: joi_1.default.string(),
            offset: joi_1.default.string(),
            limit: joi_1.default.string(),
            expand: joi_1.default.string(),
            fields: joi_1.default.string(),
            customer_id: joi_1.default.string(),
            email: joi_1.default.string(),
            region_id: joi_1.default.string(),
            currency_code: joi_1.default.string(),
            tax_rate: joi_1.default.string(),
            canceled_at: dateFilter(),
            created_at: dateFilter(),
            updated_at: dateFilter(),
        });
    },
    productFilter: function () {
        return joi_1.default.object().keys({
            id: joi_1.default.string(),
            q: joi_1.default.string().allow(null, ""),
            status: joi_1.default.array()
                .items(joi_1.default.string().valid("proposed", "draft", "published", "rejected"))
                .single(),
            collection_id: joi_1.default.array().items(joi_1.default.string()).single(),
            tags: joi_1.default.array().items(joi_1.default.string()).single(),
            title: joi_1.default.string(),
            description: joi_1.default.string(),
            handle: joi_1.default.string(),
            is_giftcard: joi_1.default.string(),
            type: joi_1.default.string(),
            offset: joi_1.default.string(),
            limit: joi_1.default.string(),
            expand: joi_1.default.string(),
            fields: joi_1.default.string(),
            order: joi_1.default.string().optional(),
            created_at: dateFilter(),
            updated_at: dateFilter(),
            deleted_at: dateFilter(),
        });
    },
});
exports.default = joi_1.default;
//# sourceMappingURL=validator.js.map