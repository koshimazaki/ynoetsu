import Head from 'next/head'
// import Link from 'next/link';
import { Button, Icon } from 'semantic-ui-react';

// <Button  href="/words" class="ui secondary button">start your journey</Button> different style button


export default function Home() {
  return (
    <div className="container">
      <Head fixed style={{margin: 20}}>
        <title>ynoetsu</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main>

      <h5 fixed style={{margin: 0}}>
      you need our eyes to see us
   
      </h5>

<p> </p>
        <p className="description">
        You are about to experience a new way
of exploring the museum exhibition.</p>

<p className="description">This is a mixed media piece using
poetry, text, sound and the authors' voices
presented in a video format.</p>

<p className="description">

          </p>
    

    <Button fixed style={{margin: 10}} href="/select" secondary>start your journey</Button>
        <p> </p>
        <p> </p>
        <p> </p>
        <p> </p>
{/* 
        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}






      </main>

       <footer>
        <a
          href="/about"
          target="_blank"
          rel="noopener noreferrer"
        >
         <h3> About{' '}</h3>
     
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #000000;
        }


        a {
          color: #ffffff;
          text-decoration: none;
        }

        a:hover, a:active {
          color: #ffffff;
        }



        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #000000;
        }



  footer  a:hover, a:active {
    color: #000000;
  }




        header a {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #000000;
        }

        a {
          color: #000000;
          text-decoration: none;
        }

        .title a {
          color: #000000;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
          color: #ffffff;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #ffffff;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 3em;
        }

        @media (max-width: 1024px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 3;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;

        }

        a {
          color: #ffffff;
          text-decoration: none;
        }

        a:hover, a:active {
          color: #ffffff;
        }

        header a {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #000000;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
