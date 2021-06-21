

export function definePeriod() {
    let now = new Date();

    if (now.getHours() >= 5 && now.getHours() < 12)
        return 'Bom dia, ';

    if (now.getHours() >= 12 && now.getHours() < 18)
        return 'Boa tarde, ';

    return 'Boa noite, ';
}