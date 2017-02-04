class GuessingGame {
    constructor() {
    	this.maximum;
    	this.minimum;
    	this.result;
    }
   
    setRange(min, max) {
    	this.minimum = min+1;
    	this.maximum = max-1;
    }

    guess() {
    	this.result = Math.ceil ((this.maximum + this.minimum) / 2 );
    	return this.result;
    }

    lower() {
    	this.maximum = this.result - 1;
    	this.result = Math.ceil ((this.result + this.minimum) / 2);
    	return this.result;
    	}

    greater() {
    	this.minimum = this.result +1;
    	this.result = Math.ceil ((this.result + this.minimum) / 2)/*| 0)+1*/;
    	return this.result;
    	}
}
game = new GuessingGame();
module.exports = GuessingGame;
