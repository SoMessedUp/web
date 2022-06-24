function clear(text, field, type){
    document.getElementById(text).classList.remove('wrong');
    switch (type) {
        case 'loginpass':
            document.getElementById(field).classList.remove('wrong-input');
            document.getElementById(field).classList.add('section-input');
    }

}

function wrong(text, field, type){
    document.getElementById(text).classList.add('wrong');
    switch (type) {
        case 'loginpass':
            document.getElementById(field).classList.remove('section-input');
            document.getElementById(field).classList.add('wrong-input');
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
        clear('gender-div', undefined, undefined);
    } else {
        wrong('gender-div', undefined, undefined);
    }
    
    if (document.querySelector('#terms:checked')){
        fields += 1;
        clear('terms-div', undefined, undefined);
    } else {
        wrong('terms-div', undefined, undefined);
    }

    if (fields == 4){
        alert("Successful!\nYour login: " + log + "\nYour password: " + pass + "\nGender: " + gender);
        document.querySelector('button#button-registrate').setAttribute('type', 'submit')
    } else {
        alert("Error.\nCheck the fields")
    }

}