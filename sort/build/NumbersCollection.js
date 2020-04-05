"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (leftIdx, rightIdx) {
        return this.data[leftIdx] > this.data[rightIdx];
    };
    NumbersCollection.prototype.swap = function (leftIdx, rightIdx) {
        var _a;
        var data = this.data;
        _a = [data[rightIdx], data[leftIdx]], data[leftIdx] = _a[0], data[rightIdx] = _a[1];
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
