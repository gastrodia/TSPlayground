
import {B} from './B';
import {A} from './A';
var b = new B();


console.log((B as any).__proto__ == A)