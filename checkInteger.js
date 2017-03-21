/*
* Tasks for self-education
* @description: diffetent task for self-education 
*/

/* Create function, which is checking integer */

/**
* @hasInt function
* @description: check integer
* @param string
* @returns Boolean
*/
var hasInt = function(str) {
  var returners = false;
  if (typeof str === 'number') {
    return Number.isInteger(str);
  }
  if (typeof str !== 'string') {
    console.warn('Please, set string');
    return returners;
  }
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    var prevChar = str.charCodeAt(i - 1);
    var nextChar = str.charCodeAt(i + 1);
    if (code === 46 &&
      prevChar >= 48 && prevChar <= 57 &&
      nextChar >= 48 && nextChar <= 57
    ) {
      return false;
    }
    if (code >= 48 && code <= 57) {
      returners = true;
    }
  }
  return returners;
};
console.log(isInt(""))         // false
console.log(isInt("  "));      // false
console.log(isInt(null));      // false
console.log(isInt(undefined)); // false
console.log(isInt(4.1));       // false
console.log(isInt("55.55"));   // false
console.log(isInt("4e2.1"));   // false
console.log(isInt(42.1));      // false
console.log(isInt(NaN));       // false
console.log(isInt(55));        // true
console.log(isInt("55"));      // true
console.log(isInt(4e2));       // true
console.log(isInt("4e2"));     // true
console.log(isInt(" 1 "));     // true
console.log(isInt("1a"));      // true
console.log(isInt("4e2a"));    // true
console.log(isInt("4e..1"));   // true
console.log(isInt("4e.1."));   // true


/**
* @hasInt chasIntByRegExp
* @description: check integer
* @param string
* @returns Boolean
*/
var chasIntByRegExp = function(str) {
  var returners = true;
  var reg = /\d+(\.\d+)?/g;

  if (typeof str === 'number') {
    return Number.isInteger(str);
  }

  if (typeof str !== 'string') {
    console.warn('Please, set string');
    return false;
  }


  var numbers = str.match(reg);

  if (!numbers) {
    console.warn('Please, set string');
    return false;
  }

  numbers.forEach(function(n) {
    var number = Number.isInteger(Number(n));
    if (!number) {
      return returners = false;
    }
  });

  return returners;
};

console.log(chasIntByRegExp(""))         // false
console.log(chasIntByRegExp("  "));      // false
console.log(chasIntByRegExp(null));      // false
console.log(chasIntByRegExp(undefined)); // false
console.log(chasIntByRegExp(4.1));       // false
console.log(chasIntByRegExp("55.55"));   // false
console.log(chasIntByRegExp("4e2.1"));   // false
console.log(chasIntByRegExp(42.1));      // false
console.log(chasIntByRegExp(NaN));       // false
console.log(chasIntByRegExp(55));        // true
console.log(chasIntByRegExp("55"));      // true
console.log(chasIntByRegExp(4e2));       // true
console.log(chasIntByRegExp("4e2"));     // true
console.log(chasIntByRegExp(" 1 "));     // true
console.log(chasIntByRegExp("1a"));      // true
console.log(chasIntByRegExp("4e2a"));    // true
console.log(chasIntByRegExp("4e..1"));   // true
console.log(chasIntByRegExp("4e.1."));   // true