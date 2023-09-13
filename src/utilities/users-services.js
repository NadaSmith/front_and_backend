import * as usersAPI from './users-api';

//to see if user is logged in
export function getToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const payload = JSON.parse(atob(token.split('.')[1]));

    if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        return null;
    }

    return token;
}


//for user information
export function getUser() {
    const token = getToken();

    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export async function signUp(userData) {
    const token = await usersAPI.signUp(userData)

    //returns token as user
    localStorage.setItem('token', token);

    return getUser();
}

export async function logIn(credentials) {
    const token = await usersAPI.login(credentials);

    localStorage.setItem('token', token)
}

export async function checkToken() {
    return usersAPI.checkToken()
        .then(dateStr => new Date(dateStr));
}

export function logOut() {
    localStorage.removeItem('token');
}