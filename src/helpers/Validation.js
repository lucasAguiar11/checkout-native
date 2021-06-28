export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "O E-mail deve ser preenchido."
  if (!re.test(email)) return 'Ooops! E-mail inserido inválido.'
  return ''
}

export function textValidator(name, fieldName) {
  if (!name) return `${fieldName} não pode ser vazio.`;
  return ''
}

export function currencyValidator(value, fieldName, allowNegative = false) {
  if (!value) return `Preencha o campo '${fieldName}'`
  if (isNaN(value))
    return `Valor inválido para o campo.`;

  const f = parseFloat(value).toFixed(2);
  if(f <0 && !allowNegative)
  return `Valor inválido para o campo.`;

  console.log(f);
}