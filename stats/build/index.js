"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MathResult_1 = require("./MathResult");
var reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MathResult_1.MatchResult.HomeWin) {
        manUnitedWins += 1;
    }
    else if (match[2] === 'Man United' && match[5] === MathResult_1.MatchResult.AwayWin) {
        manUnitedWins += 1;
    }
}
console.log('Man U Wins:', manUnitedWins);
