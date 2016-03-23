var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
    return A;
}());
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
    return B;
}(A));
function test(args) {
    var b = new B();
    return {
        obj: b.getObject(),
        args: args,
        typeArray: [new Float32Array(2), new Int16Array(1)]
    };
}
console.log(test('args'));
