var this = {};
var this.__extends = function(a,b){
  console.log(a,b);
}

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
console.log('b');
console.log('a');
console.log('hello');
var P = (function () {
    function P() {
    }
    return P;
}());
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        _super.apply(this, arguments);
    }
    return C;
}(P));
