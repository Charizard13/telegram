import "dotenv/config";
import express from "express";
import cors from "cors";
import { Telegraf } from "telegraf";

const WEB_APP_URL = "https://7dc4-62-90-30-194.ngrok-free.app";
const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

const bot = new Telegraf(process.env.BOT_TOKEN!);

app.listen(port, () => {
  welcomeMessage();
  bot.launch();
});

function welcomeMessage() {
  bot.start((ctx) => {
    ctx.setChatMenuButton({
      text: "יצירת הזמנה",
      type: "web_app",
      web_app: { url: WEB_APP_URL },
    });
    ctx.replyWithHTML("ברוכים לחנות שלנו", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "יצירת הזמנה",
              web_app: {
                url: WEB_APP_URL,
              },
            },
          ],
        ],
      },
    });
  });
}
