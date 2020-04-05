"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dateStringToDate(dateString) {
    // 28/10/2020 => ['28', '10', '2020']
    var dateParts = dateString.split('/').map(function (value) {
        return parseInt(value);
    });
    // Year, Month (0-based so - 1), Day
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}
exports.dateStringToDate = dateStringToDate;
