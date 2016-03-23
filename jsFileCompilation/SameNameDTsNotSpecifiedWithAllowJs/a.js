var test1 = 10; // Shouldnt get compiled

function A(){

}

A.prototype.doA = function(){
  console.log('a')
};
