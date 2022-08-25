class calculator {
    constructor(x , y) {
        this.x = x 
        this.y = y
    }

  add() {
    return this.x + this.y;
  }

  sub() { 
    return this.x - this.y;
  }

  multiply() {
    return this.x * this.y 
  }

  divide () {
    return this.x / this.y
  }
}
   module.exports = calculator 
