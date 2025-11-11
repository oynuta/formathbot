import TelegramBot from 'node-telegram-bot-api';

const token = '8531676855:AAHDclE23G3L-o91K_R99vjcAEcw92gw4Rw';
const bot = new TelegramBot(token, { polling: true });

// Handle /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const firstName = msg.chat.first_name;
  bot.sendMessage(chatId, `Hey ${firstName}! Welcome to my bot 😎`);
});

// Handle any other message
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // Ignore /start because we already handle it
  if (text.startsWith('/start')) return;

  bot.sendMessage(chatId, `You said: ${text}`);
});
