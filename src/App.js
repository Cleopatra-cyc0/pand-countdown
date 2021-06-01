import "./App.css"
import CountDown from "./components/CountDown"
import date from "./.env.js"
import logo from "./cleo-logo.svg"
import MadeWithLove from "./components/MadeWith♡"

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <img src={logo} alt="Cleopatra" />
        <CountDown toDate={date} />
      </div>
      <MadeWithLove repo="Cleopatra-cyc0/pand-countdown" />
    </div>
  )
}

export default App
