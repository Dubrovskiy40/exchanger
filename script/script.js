

//form
const titleMessage = document.querySelector('.review__message');
const formReview = document.querySelector('#form');
const formInpName = document.querySelector('#inpName');
const formInpText = document.querySelector('#inpText');
const formBtn = document.querySelector('#formBtn');

//форма не валидна
// Object.values(formReview).reduce((obj,field) => { obj[field.name] = field.value; return obj }, {})

// if (1) {
//     titleMessage.classList.add('.review__message_red');
//     formInp.classList.toggle('.form__inp_red');
// }
//
// //форма валидна
// else if (0) {
//     titleMessage.classList.add('.review__message_blue');
//     formInp.classList.remove('.form__inp_red');
// }