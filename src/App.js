import Topbar from "./Components/topbar/topbar"
import AppBody from "./Components/appbody/body"
import Footer from "./Components/footer"
import "./App.css"

function App() {
  return (
      <div className={"wrapper"}>
        <Topbar />
        <AppBody/>
        <Footer/>
      </div>
  )
}

export default App;
