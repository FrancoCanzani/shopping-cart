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
    <div className='shadow-lg uppercase font-black p-2 text-sm flex items-center justify-center bg-slate-200'>
      <p>
        Buy now and get 10% off // Promo code:{' '}
        <button
          onClick={handleClipboard}
          className='bg-white p-1 text-yellow-400 rounded-md animate-pulse'
        >
          {copied ? (
            <>
              <span style={{ color: 'black' }}>Copied!</span>
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
