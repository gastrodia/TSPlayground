"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A_1 = require('./A');
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.call(this);
    }
    B.prototype.getObject = function () {
        return {
            array: this.getArray()
        };
    };
    B.prototype.doSomething = function () {
        console.log('b');
    };
    return B;
}(A_1.A));
exports.B = B;
