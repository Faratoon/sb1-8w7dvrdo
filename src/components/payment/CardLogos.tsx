import React from 'react';

export function CardLogos() {
  return (
    <div className="flex items-center justify-center space-x-4">
      <img
        src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
        alt="Visa"
        className="h-8"
      />
      <img
        src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/mastercard.png"
        alt="Mastercard"
        className="h-8"
      />
      <img
        src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/amex.png"
        alt="American Express"
        className="h-8"
      />
    </div>
  );
}