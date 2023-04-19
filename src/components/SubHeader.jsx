import React, { useState } from 'react';

const SubHeader = () => {
  const [promoCode, setPromoCode] = useState('#Leftpril');
  const [copied, setCopied] = useState(false);

  const handleClipboard = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 500); // Reset copied state after 3 seconds
  };

  return (
    <div className='flex items-center justify-center bg-slate-200 p-2 text-sm font-black uppercase shadow-lg'>
      <p>
        Buy now and get 10% off // Promo code:{' '}
        <button
          onClick={handleClipboard}
          className='animate-pulse rounded-md bg-white p-1 uppercase text-yellow-400'
        >
          {copied ? (
            <>
              <span style={{ color: 'grey' }}>Copied!</span>
            </>
          ) : (
            promoCode
          )}
        </button>
      </p>
    </div>
  );
};

export default SubHeader;
