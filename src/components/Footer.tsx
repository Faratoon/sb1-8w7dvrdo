import React from 'react';
import { Bot, MessageSquare, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Bot className="h-6 w-6 mr-2 text-blue-400" />
              <span className="text-xl font-bold">Somali Bot Master</span>
            </div>
            <p className="text-gray-400">
              Barashada AI, Programming, iyo Automation oo ku baxaya Af-Soomaali.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Xidhidhka Asaasayaasha</h3>
            <div className="space-y-2">
              <a 
                href="https://wa.me/1236888-8391" 
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
              <a 
                href="tel:1236888-8391" 
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                1236888-8391
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Macalimiinta</h3>
            <div className="space-y-2">
              <a 
                href="https://t.me/Mfaratoon" 
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Mfaratoon
              </a>
              <a 
                href="https://t.me/tallman" 
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                @tallman
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Nala Soco</h3>
            <div className="space-y-2">
              <a 
                href="https://t.me/your_telegram_channel" 
                className="block text-gray-400 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
              <a 
                href="https://facebook.com/your_page" 
                className="block text-gray-400 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Somali Bot Master. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}