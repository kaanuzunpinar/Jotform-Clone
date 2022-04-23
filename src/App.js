import { FirstPart } from "./Components/FirstPart";
import Header from "./Components/Header";
import { SecondPart } from "./Components/SecondPart";
import './Styles/App.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <FirstPart/>
      <SecondPart/>
    </div>
  );
}

export default App;
