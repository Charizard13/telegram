import "dotenv/config";
import express from "express";
import cors from "cors";
import { Telegraf } from "telegraf";

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

const telegrafBot = new Telegraf(process.env.BOT_TOKEN!);

app.listen(port, () => {
  welcomeMessage();
  telegrafBot.launch();
});

function welcomeMessage() {
  telegrafBot.start((ctx) => {
    ctx.replyWithHTML("ברוכים לחנות שלנו", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "יצירת הזמנה",
              web_app: {
                url: "https://7dc4-62-90-30-194.ngrok-free.app",
              },
            },
          ],
        ],
      },
    });
  });
}
