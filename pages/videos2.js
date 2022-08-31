import Link from 'next/link';
import ReactPlayer from 'react-player'
import {Button } from 'semantic-ui-react'

export default function Videos2() {

  const videos2 = ['/v/ynoetsu_1.mp4','/v/ynoetsu_2.mp4','/v/ynoetsu_3.mp4'];
  const chosenVideo2 = Math.floor(Math.random() * videos2.length);
  const formUrl = "/form?video="+videos2[chosenVideo2]

  return (
    <>
     
      <div className="section" id="section2">
      <ReactPlayer fixed style={{padding: 20}}
      
      max-height= '80vh'
      background= 'black'
      width='80%'
      height='80%'
      
      url={videos2[chosenVideo2]} playing controls/>

      
       
      <Button fixed style={{margin: 20}} href={formUrl}  secondary>Continue your journey</Button>
      

      </div>
    </>
  );
}