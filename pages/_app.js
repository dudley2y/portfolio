import "../styles/globals.css"
import Meta from "../components/Meta"

function MyApp({ Component, pageProps }) {
  return(
      <div>
        <Meta/>
        <Component {...pageProps} className = "global" />
      </div>

  )
}

export default MyApp
