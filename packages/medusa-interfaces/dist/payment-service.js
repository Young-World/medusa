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
 * The interface that all payment services must inherit from. The intercace
 * provides the necessary methods for creating, authorizing and managing
 * payments.
 * @interface
 */
var BasePaymentService = /*#__PURE__*/function (_BaseService) {
  (0, _inherits2["default"])(BasePaymentService, _BaseService);
  var _super = _createSuper(BasePaymentService);
  function BasePaymentService() {
    (0, _classCallCheck2["default"])(this, BasePaymentService);
    return _super.call(this);
  }
  (0, _createClass2["default"])(BasePaymentService, [{
    key: "getIdentifier",
    value: function getIdentifier() {
      return this.constructor.identifier;
    }

    /**
     * Used to create a payment to be processed with the service's payment gateway.
     * @param cart {object} - the cart that the payment should cover.
     * @return {Promise<{object}>} - returns a promise that resolves to an object
     * containing the payment data. This data will be saved to the cart for later
     * use.
     */
  }, {
    key: "createPayment",
    value: function createPayment(cart) {
      throw Error("createPayment must be overridden by the child class");
    }

    /**
     * Used to retrieve a payment.
     * @param cart {object} - the cart whose payment should be retrieved.
     * @return {Promise<{object}>} - returns a promise that resolves to the
     * payment object as stored with the provider.
     */
  }, {
    key: "retrievePayment",
    value: function retrievePayment(cart) {
      throw Error("getPayment must be overridden by the child class");
    }

    /**
     * Used to update a payment. This method is called when the cart is updated.
     * @param cart {object} - the cart whose payment should be updated.
     * @return {Promise<{object}>} - returns a promise that resolves to the
     * payment object as stored with the provider.
     */
  }, {
    key: "updatePayment",
    value: function updatePayment(cart) {
      throw Error("updatePayment must be overridden by the child class");
    }
  }, {
    key: "getStatus",
    value: function getStatus() {
      throw Error("getStatus must be overridden by the child class");
    }
  }, {
    key: "authorizePayment",
    value: function authorizePayment() {
      throw Error("authorizePayment must be overridden by the child class");
    }
  }, {
    key: "capturePayment",
    value: function capturePayment() {
      throw Error("capturePayment must be overridden by the child class");
    }
  }, {
    key: "refundPayment",
    value: function refundPayment() {
      throw Error("refundPayment must be overridden by the child class");
    }
  }, {
    key: "deletePayment",
    value: function deletePayment() {
      throw Error("deletePayment must be overridden by the child class");
    }

    /**
     * If the payment provider can save a payment method this function will
     * retrieve them.
     */
  }, {
    key: "retrieveSavedMethods",
    value: function retrieveSavedMethods(customer) {
      return Promise.resolve([]);
    }
  }]);
  return BasePaymentService;
}(_baseService["default"]);
var _default = BasePaymentService;
exports["default"] = _default;