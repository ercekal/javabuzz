var Javabuzz = function() {};

Javabuzz.prototype.isDivisibleByThree = function (number) {
  return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function (number) {
return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype.isDivisibleByFifteen = function (number) {
return this._isDivisibleBy(number, 15);
};

Javabuzz.prototype._isDivisibleBy = function(number1, number2) {
  return (number1 % number2 === 0);
};

Javabuzz.prototype.says = function (number) {
  if (this.isDivisibleByFifteen(number)) {
    return "Javabuzz";
  }
  if (this.isDivisibleByFive(number)) {
    return "Buzz";
  }
  if (this.isDivisibleByThree(number)) {
    return "Java";
  }

  return number;
};

var javabuzz = new Javabuzz();

for (var i = 1; i <= 100; i++) {
 console.log(javabuzz.says(i));
}
