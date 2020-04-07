const Nexmo = require("nexmo");
const WeSender = require("wesenderjs");
const logger = require("./logger");

module.exports = {
  receive: async function(args) {
    await logger.log(args);
    this.sendMessageWeSender(args.text);
    return;
  },
//   sendMessage: function(message) {
//     const nexmo = new Nexmo({
//       apiKey: process.env.NEXMO_API_KEY,
//       apiSecret: process.env.NEXMO_API_SECRET
//     });

//     const from = "SERVICE";
//     const to = "244" + process.env.MY_NUMBER;
//     nexmo.message.sendSms(from, to, message, (err, responseData) => {
//       if (err) {
//         console.log(err);
//       } else {
//         if (responseData.messages[0]["status"] === "0") {
//           console.log("[SENDER_SERVICE]: Message sent successfully.");
//         } else {
//           console.log(
//             `[SENDER_SERVICE]: Message failed with error: ${responseData.messages[0]["error-text"]}`
//           );
//         }
//       }
//     });
//   },
  sendMessageWeSender: function(message) {
    const WSDK = new WeSender(
      process.env.WESENDER_API_KEY
    );

    const object = {
      destine: [process.env.MY_NUMBER],
      message
    };

    WSDK.sendMessage(object).then(response => {
      if (response.Exito) {
        console.log("[SENDER_SERVICE]: Message sent successfully.");
      } else {
        console.log(
          `[SENDER_SERVICE]: Message failed with error: ${response.Mensagem}`
        );
      }
    });
  }
};
