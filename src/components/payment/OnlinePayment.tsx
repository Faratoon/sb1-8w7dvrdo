import React from 'react';
import { CreditCard } from 'lucide-react';
import { CardLogos } from './CardLogos';

export function OnlinePayment() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h3 className="text-xl font-semibold mb-6">Credit Card Payment</h3>
      
      <div className="mb-6">
        <CardLogos />
      </div>
      
      <form className="space-y-6">
        {/* Card Holder Details */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cardholder Name
            </label>
            <input
              type="text"
              placeholder="Full name on card"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Card Details */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-12"
                maxLength={19}
              />
              <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                maxLength={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="text"
                placeholder="123"
                maxLength={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
        >
          <CreditCard className="w-5 h-5 mr-2" />
          Pay Now
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Your payment information is encrypted and secure
        </p>
      </form>
    </div>
  );
}