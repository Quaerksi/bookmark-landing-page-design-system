const driveOutMenuButtons = document.querySelectorAll('#drive-out-menu-button');
const questions = document.querySelectorAll('#question');
// const answer = document.getElementById('answer');
// const open = document.getElementById('open');
// const close = document.getElementById('close');

let openAndCloseDetails = e => {
    const answer = e.currentTarget.parentNode.nextElementSibling;
    const open = e.currentTarget.querySelector('#open');
    const close = e.currentTarget.querySelector('#close');
    console.log(`Hello World ${e.currentTarget}, ${answer}`)
    if(answer.hidden){
        console.log(`Hidden`)
        answer.removeAttribute('hidden');
        open.removeAttribute('hidden');
        close.setAttribute('hidden', true);
    } else {
        answer.setAttribute('hidden', true);
        open.setAttribute('hidden', true);
        close.removeAttribute('hidden');
    }
}

driveOutMenuButtons.forEach(button => button.addEventListener('click', openAndCloseDetails));
questions.forEach(button => button.addEventListener('click', openAndCloseDetails));


// Form for newsletter

var input = document.getElementById('input-field');
var form  = document.getElementById('contact-form-for-newsletter');
var inputWithError = document.getElementById('input-with-error');
var errorMessage = document.getElementById('error-message');

input.addEventListener('invalid', function(event){
    event.preventDefault();
    if ( ! event.target.validity.valid ) {
        errorMessage.textContent   = "Whoops, make sure it's an email";
        errorMessage.style.paddingTop = '.3rem';
        errorMessage.classList.add('error');
        inputWithError.classList.remove('input-with-error--no-error')
    }
});


input.addEventListener('input', function(event){
    if ( true === errorMessage.classList.contains('error') ) {
        errorMessage.textContent   = "";
        errorMessage.style.paddingTop = '0';
        errorMessage.classList.remove('error');
        inputWithError.classList.add('input-with-error--no-error')
    }
})