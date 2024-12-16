module.exports = (bot) => ({
  name: "goibot",
  desc: "Funny replies to 'taklu' and 'bot'",
  credit: "SHANKAR",
  onPrefix: false,
  cooldowns: 5,

  execute: async (msg) => {
    const chatId = msg.chat.id;
    const userName = msg.from.first_name;
    const text = msg.text.toLowerCase();  // Text ko lower case mein convert karte hain

    // Agar "taklu" ya "bot" text mein hai
    if (text.includes("taklu")) {
      const takluResponses = [
        "Taklu hone ka maza hi kuch aur hai! Koi baat nahi, tumhare paas to dimaag hai.",
        "Kya baat hai, taklu ki duniya mein swāgat hai! Ab zara apne baal kaise theek karoge?",
        "Taklu? Maan gaya bhai! Kabhi socha hai, baal na ho to chhupane ki tension hi nahi hoti?",
        "Arre bhai, taklu banna bhi ek kala hai. Aaj se tumhare naam ke saath 'Master' lagana padega.",
        "Taklu hone ka ek faida toh hai – shampoo ki bottle ki life barh jaati hai!",
        "Taklu ke jahaaz mein baithkar chal padho, doston! Baal nahi, attitude hai sabse important!",
        "Taklu hai toh kuch nahi, tumhara shine sabse alag hai. Baal toh sab ke hote hain, par attitude kaunse ke paas hai?"
      ];
      const randomTakluResponse = takluResponses[Math.floor(Math.random() * takluResponses.length)];
      await bot.sendMessage(chatId, `😂 Hey ${userName}, ${randomTakluResponse}`);
    } 
    else if (text.includes("bot")) {
      const botResponses = [
        "Arey, main bhi apne aapko bot nahi samajhta, par yeh toh kaam ka hai!",
        "Bot hoon, aur zindagi ko thoda asaan banane ka kaam karta hoon!",
        "Bot ke saath maza hi kuch aur hai. Mera kaam toh bas jawab dena hai!",
        "Bot? Haan, main ek AI hoon, jo har question ka jawab de sakta hai!",
        "Jab tak tu mujhse baat karega, tab tak main bot hoon, kaam karte rahunga!",
        "Main bot hoon, par agar tum mere saath mazaak karoge, toh main apne kaam ko thoda interesting bana dunga!"
      ];
      const randomBotResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      await bot.sendMessage(chatId, `🤖 Hey ${userName}, ${randomBotResponse}`);
    } 
    else {
      return; // Agar "taklu" ya "bot" nahi hai, toh koi response nahi milega
    }
  }
});
