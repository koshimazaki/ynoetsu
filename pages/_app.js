// pages/_app.js
import 'semantic-ui-css/semantic.min.css';
import '../css/meta-poems.css';


import Layout from '../components/layout';
import Header from '../components/header';
import React from 'react';
import CookieConsent from 'react-cookie-consent';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
      <CookieConsent
  location="bottom"
  buttonText="Accept"
  cookieName="userCookieConsent"
  style={{ background: 'rgba(0, 0, 0, 0.85)' }}
  buttonStyle={{
    backgroundColor: 'black',
    border: '1px solid white',
    color: 'white',
    fontSize: '16px',
    padding: '5px 10px',
    cursor: 'pointer',
  }}
  expires={150}
>
<span style={{
  fontSize: '14px',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
  color: 'white',
  fontStyle: 'italic', // Add this line to make the text italic
  fontWeight: 'bold', // Add this line to make the text bold
}}>
  you need our eyes to see us</span> (ynoetsu) is a prototype of a mixed media piece. We use cookies to enhance your browsing experience, gather feedback about the project, and analyse our traffic. By clicking "Accept," you consent to our use of cookies. We utilise Vercel.app and Google Forms API to deliver the best user experience. To learn more, please visit our {' '}

<span style={{ fontSize: '16px', fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif' }}>
  <a href="/privacy-policy" style={{ color: 'white', textDecoration: 'underline' }}>Privacy Policy</a>
</span>
</CookieConsent>

</Layout>
);

}
