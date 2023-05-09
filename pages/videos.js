import Link from 'next/link';
import ReactPlayer from 'react-player'
import {Button } from 'semantic-ui-react'


export default function Videos() {

  const videos = ['/v/Treasure_1.mp4', '/v/Treasure_2.mp4','/v/Treasure_3.mp4' ];
  const chosenVideo = Math.floor(Math.random() * videos.length);
  const formUrl = "/form?video="+videos[chosenVideo]

  return (
    <>
      <div fixed style={{margin: 20}}className='section'id="section1">
      <ReactPlayer fixed style={{padding: 20}} 
      
      max-height= '80vh'
      background= 'black'
      width='80%'
      height='80%'
      
      url={videos[chosenVideo]} playing controls/>

      <Button fixed style={{margin: 20}} href={formUrl}  secondary>Continue your journey</Button>


      </div>
     

    </>





  );
}