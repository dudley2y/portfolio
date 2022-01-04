import Layout from "../components/Layout"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  // let it rip
  return(
    <Layout> 
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
