import React from 'react';
import { CreditCard, Wallet, CreditCard as PaypalIcon } from 'lucide-react';
import { OnlinePayment } from './OnlinePayment';
import { OfflinePayment } from './OfflinePayment';
import { PaypalPayment } from './PaypalPayment';

export function PaymentMethods() {
  const [paymentType, setPaymentType] = React.useState<'card' | 'offline' | 'paypal'>('card');

  return (
    <section id="payment" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Qaabka Lacag Bixinta</h2>
        <p className="text-gray-600 text-center mb-12">Dooro qaabka aad lacagta ku bixin rabto</p>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button
              onClick={() => setPaymentType('card')}
              className={`flex items-center px-6 py-3 rounded-lg ${
                paymentType === 'card'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Credit Card
            </button>
            <button
              onClick={() => setPaymentType('paypal')}
              className={`flex items-center px-6 py-3 rounded-lg ${
                paymentType === 'paypal'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <PaypalIcon className="w-5 h-5 mr-2" />
              PayPal
            </button>
            <button
              onClick={() => setPaymentType('offline')}
              className={`flex items-center px-6 py-3 rounded-lg ${
                paymentType === 'offline'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Wallet className="w-5 h-5 mr-2" />
              Mobile Money
            </button>
          </div>

          {paymentType === 'card' && <OnlinePayment />}
          {paymentType === 'paypal' && <PaypalPayment />}
          {paymentType === 'offline' && <OfflinePayment />}
        </div>
      </div>
    </section>
  );
}