
import './App.css';
import './index.js'


function App() {
  return (
<div className="App">
  <header className="App-header">
    <div className="header">
      <h1>Budget</h1>
    </div>
  <div className="margin">
          <div className="row noMargin">
            <div className="one" onClick = "alert('Hello world')">
                <h1>Live</h1>
            </div>
            <div className="two">
                <h1>Give</h1>
            </div>
          </div>
          <div className="row noMargin">
            <div className="three">
                <h1>Owe</h1>
            </div>
            <div className="four">
                <h1>Grow</h1>
            </div>  
          </div>
  </div>
  </header>
  <div className="Circle">
    <h1>Monthly Allowance</h1>
  </div>

  <br></br>

  <div className="Spent">
    <h1>Amount Spent: </h1>
  </div>
    <br></br>
  <div className="Remaining">
    <h1>Amount Remaining: </h1>
  </div>
</div>
  );
}

export default App;
