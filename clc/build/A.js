"use strict";
var B_1 = require('./B');
var A = (function () {
    function A() {
    }
    Object.defineProperty(A.prototype, "val", {
        get: function () {
            return this._val;
        },
        enumerable: true,
        configurable: true
    });
    A.prototype.getArray = function () {
        return [1, 2];
    };
    A.prototype.callB = function () {
        var b = new B_1.B();
        b.doSomething();
    };
    return A;
}());
exports.A = A;
