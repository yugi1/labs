class Stack {
  constructor  () {
      this.data = []
  }
  push (data) {
      this.data.push(data);
  }
  pop () {
      return this.data.pop();
  }
  peek () {
    return this.data[this.data.length-1]  
  }
  size ()  {
     return this.data.length 
  }
  rpn (data) {
      let inputs = data.split(' ');

  }
}