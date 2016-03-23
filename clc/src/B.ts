
import {A} from './A';
export class B extends A{ 
  constructor(){
    super();
  }
  
  getObject(){
      return {
          array:this.getArray()
      }
  }
  
  doSomething(){
      console.log('b')
  }
}
