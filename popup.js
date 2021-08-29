// const phoneEl = document.querySelector('.phone-number');
// const formEl = document.querySelector('whatsapp-form')
// formEl.addEventListener('onsubmit', (ev) => {
//     ev.preventDefault()
//     console.log('Entering', ev)
// })

document.addEventListener('DOMContentLoaded', function () {
    const phoneEl = document.querySelector('.phone-number');
    phoneEl.addEventListener('oninput', (ev) => {
        console.log('Entering', ev)
    })
});
function onInput({ target }) {
    console.log('target.value',target.value)
}
function onSubmit(ev) {
    ev.preventDefault()
    console.log('event', ev)
}
