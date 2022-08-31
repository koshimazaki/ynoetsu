import Link from 'next/link';

import React from 'react'
import { Button, Segment, Grid, Container } from 'semantic-ui-react'

export default function Words() {

  const words = ['Word1', 'Word2', 'Word3'];
//   const chosenVideo = Math.floor(Math.random() * videos.length);
const words2 = ['Word4', 'Word5', 'Word6'];

// <Button class="ui black basic button" fixed style={{margin: 20}}>  <a> <h2> Click on word or phrase below </h2> </a>  </Button>
      
  return (
    <>
    <Segment inverted vertical > 
<p>  </p>
<Container>
       
        <Grid divided inverted stackable style={{ padding: "5em 0em" }} >
          
          <Grid.Row style={{ padding: "1em 1em" }}>


            <Grid.Column fixed style={{padding: 10}} width={5}>
                              
              

                  <p className="description"></p>
                  <Grid.Column fixed style={{padding: 30}} width={20}>
                  
                  
                  <p className="description"></p>

                  <Link href="/videos">
                 <a><h2>right on time for the musket</h2></a>
                 </Link>
        
                  <p className="description"></p>

                  </Grid.Column>

            

                   </Grid.Column>
          
            <Link href="/videos">
                 <a><h2>but blood is warm</h2></a>
                 </Link>


                 <Grid.Row fixed style={{padding: 5}} width={5}>
                 <h1 className="description"></h1>

                 <Link href="/videos">
                 <a><h2>seashell in no ocean</h2></a>
                 </Link>
                
                 <h1 className="description"></h1>

             
                
                 <h1 className="description"></h1>

                 <Link href="/videos">
                 <a><h2>Was it quick, when he took you?</h2></a>
                 </Link>

                 </Grid.Row>
                
                 <h1 className="description"></h1>

          </Grid.Row>
          <h1 className="description"></h1>


                
                 <h1 className="description"></h1>

           

                 <Grid.Column fixed style={{margin: 10}} width={5}>

                 </Grid.Column>


                 <Grid.Column fixed style={{margin: 10}} width={10}>

                 <Grid.Row>

                 <Link href="/videos">

                 <a><h2>  the broom closet behind the breast bone</h2></a>
                 
                 </Link>
                 </Grid.Row>
                 </Grid.Column>
        </Grid>
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: "15em 0em" }}> 

 </Segment>
            </>

  );

}




