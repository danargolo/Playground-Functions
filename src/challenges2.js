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
// Ultimo indentaçao e espaçamento dos if's
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
