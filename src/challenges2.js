// Desafio 11
// Referência: https://www.youtube.com/watch?v=3lOVeAaytMI
function generatePhoneNumber(arr) {
  let error = 'não é possível gerar um número de telefone com esses valores';
  let contagem = {};
  let converter = arr.join('');
  arr.forEach((count) => {
    contagem[count] = (contagem[count] || 0) + 1;
  });
  if (arr.length !== 11) { return 'Array com tamanho incorreto.'; }

  if (Math.min(...arr) < 0 || Math.max(...arr) > 9) { return error; }

  if (Math.max(...Object.values(contagem)) >= 3) { return error; }

  return converter.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let arr = [lineA, lineB, lineC];
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      let measure = arr[3 - (i + j)];
      if (measure < (arr[i] + arr[j]) && measure > Math.abs(arr[i] - arr[j])) {
        return true;
      }
      return false;
    }
  }
}

// Desafio 13
function hydrate(string) {
  let arr = (string.match(/\d+/g));
  let water = 0;

  for (let i in arr) { water += Number(arr[i]); }

  return water > 1 ? water + ' copos de água' : water + ' copo de água';
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
