import TelegramBot from "node-telegram-bot-api";

const TOKEN = "7347870731:AAH6KWwM6ZVv9oAcynNy-Y9Ifmj1PvdEkH4";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", async function (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;

  if (text == "/start") {
    bot.sendMessage(chatId, `Xush kelibsiz, ${firstname} 👋`, {
      reply_markup: {
        keyboard: [
          [{ text: "Boshlash 🔥" }],
          [{ text: "Menu 🍔" }, { text: "Sozlamalar ⚙️" }],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text == "Boshlash 🔥") {
    const xabar = await bot.sendMessage(chatId, "Iltimos, kuting...");

    setTimeout(function () {
      bot.deleteMessage(chatId, xabar.message_id);
   bot.sendPhoto(chatId, "./images/disney.jpg", {

        caption:
          "The Urus has a V8 twin-turbocharged engine with a maximum power output of 650 hp, and offers the best power-to-weight ratio in the SUV segment.",
      });
    }, 1000);
  } else if (text == "Menu 🍔") {
    bot.sendMessage(chatId, "Menyuga xush kelibsiz");
  } else if (text == "Sozlamalar ⚙️") {
    bot.sendMessage(chatId, "Sozlamalar bo‘limi hali yaratilmagan ⚙️");
  }

  console.log("Start");
  console.log("Xabar keldi");
});

console.log("Botimiz ishga tushdi ✅");
