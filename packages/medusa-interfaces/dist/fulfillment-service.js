"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _baseService = _interopRequireDefault(require("./base-service"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * The interface that all fulfillment services must inherit from. The intercace
 * provides the necessary methods for creating, authorizing and managing
 * fulfillment orders.
 * @interface
 */
var BaseFulfillmentService = /*#__PURE__*/function (_BaseService) {
  (0, _inherits2["default"])(BaseFulfillmentService, _BaseService);
  var _super = _createSuper(BaseFulfillmentService);
  function BaseFulfillmentService() {
    (0, _classCallCheck2["default"])(this, BaseFulfillmentService);
    return _super.call(this);
  }
  (0, _createClass2["default"])(BaseFulfillmentService, [{
    key: "getIdentifier",
    value: function getIdentifier() {
      return this.constructor.identifier;
    }

    /**
     * Called before a shipping option is created in Admin. The method should
     * return all of the options that the fulfillment provider can be used with,
     * and it is here the distinction between different shipping options are
     * enforced. For example, a fulfillment provider may offer Standard Shipping
     * and Express Shipping as fulfillment options, it is up to the store operator
     * to create shipping options in Medusa that can be chosen between by the
     * customer.
     */
  }, {
    key: "getFulfillmentOptions",
    value: function getFulfillmentOptions() {
      throw Error("getFulfillmentOptions must be overridden by the child class");
    }

    /**
     * Called before a shipping method is set on a cart to ensure that the data
     * sent with the shipping method is valid. The data object may contain extra
     * data about the shipment such as an id of a drop point. It is up to the
     * fulfillment provider to enforce that the correct data is being sent
     * through.
     * @param {object} optionData - the data to validate
     * @param {object} data - the data to validate
     * @param {object | undefined} cart - the cart to which the shipping method will be applied
     * @return {object} the data to populate `cart.shipping_methods.$.data` this
     *    is usually important for future actions like generating shipping labels
     */
  }, {
    key: "validateFulfillmentData",
    value: function validateFulfillmentData(optionData, data, cart) {
      throw Error("validateFulfillmentData must be overridden by the child class");
    }

    /**
     * Called before a shipping option is created in Admin. Use this to ensure
     * that a fulfillment option does in fact exist.
     */
  }, {
    key: "validateOption",
    value: function validateOption(data) {
      throw Error("validateOption must be overridden by the child class");
    }
  }, {
    key: "canCalculate",
    value: function canCalculate(data) {
      throw Error("canCalculate must be overridden by the child class");
    }

    /**
     * Used to calculate a price for a given shipping option.
     */
  }, {
    key: "calculatePrice",
    value: function calculatePrice(optionData, data, cart) {
      throw Error("calculatePrice must be overridden by the child class");
    }
  }, {
    key: "createFulfillment",
    value: function createFulfillment(data, items, order, fulfillment) {
      throw Error("createFulfillment must be overridden by the child class");
    }
  }, {
    key: "cancelFulfillment",
    value: function cancelFulfillment(fulfillment) {
      throw Error("cancelFulfillment must be overridden by the child class");
    }

    /**
     * Used to retrieve documents associated with a fulfillment.
     * Will default to returning no documents.
     */
  }, {
    key: "getFulfillmentDocuments",
    value: function getFulfillmentDocuments(data) {
      return [];
    }

    /**
     * Used to create a return order. Should return the data necessary for future
     * operations on the return; in particular the data may be used to receive
     * documents attached to the return.
     */
  }, {
    key: "createReturn",
    value: function createReturn(fromData) {
      throw Error("createReturn must be overridden by the child class");
    }

    /**
     * Used to retrieve documents related to a return order.
     */
  }, {
    key: "getReturnDocuments",
    value: function getReturnDocuments(data) {
      return [];
    }

    /**
     * Used to retrieve documents related to a shipment.
     */
  }, {
    key: "getShipmentDocuments",
    value: function getShipmentDocuments(data) {
      return [];
    }
  }, {
    key: "retrieveDocuments",
    value: function retrieveDocuments(fulfillmentData, documentType) {
      throw Error("retrieveDocuments must be overridden by the child class");
    }
  }]);
  return BaseFulfillmentService;
}(_baseService["default"]);
var _default = BaseFulfillmentService;
exports["default"] = _default;