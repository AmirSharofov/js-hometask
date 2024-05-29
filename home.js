const formS = document.forms.signup;
const inputs = document.querySelectorAll('input');
const name = document.querySelector('name')
const email = document.querySelector('email')
const about = document.querySelector('about')
const js = document.querySelector('js')
const html = document.querySelector('html')
const css = document.querySelector('css')
const users = [];


const regex = {
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,15}$/gm
}

inputs.forEach((inp) => {
    inp.onkeyup = () => {
        validate(inp, regex[inp.name]);
    }
});

function validate(input, pattern) {
    const isCorrect = pattern.test(input.value);

    if (isCorrect) {
        input.style.border = '2px solid green';
    } else {
        input.style.border = '2px solid red';
    }
}

formS.onsubmit = function (e) {
    e.preventDefault();

    const fm = new FormData(formS);
    const user = {};

    fm.forEach((value, key) => {
        user[key] = value;
    });

    users.push(user);
}
