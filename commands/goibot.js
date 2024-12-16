module.exports = (bot) => ({
  name: "funnyReplies",
  desc: "Respond to 'taklu' and 'bot' with funny messages",
  credit: "Jonell Magallanes",
  onPrefix: false,
  cooldowns: 5,

  execute: async (msg) => {
    console.log("execute triggered"); // Debug line to check if function is called
    const chatId = msg.chat.id;
    const userName = msg.from.first_name;
    const text = msg.text?.toLowerCase();

    if (!text) {
      console.log("No text in message!"); // Debug
      return;
    }

    console.log("Message text:", text); // Debug

    // Check for "taklu"
    if (text.includes("taklu")) {
      console.log("Taklu detected!"); // Debug
      return bot.sendMessage(chatId, `😂 Hey ${userName}, Taklu hone ka maza hi kuch aur hai!`);
    }

    // Check for "bot"
    if (text.includes("bot")) {
      console.log("Bot detected!"); // Debug
      return bot.sendMessage(chatId, `🤖 Hey ${userName}, Main bot hoon, mazaak mat udao!`);
    }
  }
});
