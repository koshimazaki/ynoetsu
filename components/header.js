import Link from 'next/link';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";


// <Button class="ui secondary button" href="/about"> not working for some reason 
// <a>About</a>
// </Button>




  export default function SiteHeader() {

    return (
      <>
      <Segment inverted vertical style={{ padding: "1em 0em" }}>
        <Container>
        <Header inverted as="h2"> 
     
        <Button  fixed style={{padding: 10}} href="/" class="ui secondary button">ynoetsu</Button>
        
        </Header>
          
        </Container>
      </Segment>
      </>
    );
  }