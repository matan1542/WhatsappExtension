document.getElementById('sbmt').addEventListener('click', send);

async function send() {
  let phoneNumber = document.querySelector('.phone-number').value;
  let msg = document.querySelector('.msg').value;
  const messageSend = await sendMessage(phoneNumber, msg)
  alert(messageSend)
}

async function sendMessage(phoneNumber, msg) {
  const apiKey = '5729ohyirgsv80r3'
  try {
      await axios.post(`https://api.chat-api.com/instance327514/sendMessage?token=${apiKey}`, {
          "phone": phoneNumber,
          "body": msg
      })
      return Promise.resolve('done')
  } catch (err) {
      return Promise.reject(err)
  }
}