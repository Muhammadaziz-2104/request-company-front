const errors = {
    EMAIL_NOT_FOUND: 'Bunday pochta topilmadi',
    INVALID_PASSWORD: 'Parol xato',
    auth: 'Saytga kiring'
}

export function error(error) {
    return errors[error] ? errors[error] : 'Noma`lum xatolik!'
}