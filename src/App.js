import "./App.css"
import CountDown from "./components/CountDown"
import date from "./.env.js"
import logo from "./cleo-logo.svg"

function App() {
  console.log(date)
  return (
    <div className="App">
      <img
        src={logo}
        style={{ width: "30vw", margin: "0 auto", alignSelf: "start" }}
      />
      <CountDown toDate={date} />
    </div>
  )
}

export default App
