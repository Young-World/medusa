"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _instanceof2 = _interopRequireDefault(require("@babel/runtime/helpers/instanceof"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _medusaCoreUtils = require("medusa-core-utils");
var _typeorm = require("typeorm");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Common functionality for Services
 * @interface
 */
var BaseService = /*#__PURE__*/function () {
  function BaseService() {
    (0, _classCallCheck2["default"])(this, BaseService);
    this.decorators_ = [];
  }
  (0, _createClass2["default"])(BaseService, [{
    key: "withTransaction",
    value: function withTransaction() {
      console.log("WARN: withTransaction called without custom implementation");
      return this;
    }

    /**
     * Used to build TypeORM queries.
     */
  }, {
    key: "buildQuery_",
    value: function buildQuery_(selector) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var build = function build(obj) {
        var where = Object.entries(obj).reduce(function (acc, _ref) {
          var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];
          // Undefined values indicate that they have no significance to the query.
          // If the query is looking for rows where a column is not set it should use null instead of undefined
          if (typeof value === "undefined") {
            return acc;
          }
          switch (true) {
            case (0, _instanceof2["default"])(value, _typeorm.FindOperator):
              acc[key] = value;
              break;
            case Array.isArray(value):
              acc[key] = (0, _typeorm.In)((0, _toConsumableArray2["default"])(value));
              break;
            case value !== null && (0, _typeof2["default"])(value) === "object":
              var subquery = [];
              Object.entries(value).map(function (_ref3) {
                var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
                  modifier = _ref4[0],
                  val = _ref4[1];
                switch (modifier) {
                  case "lt":
                    subquery.push({
                      operator: "<",
                      value: val
                    });
                    break;
                  case "gt":
                    subquery.push({
                      operator: ">",
                      value: val
                    });
                    break;
                  case "lte":
                    subquery.push({
                      operator: "<=",
                      value: val
                    });
                    break;
                  case "gte":
                    subquery.push({
                      operator: ">=",
                      value: val
                    });
                    break;
                  default:
                    acc[key] = value;
                    break;
                }
              });
              if (subquery.length) {
                acc[key] = (0, _typeorm.Raw)(function (a) {
                  return subquery.map(function (s, index) {
                    return "".concat(a, " ").concat(s.operator, " :").concat(index);
                  }).join(" AND ");
                }, subquery.map(function (s) {
                  return s.value;
                }));
              }
              break;
            default:
              acc[key] = value;
              break;
          }
          return acc;
        }, {});
        return where;
      };
      var query = {
        where: build(selector)
      };
      if ("deleted_at" in selector) {
        query.withDeleted = true;
      }
      if ("skip" in config) {
        query.skip = config.skip;
      }
      if ("take" in config) {
        query.take = config.take;
      }
      if ("relations" in config) {
        query.relations = config.relations;
      }
      if ("select" in config) {
        query.select = config.select;
      }
      if ("order" in config) {
        query.order = config.order;
      }
      return query;
    }

    /**
     * Confirms whether a given raw id is valid. Fails if the provided
     * id is null or undefined. The validate function takes an optional config
     * param, to support checking id prefix and length.
     * @param {string} rawId - the id to validate.
     * @param {object?} config - optional config
     * @returns {string} the rawId given that nothing failed
     */
  }, {
    key: "validateId_",
    value: function validateId_(rawId) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var prefix = config.prefix,
        length = config.length;
      if (!rawId) {
        throw new _medusaCoreUtils.MedusaError(_medusaCoreUtils.MedusaError.Types.INVALID_DATA, "Failed to validate id: ".concat(rawId));
      }
      if (prefix || length) {
        var _rawId$split = rawId.split("_"),
          _rawId$split2 = (0, _slicedToArray2["default"])(_rawId$split, 2),
          pre = _rawId$split2[0],
          rand = _rawId$split2[1];
        if (prefix && pre !== prefix) {
          throw new _medusaCoreUtils.MedusaError(_medusaCoreUtils.MedusaError.Types.INVALID_DATA, "The provided id: ".concat(rawId, " does not adhere to prefix constraint: ").concat(prefix));
        }
        if (length && length !== rand.length) {
          throw new _medusaCoreUtils.MedusaError(_medusaCoreUtils.MedusaError.Types.INVALID_DATA, "The provided id: ".concat(rawId, " does not adhere to length constraint: ").concat(length));
        }
      }
      return rawId;
    }
  }, {
    key: "shouldRetryTransaction",
    value: function shouldRetryTransaction(err) {
      var code = (0, _typeof2["default"])(err) === "object" ? String(err.code) : null;
      return code === "40001" || code === "40P01";
    }

    /**
     * Wraps some work within a transactional block. If the service already has
     * a transaction manager attached this will be reused, otherwise a new
     * transaction manager is created.
     * @param {function} work - the transactional work to be done
     * @param {string} isolation - the isolation level to be used for the work.
     * @return {any} the result of the transactional work
     */
  }, {
    key: "atomicPhase_",
    value: function () {
      var _atomicPhase_ = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(work, isolationOrErrorHandler, maybeErrorHandlerOrDontFail) {
        var _this = this;
        var errorHandler, isolation, dontFail, doWork, temp, _doWork, result, _result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              errorHandler = maybeErrorHandlerOrDontFail;
              isolation = isolationOrErrorHandler;
              dontFail = false;
              if (typeof isolationOrErrorHandler === "function") {
                isolation = null;
                errorHandler = isolationOrErrorHandler;
                dontFail = !!maybeErrorHandlerOrDontFail;
              }
              if (!this.transactionManager_) {
                _context3.next = 9;
                break;
              }
              doWork = /*#__PURE__*/function () {
                var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(m) {
                  var result, queryRunner;
                  return _regenerator["default"].wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _this.manager_ = m;
                        _this.transactionManager_ = m;
                        _context.prev = 2;
                        _context.next = 5;
                        return work(m);
                      case 5:
                        result = _context.sent;
                        return _context.abrupt("return", result);
                      case 9:
                        _context.prev = 9;
                        _context.t0 = _context["catch"](2);
                        if (!errorHandler) {
                          _context.next = 18;
                          break;
                        }
                        queryRunner = _this.transactionManager_.queryRunner;
                        if (!queryRunner.isTransactionActive) {
                          _context.next = 16;
                          break;
                        }
                        _context.next = 16;
                        return queryRunner.rollbackTransaction();
                      case 16:
                        _context.next = 18;
                        return errorHandler(_context.t0);
                      case 18:
                        throw _context.t0;
                      case 19:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee, null, [[2, 9]]);
                }));
                return function doWork(_x4) {
                  return _ref5.apply(this, arguments);
                };
              }();
              return _context3.abrupt("return", doWork(this.transactionManager_));
            case 9:
              temp = this.manager_;
              _doWork = /*#__PURE__*/function () {
                var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(m) {
                  var result;
                  return _regenerator["default"].wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _this.manager_ = m;
                        _this.transactionManager_ = m;
                        _context2.prev = 2;
                        _context2.next = 5;
                        return work(m);
                      case 5:
                        result = _context2.sent;
                        _this.manager_ = temp;
                        _this.transactionManager_ = undefined;
                        return _context2.abrupt("return", result);
                      case 11:
                        _context2.prev = 11;
                        _context2.t0 = _context2["catch"](2);
                        _this.manager_ = temp;
                        _this.transactionManager_ = undefined;
                        throw _context2.t0;
                      case 16:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2, null, [[2, 11]]);
                }));
                return function _doWork(_x5) {
                  return _ref6.apply(this, arguments);
                };
              }();
              if (!isolation) {
                _context3.next = 29;
                break;
              }
              _context3.prev = 12;
              _context3.next = 15;
              return this.manager_.transaction(isolation, function (m) {
                return _doWork(m);
              });
            case 15:
              result = _context3.sent;
              return _context3.abrupt("return", result);
            case 19:
              _context3.prev = 19;
              _context3.t0 = _context3["catch"](12);
              if (!this.shouldRetryTransaction(_context3.t0)) {
                _context3.next = 25;
                break;
              }
              return _context3.abrupt("return", this.manager_.transaction(isolation, function (m) {
                return _doWork(m);
              }));
            case 25:
              if (!errorHandler) {
                _context3.next = 28;
                break;
              }
              _context3.next = 28;
              return errorHandler(_context3.t0);
            case 28:
              throw _context3.t0;
            case 29:
              _context3.prev = 29;
              _context3.next = 32;
              return this.manager_.transaction(function (m) {
                return _doWork(m);
              });
            case 32:
              return _context3.abrupt("return", _context3.sent);
            case 35:
              _context3.prev = 35;
              _context3.t1 = _context3["catch"](29);
              if (!errorHandler) {
                _context3.next = 43;
                break;
              }
              _context3.next = 40;
              return errorHandler(_context3.t1);
            case 40:
              _result = _context3.sent;
              if (!dontFail) {
                _context3.next = 43;
                break;
              }
              return _context3.abrupt("return", _result);
            case 43:
              throw _context3.t1;
            case 44:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[12, 19], [29, 35]]);
      }));
      function atomicPhase_(_x, _x2, _x3) {
        return _atomicPhase_.apply(this, arguments);
      }
      return atomicPhase_;
    }()
    /**
     * Dedicated method to set metadata.
     * @param {string} obj - the entity to apply metadata to.
     * @param {object} metadata - the metadata to set
     * @return {Promise} resolves to the updated result.
     */
  }, {
    key: "setMetadata_",
    value: function setMetadata_(obj, metadata) {
      var existing = obj.metadata || {};
      var newData = {};
      for (var _i = 0, _Object$entries = Object.entries(metadata); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        if (typeof key !== "string") {
          throw new _medusaCoreUtils.MedusaError(_medusaCoreUtils.MedusaError.Types.INVALID_ARGUMENT, "Key type is invalid. Metadata keys must be strings");
        }
        newData[key] = value;
      }
      var updated = _objectSpread(_objectSpread({}, existing), newData);
      return updated;
    }

    /**
     * Adds a decorator to a service. The decorator must be a function and should
     * return a decorated object.
     * @param {function} fn - the decorator to add to the service
     */
  }, {
    key: "addDecorator",
    value: function addDecorator(fn) {
      if (typeof fn !== "function") {
        throw Error("Decorators must be of type function");
      }
      this.decorators_.push(fn);
    }

    /**
     * Runs the decorators registered on the service. The decorators are run in
     * the order they have been registered in. Failing decorators will be skipped
     * in order to ensure deliverability in spite of breaking code.
     * @param {object} obj - the object to decorate.
     * @return {object} the decorated object.
     */
  }, {
    key: "runDecorators_",
    value: function runDecorators_(obj) {
      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var expandFields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      return this.decorators_.reduce( /*#__PURE__*/function () {
        var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(acc, next) {
          return _regenerator["default"].wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", acc.then(function (res) {
                  return next(res, fields, expandFields);
                })["catch"](function () {
                  return acc;
                }));
              case 1:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
        return function (_x6, _x7) {
          return _ref7.apply(this, arguments);
        };
      }(), Promise.resolve(obj));
    }
  }]);
  return BaseService;
}();
var _default = BaseService;
exports["default"] = _default;