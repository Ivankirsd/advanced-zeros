module.exports = function getZerosCount(number, base) {
  let count = 0;

  let obj = getMultiplier(base);
  let maxFactor = obj.maxFactor;
  let repeatMaxFactor = obj.repeatMaxFactor;

  console.log(maxFactor);
  console.log(repeatMaxFactor);

  for (var value = maxFactor; value <= number; value= value + maxFactor) {

    let subValue = value;

    while (subValue%maxFactor === 0) {

        count++;
        subValue=subValue / maxFactor;
      }
  }
  return Math.floor(count / repeatMaxFactor);
}

function getMultiplier(x) {
  let mas = [];
  let i = 2;
  let maxFactor;
  let repeatMaxFactor;
  while (x != 1) {
    if (x%i === 0)
    {
      mas.push(i);
      x = x / i;
    }
    else
    {
      i++;
    }
  }
  maxFactor = Math.max.apply(null, mas);
  repeatMaxFactor = mas.filter(item => item === maxFactor).length // 5

  console.log(mas);
  return {maxFactor: maxFactor, repeatMaxFactor: repeatMaxFactor};
}
