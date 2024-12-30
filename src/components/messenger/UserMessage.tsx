import React from 'react';
import { User } from 'lucide-react';

interface UserMessageProps {
  message: string;
}

export function UserMessage({ message }: UserMessageProps) {
  return (
    <div className="flex items-start space-x-2 flex-row-reverse">
      <div className="bg-gray-600 rounded-full p-2">
        <User className="h-4 w-4 text-white" />
      </div>
      <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none px-4 py-2 max-w-[80%]">
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}