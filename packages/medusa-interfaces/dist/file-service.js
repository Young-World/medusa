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
 * Interface for file connectors
 * @interface
 */
var BaseFileService = /*#__PURE__*/function (_BaseService) {
  (0, _inherits2["default"])(BaseFileService, _BaseService);
  var _super = _createSuper(BaseFileService);
  function BaseFileService() {
    (0, _classCallCheck2["default"])(this, BaseFileService);
    return _super.call(this);
  }
  (0, _createClass2["default"])(BaseFileService, [{
    key: "upload",
    value: function upload() {
      throw Error("upload must be overridden by the child class");
    }
  }, {
    key: "delete",
    value: function _delete() {
      throw Error("delete must be overridden by the child class");
    }
  }]);
  return BaseFileService;
}(_baseService["default"]);
var _default = BaseFileService;
exports["default"] = _default;