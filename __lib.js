/*********************
String functionalities
*********************/
String.prototype.__capitalize = function(){
  return this.charAt(0).toUpperCase() + this.slice(1);
};


String.prototype.__totalOcc = function(word){
  var arr = this.toLowerCase().split(' ');
  var count = 0;
  for(var i = 0 ; i < arr.length ; i++){
    if(arr[i] == word){
      count++;
    }
  }
  return count;
};


String.prototype.__endsWith = function(word){
  var arr = this.toLowerCase().split(' ');
  if(arr.length > 1){
    if(arr[arr.length-1] == word){
      return true;
    }
  }else{
    if(this[this.length-1] == word){
      return true;
    }
  }
  return false;
};


String.prototype.__isAlphaNum = function(){
  var reg = /[^a-zA-z0-9 ]/;
  if(reg.test(this)){
    return false;
  }
  return true;
};


String.prototype.__maxWord = function(){
  var arr = this.split(' ').sort(function(a,b){
    return b.length - a.length;
  });
  return [arr[0], arr[0].length]
};


String.prototype.__minWord = function(){
  var arr = this.split(' ').sort(function(a,b){
    return a.length - b.length;
  });
  return [arr[0], arr[0].length]
};


String.prototype.__swapCase = function(){
  var nStr = '';
  for(var i = 0 ; i < this.length ; i++){
    if(this[i] === this[i].toUpperCase()){
      nStr += this[i].toLowerCase();
    }else{
      nStr += this[i].toUpperCase();
    }
  }
  return nStr;
};




/*********************
Array functionalities
*********************/
Array.prototype.__countNum = function(x){
  var count = 0;
  for(var i = 0 ; i < this.length ; i++){
    if(x == this[i]){
      count++;
    }
  }
  return count;
};


Array.prototype.__random = function(){
  return this[Math.floor(Math.random() * this.length)];
};


Array.prototype.__unique = function(){
  var newArr = [];
  for(var i = 0 ; i < this.length ; i++){
    if(newArr.indexOf(this[i]) === -1){
      newArr.push(this[i]);
    }
  }
  return newArr;
};


Array.prototype.__eRemove = function(x){
  var newArr = [];
  for(var i = 0 ; i < this.length ; i++){
    if(this[i] !== x){
      newArr.push(this[i]);
    }
  }
  return newArr;
};


Array.prototype.__toObj = function(){
  var someObj = {};
  for(var i =  0  ; i < this.length ; i++){
    if(this[i] != undefined){
      someObj[i] = this[i];
    }
  }
  return someObj;
};


Array.prototype.__sumArr = function(){
  var sum = 0;
  for(var i = 0 ; i < this.length  ; i++){
    sum += this[i];
  }
  return sum;
};
