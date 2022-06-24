function clear(text, field, type){
    switch (type) {
        case 'loginpass':
            document.getElementById(text).classList.remove('wrong');
            document.getElementById(field).classList.remove('wrong-input');
            document.getElementById(field).classList.add('section-input');
        case 'other':
            document.getElementById(text).classList.remove('wrong');
    }

}

function wrong(text, field, type){
    switch (type) {
        case 'loginpass':
            document.getElementById(text).classList.add('wrong');
            document.getElementById(field).classList.remove('section-input');
            document.getElementById(field).classList.add('wrong-input');
        case 'other':
            document.getElementById(text).classList.add('wrong');
    }

}

function check() {
    let log = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    let fields = 0;
	let buttons = document.querySelectorAll('input[type="radio"]');
	for (let radio of buttons) {
	if (radio.checked) {
	gender = radio.value;
	} }

    if (log != ""){
        fields += 1;
        clear('username-text', 'username', 'loginpass');
    } else {
        wrong('username-text', 'username', 'loginpass')
    }
    if (pass != ""){
        fields += 1;
        clear('password-text', 'password', 'loginpass');
    } else {
        wrong('password-text', 'password', 'loginpass');
    }

    if (document.querySelector('input[type="radio"]:checked')) {
        fields += 1;
        clear('gender-div', undefined, 'other');
    } else {
        wrong('gender-div', undefined, 'other');
    }
    
    if (document.querySelector('#terms:checked')){
        fields += 1;
        clear('terms-div', undefined, 'other');
    } else {
        wrong('terms-div', undefined, 'other');
    }

    if (fields == 4){
        alert("Successful!\nYour login: " + log + "\nYour password: " + pass + "\nGender: " + gender);
    } else {
        alert("Error.\nCheck the fields")
    }

}