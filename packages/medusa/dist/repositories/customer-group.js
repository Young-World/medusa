"use strict";
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerGroupRepository = void 0;
var typeorm_1 = require("typeorm");
var models_1 = require("../models");
var repository_1 = require("../utils/repository");
var CustomerGroupRepository = /** @class */ (function (_super) {
    __extends(CustomerGroupRepository, _super);
    function CustomerGroupRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomerGroupRepository.prototype.addCustomers = function (groupId, customerIds) {
        return __awaiter(this, void 0, void 0, function () {
            var customerGroup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOne(groupId)];
                    case 1:
                        customerGroup = _a.sent();
                        return [4 /*yield*/, this.createQueryBuilder()
                                .insert()
                                .into("customer_group_customers")
                                .values(customerIds.map(function (id) { return ({
                                customer_id: id,
                                customer_group_id: groupId,
                            }); }))
                                .orIgnore()
                                .execute()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, customerGroup];
                }
            });
        });
    };
    CustomerGroupRepository.prototype.removeCustomers = function (groupId, customerIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .delete()
                            .from("customer_group_customers")
                            .where({
                            customer_group_id: groupId,
                            customer_id: (0, typeorm_1.In)(customerIds),
                        })
                            .execute()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CustomerGroupRepository.prototype.findWithRelationsAndCount = function (relations, idsOrOptionsWithoutRelations) {
        var _a, _b, _c, _d;
        if (relations === void 0) { relations = []; }
        if (idsOrOptionsWithoutRelations === void 0) { idsOrOptionsWithoutRelations = { where: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var count, entities, customJoinsBuilders, discountConditionId_1, result, entitiesIds, options, toReturn, groupedRelations, entitiesIdsWithRelations, entitiesAndRelations, entitiesToReturn;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!Array.isArray(idsOrOptionsWithoutRelations)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.findByIds(idsOrOptionsWithoutRelations, {
                                withDeleted: (_a = idsOrOptionsWithoutRelations.withDeleted) !== null && _a !== void 0 ? _a : false,
                            })];
                    case 1:
                        entities = _e.sent();
                        count = entities.length;
                        return [3 /*break*/, 4];
                    case 2:
                        customJoinsBuilders = [];
                        if ((_b = idsOrOptionsWithoutRelations === null || idsOrOptionsWithoutRelations === void 0 ? void 0 : idsOrOptionsWithoutRelations.where) === null || _b === void 0 ? void 0 : _b.discount_condition_id) {
                            discountConditionId_1 = (_c = idsOrOptionsWithoutRelations === null || idsOrOptionsWithoutRelations === void 0 ? void 0 : idsOrOptionsWithoutRelations.where) === null || _c === void 0 ? void 0 : _c.discount_condition_id;
                            (_d = idsOrOptionsWithoutRelations === null || idsOrOptionsWithoutRelations === void 0 ? void 0 : idsOrOptionsWithoutRelations.where) === null || _d === void 0 ? true : delete _d.discount_condition_id;
                            customJoinsBuilders.push(function (qb, alias) {
                                qb.innerJoin("discount_condition_customer_group", "dc_cg", "dc_cg.customer_group_id = ".concat(alias, ".id AND dc_cg.condition_id = :dcId"), { dcId: discountConditionId_1 });
                            });
                        }
                        return [4 /*yield*/, (0, repository_1.queryEntityWithoutRelations)(this, idsOrOptionsWithoutRelations, true, customJoinsBuilders)];
                    case 3:
                        result = _e.sent();
                        entities = result[0];
                        count = result[1];
                        _e.label = 4;
                    case 4:
                        entitiesIds = entities.map(function (_a) {
                            var id = _a.id;
                            return id;
                        });
                        if (entitiesIds.length === 0) {
                            // no need to continue
                            return [2 /*return*/, [[], count]];
                        }
                        if (!(relations.length === 0)) return [3 /*break*/, 6];
                        options = __assign({}, idsOrOptionsWithoutRelations);
                        // Since we are finding by the ids that have been retrieved above and those ids are already
                        // applying skip/take. Remove those options to avoid getting no results
                        delete options.skip;
                        delete options.take;
                        return [4 /*yield*/, this.findByIds(entitiesIds, options)];
                    case 5:
                        toReturn = _e.sent();
                        return [2 /*return*/, [toReturn, toReturn.length]];
                    case 6:
                        groupedRelations = (0, repository_1.getGroupedRelations)(relations);
                        return [4 /*yield*/, (0, repository_1.queryEntityWithIds)(this, entitiesIds, groupedRelations, idsOrOptionsWithoutRelations.withDeleted, idsOrOptionsWithoutRelations.select)];
                    case 7:
                        entitiesIdsWithRelations = _e.sent();
                        entitiesAndRelations = entitiesIdsWithRelations.concat(entities);
                        entitiesToReturn = (0, repository_1.mergeEntitiesWithRelations)(entitiesAndRelations);
                        return [2 /*return*/, [entitiesToReturn, count]];
                }
            });
        });
    };
    CustomerGroupRepository = __decorate([
        (0, typeorm_1.EntityRepository)(models_1.CustomerGroup)
    ], CustomerGroupRepository);
    return CustomerGroupRepository;
}(typeorm_1.Repository));
exports.CustomerGroupRepository = CustomerGroupRepository;
//# sourceMappingURL=customer-group.js.map