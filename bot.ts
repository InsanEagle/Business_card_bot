import { Bot } from "grammy";
import "dotenv/config";

const key = process.env.TELEGRAM_BOT_API_KEY;
if (!key) {
  throw new Error("Cannot find TELEGRAM_BOT_API_KEY");
}

const bot = new Bot(key);

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.on("message", (ctx) => ctx.reply("Got another message!"));

bot.start();
