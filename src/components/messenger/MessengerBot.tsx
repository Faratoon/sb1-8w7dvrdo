import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { BotMessage } from './BotMessage';
import { UserMessage } from './UserMessage';
import { ChatInput } from './ChatInput';
import { WelcomeMessage } from './WelcomeMessage';
import { useMessengerBot } from './useMessengerBot';

export function MessengerBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const { messages, sendMessage } = useMessengerBot();

  useEffect(() => {
    // Show welcome message after 2 seconds
    const timer = setTimeout(() => setShowWelcome(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setShowWelcome(false);
    setIsOpen(false);
  };

  const handleContinue = () => {
    setShowWelcome(false);
    setIsOpen(true);
  };

  if (showWelcome) {
    return <WelcomeMessage onDismiss={handleDismiss} onContinue={handleContinue} />;
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-[350px] bg-white rounded-2xl shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl">
        <div className="flex items-center">
          <MessageSquare className="h-6 w-6 text-white mr-2" />
          <h3 className="text-lg font-semibold text-white">Kaalmo Bot</h3>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="h-[400px] overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          message.type === 'bot' ? (
            <BotMessage key={index} message={message.content} />
          ) : (
            <UserMessage key={index} message={message.content} />
          )
        ))}
      </div>

      {/* Input */}
      <ChatInput onSendMessage={sendMessage} />
    </div>
  );
}