// pages/_app.js
 import 'semantic-ui-css/semantic.min.css'
import '../css/meta-poems.css'
import Layout from "../components/layout";
//import Footer from "../Components/Footer";
import Header from "../components/header";

export default function MyApp({ Component, pageProps }) {
    return (
          <Layout>
            <Header/>
              <Component {...pageProps} />
           
          </Layout>
      )
}