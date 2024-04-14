// import "dotenv/config";
// import express from "express";
// import cors from "cors";
// import { Telegraf } from "telegraf";
// import TelegramBot from "node-telegram-bot-api";

// const app = express();
// const port = 3001;

// app.use(cors());

// app.use(express.json());

// // const telegramBot = new TelegramBot(process.env.BOT_TOKEN!, { polling: true });

// const telegrafBot = new Telegraf(process.env.BOT_TOKEN!);

// app.listen(port, () => {
//   welcomeMessage();
//   // listenToProducts();
//   telegrafBot.launch();
// });

// function welcomeMessage() {
//   telegrafBot.start((ctx) => {
//     // ctx.setChatMenuButton({
//     //   type: "web_app",
//     //   web_app: {
//     //     url: "https://www.google.com",
//     //   },
//     //   text: "קישור לאתר",
//     // });
//     ctx.replyWithHTML("ברוכים הבאים לבוט הספרים שלנו", {
//       reply_markup: {
//         inline_keyboard: [
//           [
//             {
//               text: "יצירת הזמנה",
//               web_app: {
//                 url: "https://8300-2a0d-6fc2-5d11-8d00-cd8-ad04-1883-ddcd.ngrok-free.app",
//               },
//             },
//           ],
//         ],
//       },
//     });
//   });
// }

// // function listenToProducts() {
// //   //specific to specific chat by id
// //   telegramBot.on("message", (msg) => {
// //     const chatId = msg.chat.id;
// //     console.log(chatId);
// //     if (!msg.text) return; // Ignore non-text messages

// //     console.log("Received message:", msg.text);

// //     // Send back the received message text to the chat
// //     telegramBot.sendMessage(chatId, "You said: " + msg.text);
// //   });
// // }
