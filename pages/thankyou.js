import Link from 'next/link';

import React from 'react'
import { Button } from 'semantic-ui-react'


export default function Thankyou() {

    return (
        <>
<h1>Thank you!</h1>


<Button fixed style={{ margin: 1 }} href="/words" secondary>Continue your journey</Button>

<Button fixed style={{ margin: 1 }} href="/about" secondary>Find out more about the project</Button>

</>
    )
}