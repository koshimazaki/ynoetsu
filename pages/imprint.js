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

export default function Imprint() {
  return (
    <ContentContainer style={{ margin: 10 }}>
      <h1>Imprint</h1>

      <MainParagraph style={{ margin: 5 }}>
           <p>
            Radoslaw Rudnicki vertex data
            </p>
            <p>
             NIP: 8133132727
            </p>
             <p>
              Regon: 520749304
            </p>
            <p>
              email: radex.email@gmail.com
            </p>
            <p>
              Address: ul. Architektów 11/37, 35-082 Rzeszów, Poland
           </p>

      </MainParagraph>

      <Button style={{ margin: 10 }} href="/select" secondary>
        Continue your journey
      </Button>
    </ContentContainer>
  );
}
