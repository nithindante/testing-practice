function sum(a, b) {
  return a + b;
}

function capitalize(word) {
  let arr = word.split("");
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join("");
}

function reverseString(word) {
  let arr = word.split("");
  let newArr = [];
  for (let i = arr.length; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr.join("");
}

let calculator = {
  sum: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  div: function (a, b) {
    return a / b;
  },
  mul: function (a, b) {
    return a * b;
  },
};

function ceaserCipher(word, num) {
  let arr = word.split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) ||
      (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122)
    ) {
      if (word.charCodeAt(i) + num > 122) {
        newArr.push(96 + (word.charCodeAt(i) + num - 122));
      } else if (
        word.charCodeAt(i) >= 65 &&
        word.charCodeAt(i) <= 90 &&
        word.charCodeAt(i) + num > 90
      ) {
        newArr.push(65 + (word.charCodeAt(i) + num - 90));
      } else {
        newArr.push(word.charCodeAt(i) + num);
      }
    } else {
      newArr.push(word.charCodeAt(i));
    }
  }
  let modArr = newArr.map((num) => String.fromCharCode(num));
  return modArr.join("");
}

function analyzeArray(arr) {
  return {
    length: function () {
      return arr.length;
    },
    min: function () {
      return Math.min(...arr);
    },
    max: function () {
      return Math.max(...arr);
    },
    average: function () {
      let sum = arr.reduce((prev, next) => {
        return (prev = prev + next);
      }, 0);
      return sum / arr.length;
    },
  };
}
export {
  sum,
  capitalize,
  reverseString,
  calculator,
  ceaserCipher,
  analyzeArray,
};
