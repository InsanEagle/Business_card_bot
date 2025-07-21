import { Bot, Keyboard, InlineKeyboard } from "grammy";
import "dotenv/config";

const key = process.env.TELEGRAM_BOT_API_KEY;
if (!key) {
  throw new Error("Cannot find TELEGRAM_BOT_API_KEY");
}

const bot = new Bot(key);

const keyboard = new Keyboard()
  .text("Обо мне")
  .text("Мои услуги")
  .text("Контакты");

const inlineContactsKeyboard = new InlineKeyboard()
  .url("Мой GitHub", "https://github.com/InsanEagle")
  .url("Мой fl.ru", "fl.ru/users/insaneachiever");

bot.command("start", (ctx) => {
  ctx.reply(
    "Welcome. You currently using my business card bot. There you can see information about me.",
    { reply_markup: keyboard }
  );
});

bot
  .on("message:text")
  .hears("Обо мне", (ctx) =>
    ctx.reply(
      "Меня зовут Шамиль, 24 года. Занимаюсь изучением программирования и планирую создавать Телеграм ботов для фриланса. Данный бот - первый проект, который я создал с нуля."
    )
  );
bot
  .on("message:text")
  .hears("Мои услуги", (ctx) =>
    ctx.reply("Могу создать простейшего бота без сложной бизнес-логики")
  );
bot.on("message:text").hears("Контакты", (ctx) =>
  ctx.reply("Ссылки на мои профили:", {
    reply_markup: inlineContactsKeyboard,
  })
);

bot.on("message", (ctx) => ctx.reply("Got another message!"));

bot.start();
