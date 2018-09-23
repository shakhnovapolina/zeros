module.exports = function getZerosCount(number) {
  var res = 0;
  var n = number;
  while (n > 0)
  {
	  n = Math.floor(n/5);
	  res = res + n;
  }
  return res;
}
