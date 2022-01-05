import Introduction from "../components/Introduction";
import RedirectButtons from "../components/RedirectButtons";
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <div className = "page">
      <Introduction/>
      <Welcome/>
      <RedirectButtons/>
    </div>

  )
}