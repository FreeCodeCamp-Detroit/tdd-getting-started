var getLongestWord = function (str) {
  if (typeof str === 'string') {
    var words = str.replace(/[^a-zA-Z]/g, ' ').toLowerCase().split(' ');
    var wordLengths = words.map((word) => word.length);
    var longestLen = Math.max.apply(null, wordLengths);
    var indexOfLongestWord = wordLengths.indexOf(longestLen);
    return words[indexOfLongestWord];
  } else {
    const errStrType = new TypeError('The parameter str must be a string.');
    throw errStrType;
  }
};

module.exports = getLongestWord;