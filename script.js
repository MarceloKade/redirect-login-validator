const usernameInput = document.getElementsByName('username')[0];
const passwordInput = document.getElementsByName('password')[0];

usernameInput.addEventListener('focus', function () {
    usernameInput.placeholder = 'Digite seu nome de usuário';
});

usernameInput.addEventListener('blur', function () {
    usernameInput.placeholder = '';
});

passwordInput.addEventListener('focus', function () {
    passwordInput.placeholder = 'Digite sua senha';
});

passwordInput.addEventListener('blur', function () {
    passwordInput.placeholder = '';
});

function login(event) {
    event.preventDefault();

    const usernameInput = document.querySelector('#usuario');
    const passwordInput = document.querySelector('#senha');
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!username || !password) {
        alert('Digite seu login e senha');
        usernameInput.value = ""
        passwordInput.value = ""
        return;
    }

    if (username === 'admin' && password === 'admin') {
        window.location.href = 'home.html';
    } else if (username === 'usuario' && password === 'usuario') {
        window.location.href = 'usuario.html';
    } else {
        alert('Usuário ou senha inválidos!');
        usernameInput.value = ""
        passwordInput.value = ""
    }
}