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
 * The interface that all search services must implement.
 * @interface
 */
var SearchService = /*#__PURE__*/function (_BaseService) {
  (0, _inherits2["default"])(SearchService, _BaseService);
  var _super = _createSuper(SearchService);
  function SearchService() {
    (0, _classCallCheck2["default"])(this, SearchService);
    return _super.call(this);
  }
  (0, _createClass2["default"])(SearchService, [{
    key: "options",
    get: function get() {
      var _this$options_;
      return (_this$options_ = this.options_) !== null && _this$options_ !== void 0 ? _this$options_ : {};
    }

    /**
     * Used to create an index
     * @param indexName {string} - the index name
     * @param [options] {string} - the index name
     * @return {Promise<{object}>} - returns response from search engine provider
     */
  }, {
    key: "createIndex",
    value: function createIndex(indexName, options) {
      throw Error("createIndex must be overridden by a child class");
    }

    /**
     * Used to get an index
     * @param indexName {string} - the index name.
     * @return {Promise<{object}>} - returns response from search engine provider
     */
  }, {
    key: "getIndex",
    value: function getIndex(indexName) {
      throw Error("getIndex must be overridden by a child class");
    }

    /**
     * Used to index documents by the search engine provider
     * @param indexName {string} - the index name
     * @param documents {Array.<Object>} - documents array to be indexed
     * @param type {string} - type of documents to be added (e.g: products, regions, orders, etc)
     * @return {Promise<{object}>} - returns response from search engine provider
     */
  }, {
    key: "addDocuments",
    value: function addDocuments(indexName, documents, type) {
      throw Error("addDocuments must be overridden by a child class");
    }

    /**
     * Used to replace documents
     * @param indexName {string} - the index name.
     * @param documents {Object} - array of document objects that will replace existing documents
     * @param type {Array.<Object>} - type of documents to be replaced (e.g: products, regions, orders, etc)
     * @return {Promise<{object}>} - returns response from search engine provider
     */
  }, {
    key: "replaceDocuments",
    value: function replaceDocuments(indexName, documents, type) {
      throw Error("updateDocument must be overridden by a child class");
    }

    /**
     * Used to delete document
     * @param indexName {string} - the index name
     * @param document_id {string} - the id of the document
     * @return {Promise<{object}>} - returns response from search engine provider
     */
  }, {
    key: "deleteDocument",
    value: function deleteDocument(indexName, document_id) {
      throw Error("deleteDocument must be overridden by a child class");
    }

    /**
     * Used to delete all documents
     * @param indexName {string} - the index name
     * @return {Promise<{object}>} - returns response from search engine provider
     */
  }, {
    key: "deleteAllDocuments",
    value: function deleteAllDocuments(indexName) {
      throw Error("deleteAllDocuments must be overridden by a child class");
    }

    /**
     * Used to search for a document in an index
     * @param indexName {string} - the index name
     * @param query {string} - the search query
     * @param options {{ paginationOptions: { limit: number, offset: number }, filter: any, additionalOptions: any}}
     * - any options passed to the request object other than the query and indexName
     * - additionalOptions contain any provider specific options
     * @return {Promise<{ hits: any[]; [k: string]: any; }>} returns response from search engine provider
     */
  }, {
    key: "search",
    value: function search(indexName, query, options) {
      throw Error("search must be overridden by a child class");
    }

    /**
     * Used to update the settings of an index
     * @param indexName {string} - the index name
     * @param settings {object} - settings object
     * @return {Promise<{object}>} - returns response from search engine provider
     */
  }, {
    key: "updateSettings",
    value: function updateSettings(indexName, settings) {
      throw Error("updateSettings must be overridden by a child class");
    }
  }]);
  return SearchService;
}(_baseService["default"]);
var _default = SearchService;
exports["default"] = _default;