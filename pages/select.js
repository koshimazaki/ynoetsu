import Link from 'next/link';

import React from 'react'
import { Button, Segment, Grid, Container } from 'semantic-ui-react'

export default function Selector() {

 // const words = ['Word1', 'Word2', 'Word3'];
//   const chosenVideo = Math.floor(Math.random() * videos.length);
// const words2 = ['Word4', 'Word5', 'Word6'];

// <Button class="ui black basic button" fixed style={{margin: 20}}>  <a> <h2> Click on word or phrase below </h2> </a>  </Button>
      
  return (
    <>
   <Container>

<p></p>
<p> </p>


   <Grid divided inverted stackable style={{ padding: "5em 0em" }} >
          
   <Grid.Column fixed style={{padding: 0}} width={8}>
   

   <Button fixed style={{margin: 20}} href="/words" secondary>Treasure (A Sestina)</Button>
  
                 </Grid.Column>

                 <Grid.Column fixed style={{padding: 0}} width={5}>
 

                 <Button fixed style={{margin: 20}} href="/words2" secondary>you need our eyes to see us</Button>
  

 </Grid.Column>
     
</Grid> 

  </Container>
            </>

  );

}




