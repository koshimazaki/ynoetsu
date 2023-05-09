import Link from 'next/link';
import { useRouter } from 'next/router'

import React from 'react'
import { Message, Form, Button, TextArea } from 'semantic-ui-react'
import { setState, useState } from 'react';

const { log } = console;

export default function FormFunction() {

  const router = useRouter()
  const chosenVideo = router.query.video

  const [word1, setWord1] = useState(0);
  const [word2, setWord2] = useState(0);
  const [word3, setWord3] = useState(0);
  const [word4, setWord4] = useState(0);
  const [word5, setWord5] = useState(0);
  const [textBefore, setTextBefore] = useState();
  const [textAfter, setTextAfter] = useState();
  const [success, setSuccess] = useState('');

  log("Word1:", word1)
  log("Word2:", word2)
  log("Word3:", word3)
  log("Word4:", word4)
  log("Word5:", word5)
  log("Chosen video: ", chosenVideo)

  log("Text Before:", textBefore)
  log("Text After:", textAfter)

  const handleSubmit = async (event) => {

    event.preventDefault();

    const AllData = {

      word1,
      word2,
      word3,
      word4,
      word5,
      textBefore,
      textAfter,
      chosenVideo

    }
    log("ALL", AllData)

    const rawResponse = await fetch('/api/Submit', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(AllData)
    });
    const content = await rawResponse.json();
    success = true;
    // print to screen
    //alert(content.data.tableRange)
    
    if(rawResponse.status == 201){
         window.location.href = "/thankyou";
    }
/*

Add these to form after test 

      <Form.Checkbox fixed style={{ margin: 10 }} label='Uneasy'
        type="checkbox"
        value={word1}
        onClick={() => setWord1(word1 + 1)}
      />

      <Form.Checkbox fixed style={{ margin: 10 }} label='Symphathetic'
        value={word2}
        onClick={() => setWord2(word2 + 1)}
      />

      <Form.Checkbox fixed style={{ margin: 10 }} label='Surprised'
        value={word3}
        onClick={() => setWord3(word3 + 1)}
      />

      <Form.Checkbox fixed style={{ margin: 10 }} label='Moved / Emotional / Sad'
        value={word4}
        onClick={() => setWord4(word4 + 1)}
      />

      <Form.Checkbox fixed style={{ margin: 10 }} label='Other... please type below'
        value={word5}
        onClick={() => setWord5(word5 + 1)}
      />


Please tick as many boxes as applicable for you. The options given include the most commonly expressed feelings offered by other participants in the project.


*/



}


return (
  <>
    <h1>Short break</h1>

<h3>We hope you are enjoying the journey. Do you mind sharing your thoughts with us?</h3> 
   <h3> It will help us make the experience better for other visitors. </h3> 
   
      <Form>

      <p style={{ margin: 10 }}>How you felt before watching the video? </p>


      <TextArea fixed style={{ margin: 10 }} placeholder='Please tell us how you felt before watching the video, or just type few words describing your feelings.'

        value={textBefore}
        onChange={({ target }) => setTextBefore(target?.value)}
      />

      <p style={{ margin: 10 }}>How did this piece make you feel? </p>


      <TextArea fixed style={{ margin: 10 }} placeholder='Please tell us how did this piece make you feel, or just type few words that came to your mind.'

        value={textAfter}
        onChange={({ target }) => setTextAfter(target?.value)}
      />

      <Button onClick={handleSubmit} fixed style={{ margin: 10 }} href="" primary>Submit


      </Button>

      <Button fixed style={{ margin: 1 }} href="/select" secondary>Continue your journey</Button>

      <Button fixed style={{ margin: 1 }} href="/about" secondary>Find out more about the project</Button>
      
      <Message
      success
      header='Form Completed'
      content="Thanks for sharing your thoughts!"

    />
    </Form>

  </>
);

}