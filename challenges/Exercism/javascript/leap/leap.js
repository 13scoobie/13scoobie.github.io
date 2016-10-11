var Leap = function() {};

Leap.prototype.isLeap = function(year) {
  return (year % 2 == 0 && year % 100 == 0 && year % 400);
};

module.exports = Leap;
