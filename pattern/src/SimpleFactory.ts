abstract class Operation{
    public numberA:number;
    public numberB:number;
    public abstract getResult():number;
}

class OperationAdd extends Operation{
    public getResult(){
        return this.numberA + this.numberB;
    }
}

class OperationSub extends Operation{
    public getResult(){
        return this.numberA + this.numberB;
    }
}

class OperationMul extends Operation{
    public getResult(){
        return this.numberA + this.numberB;
    }
}

class OperationDiv extends Operation{
    public getResult(){
        return this.numberA + this.numberB;
    }
}

class OperationFactory{
    public static createOperate(op:string){
        var oper:Operation;
        switch(op){
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
    }
}



var oper:Operation;
oper = OperationFactory.createOperate('+');
oper.numberA = 1;
oper.numberB = 2;
var result = oper.getResult();
console.log(result);