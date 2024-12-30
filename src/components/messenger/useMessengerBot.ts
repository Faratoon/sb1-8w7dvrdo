import { useState } from 'react';

interface Message {
  type: 'bot' | 'user';
  content: string;
}

export function useMessengerBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: 'Ku soo dhawoow Somali Bot Master! Maxaan kaa caawin karaa?'
    }
  ]);

  const sendMessage = (userMessage: string) => {
    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "Waan ku caawiyaa. Fadlan la xiriir WhatsApp-kayga: +1236888-8391";
      
      if (userMessage.toLowerCase().includes('course') || userMessage.toLowerCase().includes('koorso')) {
        botResponse = "Waxaan bixinaa koorsooyin kala duwan. Fadlan booqo qaybta courses-ka ama ila soo xiriir WhatsApp-ka: +1236888-8391";
      }

      setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
    }, 1000);
  };

  return { messages, sendMessage };
}