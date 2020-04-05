"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIdx, rightIdx) {
        return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
    };
    CharactersCollection.prototype.swap = function (leftIdx, rightIdx) {
        var _a;
        var characters = this.data.split('');
        _a = [
            characters[rightIdx],
            characters[leftIdx],
        ], characters[leftIdx] = _a[0], characters[rightIdx] = _a[1];
        this.data = characters.join('');
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
