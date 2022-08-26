// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(names) {
  return names[names.length - 1] + ', ' + names[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
// Referência:https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/Apply
function highestCount(values) {
  let counter = 0;
  for (let index = 0; index < values.length; index += 1) {
    if (Math.max(...values) === values[index]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  if (distance1 < distance2) {
    return 'cat1';
  } if (distance2 < distance1) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
  // seu código aqui
}

// Desafio 8
function fizzBuzz(arr) {
  let sounds = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] % 3 === 0) {
      if (arr[index] % 5 === 0) {
        sounds.push('fizzBuzz');

      } else { sounds.push('fizz'); }

    } else if (arr[index] % 5 === 0) {
      sounds.push('buzz');

    } else { sounds.push('bug!'); }
  }
  return sounds;
}

// Desafio 9
// Referência: https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
function encode(str) {
  let group = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  return str.replace(/a|e|i|o|u/gi, function (value) {
    return group[value];
  });
}

function decode(str1) {
  let groupNumber = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return str1.replace(/1|2|3|4|5/g, function (value2) {
    return groupNumber[value2];
  });
}
// Desafio 10
function techList(lang, user) {
  let object = [];
  let orderLang = lang.sort();
  if (lang.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < orderLang.length; index += 1) {
    object.push({
      tech: orderLang[index],
      name: user,
    });
  }
  return object;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
