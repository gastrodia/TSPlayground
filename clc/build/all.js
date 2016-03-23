var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define("B", ["require", "exports", "A"], function (require, exports, A_1) {
    "use strict";
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
    debugger;
    exports.B = B;
});
define("A", ["require", "exports"], function (require, exports) {
    "use strict";
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
            debugger;
            var dep = require('B');
            var b = new dep.B();
            b.doSomething();
        };
        return A;
    }());
    exports.A = A;
});
define("T", ["require", "exports", "A"], function (require, exports, A_2) {
    "use strict";
    var a = new A_2.A();
    a.callB();
});
