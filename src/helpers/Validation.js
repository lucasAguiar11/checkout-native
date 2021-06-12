export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "O E-mail deve ser preenchido."
  if (!re.test(email)) return 'Ooops! E-mail inserido inválido.'
  return ''
}

export function textValidator(name, fieldName) {
  if (!name) return `O ${fieldName} não pode ser vazio.`;
  return ''
}
