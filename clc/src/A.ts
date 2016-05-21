/// <reference path="../typings/require.d.ts" />
import {B} from './B';
export class A{ 
    private _val;
    get val(){
        return this._val;
    }
    
    getArray(){
        return [1,2]
    }
    
    callB(){
        // require(['B'],(dep)=>{
        //            var b:B = new dep.B();
        //           b.doSomething()
        // })
        // var dep = require('./B');
        //  var b:B = new dep.B();
        // b.doSomething();
        var b = new B();
        b.doSomething();
    }
}