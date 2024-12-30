import React from 'react';
import { Wallet, Copy, CheckCircle } from 'lucide-react';

const paymentMethods = [
  {
    name: 'EVC Plus',
    number: '615xxxxxx',
    instructions: 'Ku dir lambarka 615xxxxxx'
  },
  {
    name: 'ZAAD Service',
    number: '634xxxxxx',
    instructions: 'Ku dir lambarka 634xxxxxx'
  },
  {
    name: 'Sahal',
    number: '618xxxxxx',
    instructions: 'Ku dir lambarka 618xxxxxx'
  },
  {
    name: 'eDahab',
    number: '656xxxxxx',
    instructions: 'Ku dir lambarka 656xxxxxx'
  }
];

export function OfflinePayment() {
  const [copiedNumber, setCopiedNumber] = React.useState('');

  const handleCopy = (number: string) => {
    navigator.clipboard.writeText(number);
    setCopiedNumber(number);
    setTimeout(() => setCopiedNumber(''), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h3 className="text-xl font-semibold mb-6">Mobile Money Payment</h3>
      
      <div className="space-y-6">
        {paymentMethods.map((method, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">{method.name}</h4>
              <button
                onClick={() => handleCopy(method.number)}
                className="flex items-center text-blue-600 hover:text-blue-700"
              >
                {copiedNumber === method.number ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>
            <p className="text-gray-600 text-sm mb-2">{method.number}</p>
            <p className="text-gray-500 text-sm">{method.instructions}</p>
          </div>
        ))}

        <div className="mt-6 bg-blue-50 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">Talooyin Muhiim ah:</h4>
          <ul className="text-blue-700 text-sm space-y-2">
            <li>• Fadlan hubso in aad lacagta si sax ah ugu dirto lambarka saxda ah</li>
            <li>• Ka dib markaa lacagta dirto, la soo xiriir macalinka</li>
            <li>• Haddii aad caawimaad u baahato, nala soo xiriir</li>
          </ul>
        </div>
      </div>
    </div>
  );
}