var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A = (function () {
    function A() {
        this.contentBB = '123';
        this.log = function () {
            console.log(this.content);
        };
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
    return A;
}());
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.apply(this, arguments);
    }
    return B;
}(A));
function test(args) {
    var b = new B();
    b.log();
}
test();
