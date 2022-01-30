import "../styles/globals.css"
import Meta from "../components/Meta"
import { useEffect } from "react"

function MyApp({ Component, pageProps }) {

  return(
      <div>
        <Meta/>
        <Component {...pageProps} className = "global" />
      </div>

  )
}

export default MyApp
