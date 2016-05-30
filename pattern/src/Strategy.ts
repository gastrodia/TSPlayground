class CashContext{
    private cs:CashSuper;
    constructor(csuper:CashSuper){
        this.cs = csuper;
    }
    
    public getResult(money:number){
        
    }
}

abstract class CashSuper{
    abstract acceptCash(money:number);
}

class CashNormal extends CashSuper{
    public acceptCash(money){
        return money;
    }
}

class CashRebate extends CashSuper{
    private moneyRebate:number = 1;
    constructor(moneyRebate:number){
        super();
        this.moneyRebate = moneyRebate;
    }
    
    public acceptCash(money){
        return money * this.moneyRebate;
    }
}

class CashReturn extends CashSuper{
    private moneyCondition = 0;
    private moneyReturn = 0;
    constructor(moneyCondition,moneyReturn){
        super();
        this.moneyCondition = moneyCondition;
        this.moneyReturn = moneyReturn;
    }
    
    public acceptCash(money){
        var result = money;
        if(money >= this.moneyCondition){
            result = money - Math.floor(money/this.moneyCondition) * this.moneyReturn;
        }
        return result;
    }
    
}

var cc:CashContext = null;
var type = '正常收费';
switch (type) {
    case "正常收费":
        cc = new CashContext(new CashNormal())
        break;
    case "满300反100":
        cc = new CashContext(new CashReturn(300,100))
        break;
    case "打8折":
        cc = new CashContext(new CashRebate(0.8))
    default:
        break;
}