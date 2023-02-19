export const validateEmail = (website) => {
    const error = !website.trim().startsWith("https://");
    return error ? "Сайт должен начинаться на https://" : null;  
};

export const validateCapitalLetter = (word) => {
    const error = !Boolean(word.trim().charAt(0).match(/[A-ZА-ЯЁ]/));
    return error ? "Текст должен начинаться с заглавной буквы. Заполните пожалуйста правильно!" : null;
}

export const validateTextLimit = (text) => {
    return text.length > 600 ? "Превышен лимит символов в поле" : null;
}