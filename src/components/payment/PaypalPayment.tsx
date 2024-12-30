import React from 'react';
import { CreditCard } from 'lucide-react';

export function PaypalPayment() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h3 className="text-xl font-semibold mb-6">PayPal Payment</h3>
      
      <form className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="PayPal email address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-800">
            You will be redirected to PayPal to complete your payment securely.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-[#0070BA] hover:bg-[#003087] text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
        >
          <img 
            src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png" 
            alt="PayPal" 
            className="h-6 mr-2"
          />
          Pay with PayPal
        </button>

        <div className="text-center text-sm text-gray-600 mt-4">
          <p>Available payment methods through PayPal:</p>
          <div className="flex items-center justify-center space-x-4 mt-2">
            <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/cc-badges-ppmcvdam.png" alt="Credit Card Options" className="h-8" />
          </div>
        </div>
      </form>
    </div>
  );
}