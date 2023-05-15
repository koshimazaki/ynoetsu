import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      buttonClasses="accept-button"
      buttonStyle={{
        background: '#000000',
        color: '#ffffff',
        fontSize: '16px',
        padding: '12px 24px',
        borderRadius: '4px',
      }}
      contentStyle={{
        background: 'rgba(255, 255, 255, 0.8)',
        color: '#000000',
        padding: '24px',
        fontSize: '18px', // Add this line to set the font size of the main text

      }}
      cookieName="userCookieConsent"
      expires={150}
    >
      This website uses cookies to enhance the user experience.{' '}
      <span style={{ fontSize: '16px' }}>
        <a href="/privacy-policy">Learn more</a>
      </span>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
