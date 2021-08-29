console.log('Start extension');

function send() {
  let phoneNumber = document.querySelector('.phone-number').value;
  let msg = document.querySelector('.msg').value;
  alert(phoneNumber);
  alert(msg);
}
document.getElementById('sbmt').addEventListener('click', send);
