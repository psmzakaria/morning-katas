function aliquotSum2(num) {
  const maxD = Math.sqrt(num);
  const sum = 1;
  for (i = 2; i <= maxD; i++)
    if (num % i == 0) {
      sum += i;
      const d = num / i;
      if (d != i) sum += d;
    }
}

function aliquotSum(num) {
  var sum = 0;
  for (var i = 1; i < num; i++) {
    if (!(num % i)) {
      sum += i;
    }
  }
  return sum;
}

function isPerfect(num) {
  return num === aliquotSum(num);
}

function isAbundant(num) {
  return num < aliquotSum(num);
}

function isDeficient(num) {
  return num > aliquotSum(num);
}

module.exports = { isPerfect, isAbundant, isDeficient };
