import "./App.css"
import CountDown from "./components/CountDown"
import date from "./.env.js"
import logo from "./cleo-logo.svg"

function App() {
  console.log(date)
  return (
    <div className="App">
      <img src={logo} alt="Cleopatra" />
      <CountDown toDate={date} />
    </div>
  )
}

export default App
