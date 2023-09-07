import PersonCard from "./components/PersonCard";


const App = () => {

  return(
    <div className="App">
      <PersonCard name="Marie" lastName="Adani" age={23} hair="brown"/>
      <PersonCard name="Silvia" lastName="Venegas" age={57} hair="black"/>
    </div>
  )
}


export default App;
