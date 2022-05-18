"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTranslation = exports.JSDict = void 0;
var EnDictionary_1 = require("./EnDictionary");
var JSDict = /** @class */ (function () {
    function JSDict() {
        this.dict = {};
    }
    JSDict.Create = function () {
        return new JSDict();
    };
    JSDict.prototype.getKeys = function () {
        var keys = [];
        for (var key in this.dict) {
            if (this.dict.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        return keys;
    };
    JSDict.prototype.getValues = function () {
        var vals = [];
        for (var key in this.dict) {
            if (this.dict.hasOwnProperty(key)) {
                var v = this.dict[key];
                if (this.exists(v)) {
                    vals.push(v);
                }
            }
        }
        return vals;
    };
    JSDict.prototype.get = function (key) {
        var v = this.dict[key];
        return this.exists(v) ? v : null;
    };
    JSDict.prototype.put = function (key, val) {
        this.dict[key] = val;
    };
    // Type predicate to ensure v exists
    JSDict.prototype.exists = function (v) {
        return v != null && typeof v !== 'undefined';
    };
    return JSDict;
}());
exports.JSDict = JSDict;
var dictionary = new EnDictionary_1.EnDictionary();
function getTranslation(id) {
    return dictionary.map.get(id) || id;
}
exports.getTranslation = getTranslation;
