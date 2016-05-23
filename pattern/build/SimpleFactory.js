var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Operation = (function () {
    function Operation() {
    }
    return Operation;
}());
var OperationAdd = (function (_super) {
    __extends(OperationAdd, _super);
    function OperationAdd() {
        _super.apply(this, arguments);
    }
    OperationAdd.prototype.getResult = function () {
        return this.numberA + this.numberB;
    };
    return OperationAdd;
}(Operation));
var OperationSub = (function (_super) {
    __extends(OperationSub, _super);
    function OperationSub() {
        _super.apply(this, arguments);
    }
    OperationSub.prototype.getResult = function () {
        return this.numberA + this.numberB;
    };
    return OperationSub;
}(Operation));
var OperationMul = (function (_super) {
    __extends(OperationMul, _super);
    function OperationMul() {
        _super.apply(this, arguments);
    }
    OperationMul.prototype.getResult = function () {
        return this.numberA + this.numberB;
    };
    return OperationMul;
}(Operation));
var OperationDiv = (function (_super) {
    __extends(OperationDiv, _super);
    function OperationDiv() {
        _super.apply(this, arguments);
    }
    OperationDiv.prototype.getResult = function () {
        return this.numberA + this.numberB;
    };
    return OperationDiv;
}(Operation));
var OperationFactory = (function () {
    function OperationFactory() {
    }
    OperationFactory.createOperate = function (op) {
        var oper;
        switch (op) {
            case '+':
                oper = new OperationAdd();
                break;
            case '-':
                oper = new OperationSub();
                break;
            case '*':
                oper = new OperationMul();
                break;
            case '/':
                oper = new OperationDiv();
                break;
        }
        return oper;
    };
    return OperationFactory;
}());
var oper;
oper = OperationFactory.createOperate('+');
oper.numberA = 1;
oper.numberB = 2;
var result = oper.getResult();
console.log(result);
