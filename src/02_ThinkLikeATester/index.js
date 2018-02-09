var getLongestWord = function (str) {
  if (typeof str === 'string') {
    return str;
  } else {
    const errStrType = new TypeError('The parameter str must be a string.');
    throw errStrType;
  }
};

module.exports = getLongestWord;