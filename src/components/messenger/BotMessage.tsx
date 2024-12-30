import React from 'react';
import { Bot } from 'lucide-react';

interface BotMessageProps {
  message: string;
}

export function BotMessage({ message }: BotMessageProps) {
  return (
    <div className="flex items-start space-x-2">
      <div className="bg-blue-600 rounded-full p-2">
        <Bot className="h-4 w-4 text-white" />
      </div>
      <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%]">
        <p className="text-sm text-gray-800">{message}</p>
      </div>
    </div>
  );
}