export const getFromLocalStorage = key => {
    return localStorage.getItem(key) !== 'undefined' ? JSON.parse(localStorage.getItem(key)) : null;
};

export const saveInLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const getFromSessionStorage = key => {
    return sessionStorage.getItem(key) !== 'undefined'
        ? JSON.parse(sessionStorage.getItem(key))
        : null;
};

export const saveInSessionStorage = (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
};
