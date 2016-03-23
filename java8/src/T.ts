
class A{ 
    private _val;
    get val(){
        return this._val;
    }
    
    getArray(){
        return [1,2]
    }
}

class B extends A{
  constructor(){
    super();
  }
  
  getObject(){
      return {
          array:this.getArray()
      }
  }
}



function test(args?:any){
    var b = new B();
    return {
        obj:b.getObject(),
        args:args,
        typeArray:[new Float32Array(2),new Int16Array(1)]
    }
}

console.log(test('args'));