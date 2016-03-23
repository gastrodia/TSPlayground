
class A{ 
    private _val;
    get val(){
        return this._val;
    }
    
    private content = '123';
    
    log = function(){
        console.log(this.content)
    }
    
    getArray(){
        return [1,2]
    }
}

class B extends A{
    
}


function test(args?:any){
   var b = new B();
   b.log();
}

test();