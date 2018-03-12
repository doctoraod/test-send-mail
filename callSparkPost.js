import request from 'request-promise'

const sendMail = async () => {
    var options = { method: 'POST',
    url: 'http://localhost:5000/mail/sample',
    headers: 
     { 'content-type': 'application/json' },
    body: 
     { sender: 'Sendit Mail Service<system@mail.service.sendit.asia>',
       receiver: 'suvichan_pra@sendit.asia',
       subject: 'Test',
       data: { text: 'test' } },
    json: true };
    console.log("3")
    
    // const send = () => {
    //     return new Promise(function (resolve, reject) {
    //         request(options, function (error, response, body) {
    //             if (error) reject(error)
    //             resolve(body)
    //         });
    //     });
    // }
    // const re = await send()
    // console.log(re)
  const response = await request(options)
    console.log(response)
  console.log("4")
  return response
}



console.log("1")
const res = sendMail()
console.log(res)
console.log("5")
