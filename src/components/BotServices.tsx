import React from 'react';
import { Bot, MessageSquare, Zap, Shield, Book, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const bots = [
  {
    name: "AI Bot Somali",
    username: "@fogaanaragbot",
    description: "AI Bot ku hadla Af-Soomaali",
    icon: Bot,
    category: "AI Bot"
  },
  {
    name: "Feedback Bot",
    username: "@suuqgeeyebot",
    description: "Bot-ka feedback-ga macaamiisha",
    icon: MessageSquare,
    category: "Feedback"
  },
  {
    name: "Automation AI Bot",
    username: "@Koorso_bot",
    description: "Bot-ka automation-ka iyo AI",
    icon: Zap,
    category: "Automation"
  },
  {
    name: "Xeer Ilaaliye",
    username: "@SomaliSAbot",
    description: "Bot-ka xeerarka iyo ilaalinta",
    icon: Shield,
    category: "Security"
  },
  {
    name: "Buugaagta Bot",
    username: "@Buugaag_bot",
    description: "Bot-ka buugaagta Soomaaliga",
    icon: Book,
    category: "Education"
  }
];

const socialLinks = [
  {
    name: "Koorso AI Telegram",
    url: "https://t.me/your_telegram_channel",
    icon: Share2,
    type: "telegram"
  },
  {
    name: "Koorso AI Facebook",
    url: "https://facebook.com/your_page",
    icon: Share2,
    type: "facebook"
  }
];

export function BotServices() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Adeegyadeena Bot-yada</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Isticmaal bot-yadaan si aad u hesho adeegyo casri ah oo ku saabsan AI, automation, iyo waxbarasho
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bots.map((bot, index) => (
            <motion.a
              key={index}
              href={`https://t.me/${bot.username.slice(1)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all group"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-3 rounded-lg">
                  <bot.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400">
                    {bot.name}
                  </h3>
                  <p className="text-blue-200 text-sm mb-2">{bot.username}</p>
                  <p className="text-gray-400 text-sm">{bot.description}</p>
                  <span className="inline-block mt-2 text-xs font-medium text-blue-400 bg-blue-900/50 px-2 py-1 rounded-full">
                    {bot.category}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center px-6 py-3 rounded-xl text-white font-medium ${
                link.type === 'telegram' 
                  ? 'bg-[#0088cc] hover:bg-[#0099dd]' 
                  : 'bg-[#1877f2] hover:bg-[#2088ff]'
              } transition-all`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon className="h-5 w-5 mr-2" />
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-blue-200">
            Wixii faahfaahin dheeraad ah kala xiriir{' '}
            <a 
              href="https://t.me/MFaratoon_bot" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              @MFaratoon_bot
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}