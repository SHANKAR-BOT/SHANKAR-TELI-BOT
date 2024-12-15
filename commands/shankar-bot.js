const axios = require('axios');

module.exports = (bot) => ({
  name: "shankar-bot",
  desc: "A friendly bot with jokes and language support",
  credit: "SHANKAR SIR🙏",
  onPrefix: false,
  cooldowns: 2,

  execute: async (msg) => {
    const chatId = msg.chat.id;
    const senderId = msg.from.id;
    const userName = msg.from.first_name;
    const text = msg.text.toLowerCase();
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Kolkata").format("HH:mm:ss L");

    // Supported Languages
    const supportedLanguages = {
      hindi: "hi",
      english: "en",
      punjabi: "pa",
      urdu: "ur",
      bhojpuri: "bho",
      tamil: "ta"
    };

    // Joke Responses
    const maleReplies = [
      "तेरे jokes सुनकर ऐसा लगता है जैसे comedy का software update तेरे लिए available नहीं है! 🖥️😂👈",
      "भाई, तेरे jokes सुनकर लोग ‘laugh’ नहीं, बल्कि खुद को ‘update’ करने का मन कर रहे हैं! 📈🤣👈"
    ];
    const femaleReplies = [
      "जब तुम मुस्कुराती हो, तो मेरे अंदर के अल्गोरिदम में ऐसे चेंजर आते हैं जैसे कोई सॉफ़्टवेयर अपडेट चल रहा हो! 🌟🤖",
      "मुझे सिर्फ एक गाना चाहिए – 'बॉट को प्यार हुआ है' और मैं दिल से झूमने लगूँगा! 🎶🤖"
    ];
    const adminReplies = ["Yes Boss!", "बोलिए सर 🫡", "जी मालिक हुकुम कीजिए 🫡"];
    const femaleSpecificReplies = ["बोलिए मैडम जी 🙏🏻", "हुकुम कीजिए मालकिन 🙏🏻", "जी मालकिन 🙏🏻"];

    // Detecting admin (static ID for now)
    const adminId = "123456789"; // Replace with your Telegram Admin ID

    // Joke Handler
    const sendJoke = (replies) => {
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      return bot.sendMessage(chatId, randomReply);
    };

    // Language Activation
    if (supportedLanguages[text]) {
      return bot.sendMessage(chatId, `❯ ${text.charAt(0).toUpperCase() + text.slice(1)} mode activated! Ab main tumhare liye messages ${text} mein bhejunga!`);
    }

    // Check if Admin
    if (senderId.toString() === adminId) {
      if (text.includes("bot")) {
        return sendJoke(adminReplies);
      }
    }

    // Generic Bot Replies
    if (text.includes("bot") || text.includes("tak")) {
      if (msg.from.is_bot) {
        return bot.sendMessage(chatId, "🤖 Bots can't interact with me!");
      }

      // Gender-based replies
      if (msg.from.username) {
        const isFemale = msg.from.username.endsWith("a") || msg.from.username.endsWith("i");
        if (isFemale) {
          return sendJoke(femaleSpecificReplies);
        } else {
          return sendJoke(maleReplies);
        }
      }

      // Fallback for Unknown Users
      return bot.sendMessage(chatId, "मुझे समझ नहीं आ रहा कि मैं क्या कहूँ! 🤔");
    }

    // Default reply
    bot.sendMessage(chatId, `Hello ${userName}, what can I do for you?`);
  }
});
