import Link from 'next/link';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const BoldLink = styled.a`
  color: black;
  font-weight: bold;
`;

const ContentContainer = styled.div`
  padding: 10px;
`;

const MainParagraph = styled.div`
  padding: 10px;
`;

export default function PrivacyPolicy() {
  return (
    <ContentContainer style={{ margin: 10 }}>
      <h1>Privacy Policy</h1>

      <MainParagraph>
     
  <p>
    This Privacy Policy explains how ynoetsu prototype handles your personal information when you use our mixed media prototype, built using <strong style={{fontWeight: 'bold'}}>Vercel.app</strong> and <strong style={{fontWeight: 'bold'}}>Google Forms API</strong>. Our website collects information from you in various ways, including when you provide it directly, when it's collected automatically (such as through cookies), and from third parties.
  </p>
  <p>
    By using the ynoetsu website and Google Forms API, you agree to how we collect, use, and share your information as described in this policy. We use your information to enhance your experience and for other purposes, such as providing security and preventing fraud. We might share your information with third parties in specific situations, like when we have your permission or when it's required by law.
  </p>
  <p>
    ynoetsu is built on Vercel.app, and their privacy policy can be found at <a href="https://vercel.com/legal/privacy-policy" style={{color: 'black', textDecoration: 'underline'}}>https://vercel.com/legal/privacy-policy</a>. We also use Google Forms API as part of our Services, which follows Google's privacy policy, available at <a href="https://policies.google.com/privacy" style={{color: 'black', textDecoration: 'underline'}}>https://policies.google.com/privacy</a>. We recommend reviewing both Vercel.app and Google's privacy policies to fully understand their data practices.
    If you have any questions about this Privacy Policy, feel free to contact <a href="#" style={{color: 'black', textDecoration: 'underline'}}>Officer at the Museum</a>.
  </p>


      </MainParagraph>

      <Button style={{ margin: 10 }} href="/select" secondary>
        Continue your journey
      </Button>
    </ContentContainer>
  );
}
