var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
__extends = function (a, b) {
    function c() { }
    c.prototype = b.prototype;
    a.superClass_ = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.base = function (a, c, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
            g[h - 2] = arguments[h];
        return b.prototype[c].apply(a, g);
    };
};
define("A", ["require", "exports"], function (require, exports) {
    "use strict";
    var A = (function () {
        function A() {
        }
        return A;
    }());
    exports.A = A;
});
define("B", ["require", "exports", "A"], function (require, exports, A_1) {
    "use strict";
    var B = (function (_super) {
        __extends(B, _super);
        function B() {
            _super.apply(this, arguments);
        }
        return B;
    }(A_1.A));
    exports.B = B;
});
define("T", ["require", "exports", "B"], function (require, exports, B_1) {
    "use strict";
    var b = new B_1.B();
});
