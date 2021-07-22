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

export function currencyValidator(value, fieldName, allowNegative = false, allowZero = false) {
    console.log("currencyValidator ", value);

    if (!value) return `Preencha o campo '${fieldName}'`

    if (isNaN(value))
        return `Valor inválido para o campo.`;

    if (value < 0 && !allowNegative)
        return `Valor inválido para o campo.`;

    if (value == 0.00 && !allowZero)
        return `Valor deve ser maior que zero.`;

}
