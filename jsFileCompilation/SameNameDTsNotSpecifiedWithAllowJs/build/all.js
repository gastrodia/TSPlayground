var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var T = (function (_super) {
    __extends(T, _super);
    function T() {
        _super.apply(this, arguments);
    }
    return T;
}(A));
var test1 = 10; // Shouldnt get compiled
function A() {
}
A.prototype.doA = function () {
    console.log('a');
};
