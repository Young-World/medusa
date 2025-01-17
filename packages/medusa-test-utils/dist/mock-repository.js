"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MockRepo = /*#__PURE__*/function () {
  function MockRepo(_ref) {
    var _this = this;
    var create = _ref.create,
      update = _ref.update,
      remove = _ref.remove,
      softRemove = _ref.softRemove,
      find = _ref.find,
      findDescendantsTree = _ref.findDescendantsTree,
      findOne = _ref.findOne,
      findOneWithRelations = _ref.findOneWithRelations,
      findOneOrFail = _ref.findOneOrFail,
      save = _ref.save,
      findAndCount = _ref.findAndCount,
      del = _ref.del;
    _classCallCheck(this, MockRepo);
    _defineProperty(this, "create", jest.fn().mockImplementation(function () {
      if (_this.create_) {
        return _this.create_.apply(_this, arguments);
      }
      return {};
    }));
    _defineProperty(this, "softRemove", jest.fn().mockImplementation(function () {
      if (_this.softRemove_) {
        return _this.softRemove_.apply(_this, arguments);
      }
      return {};
    }));
    _defineProperty(this, "remove", jest.fn().mockImplementation(function () {
      if (_this.remove_) {
        return _this.remove_.apply(_this, arguments);
      }
      return {};
    }));
    _defineProperty(this, "update", jest.fn().mockImplementation(function () {
      if (_this.update_) {
        return _this.update_.apply(_this, arguments);
      }
    }));
    _defineProperty(this, "findOneOrFail", jest.fn().mockImplementation(function () {
      if (_this.findOneOrFail_) {
        return _this.findOneOrFail_.apply(_this, arguments);
      }
    }));
    _defineProperty(this, "findOneWithRelations", jest.fn().mockImplementation(function () {
      if (_this.findOneWithRelations_) {
        return _this.findOneWithRelations_.apply(_this, arguments);
      }
    }));
    _defineProperty(this, "findOne", jest.fn().mockImplementation(function () {
      if (_this.findOne_) {
        return _this.findOne_.apply(_this, arguments);
      }
    }));
    _defineProperty(this, "findDescendantsTree", jest.fn().mockImplementation(function () {
      if (_this.findDescendantsTree_) {
        return _this.findDescendantsTree_.apply(_this, arguments);
      }
    }));
    _defineProperty(this, "findOneOrFail", jest.fn().mockImplementation(function () {
      if (_this.findOneOrFail_) {
        return _this.findOneOrFail_.apply(_this, arguments);
      }
    }));
    _defineProperty(this, "find", jest.fn().mockImplementation(function () {
      if (_this.find_) {
        return _this.find_.apply(_this, arguments);
      }
    }));
    _defineProperty(this, "softRemove", jest.fn().mockImplementation(function () {
      if (_this.softRemove_) {
        return _this.softRemove_.apply(_this, arguments);
      }
    }));
    _defineProperty(this, "save", jest.fn().mockImplementation(function () {
      if (_this.save_) {
        return _this.save_.apply(_this, arguments);
      }
      return Promise.resolve.apply(Promise, arguments);
    }));
    _defineProperty(this, "findAndCount", jest.fn().mockImplementation(function () {
      if (_this.findAndCount_) {
        return _this.findAndCount_.apply(_this, arguments);
      }
      return {};
    }));
    _defineProperty(this, "delete", jest.fn().mockImplementation(function () {
      if (_this.delete_) {
        return _this.delete_.apply(_this, arguments);
      }
      return {};
    }));
    this.create_ = create;
    this.update_ = update;
    this.remove_ = remove;
    this.delete_ = del;
    this.softRemove_ = softRemove;
    this.find_ = find;
    this.findDescendantsTree_ = findDescendantsTree;
    this.findOne_ = findOne;
    this.findOneOrFail_ = findOneOrFail;
    this.save_ = save;
    this.findAndCount_ = findAndCount;
    this.findOneWithRelations_ = findOneWithRelations;
  }
  _createClass(MockRepo, [{
    key: "setFindOne",
    value: function setFindOne(fn) {
      this.findOne_ = fn;
    }
  }]);
  return MockRepo;
}();
var _default = function _default() {
  var methods = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new MockRepo(methods);
};
exports["default"] = _default;