var selectElementsStartingWithA = function(array) {
  var filtered = array.filter( function(word) {return word.charAt(0) === 'a'})
  return filtered
  }

var selectElementsStartingWithVowel = function(array) {
  var filtered = array.filter( function(word) {return word.match(/^[aeiou]/)})
  return filtered
}

var removeNullElements = function(array) {
  var filtered = array.filter(function(word) {return word !== null})
  return filtered
}

var removeNullAndFalseElements = function(array) {
  var filtered = array.filter(function(word) {return word !== null && word !== false})
  return filtered
}

var reverseWordsInArray = function(array) {
  var reversed = []
  array.forEach(function(word){ reversed.push(word.split("").reverse().join("")) })
  return reversed
}

var everyPossiblePair = function(array) {
  var arysorted = array.sort()
  var res = [],
      l = array.length;
  for(var i=0; i<l; i++)
      for(var j=i+1; j<l; j++)
          res.push([arysorted[i], arysorted[j]]);
  return res;
}

var allElementsExceptFirstThree = function(array) {
  return array.slice(3)
}

var addElementToBeginning = function(array, element) {
  return 'Write your method here';
}

var sortByLastLetter = function(array) {
  return 'Write your method here';
}

var getFirstHalf = function(string) {
  return 'Write your method here';
}

var makeNegative = function(number) {
  return 'Write your method here';
}

var numberOfPalindromes = function(array) {
  return 'Write your method here';
}

var shortestWord = function(array) {
  return 'Write your method here';
}

var longestWord = function(array) {
  return 'Write your method here';
}

var sumNumbers = function(array) {
  return 'Write your method here';
}

var repeatElements = function(array) {
  return 'Write your method here';
}

var stringToNumber = function(string) {
  return 'Write your method here';
}

var calculateAverage = function(array) {
  return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
}

var getAllLetters = function(array) {
  return 'Write your method here';
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
