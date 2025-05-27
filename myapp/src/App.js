import logo from './logo.svg';
import './App.css';

function App() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

              <div> 
          <h1 style = {{color:"blue", fontStyle: "italic", fontSize: "15px"}}>Task 1</h1> 
          <p> List of fruits</p> 
          {/* <ol> */} 
          <ol style={{ textAlign: "center", display: "inline-block" }}> 
          <li>Apple</li> 
          <li>Lichi</li> 
          <li>Kiwi</li> 
          <li>Pineapple</li> 
          <li>Strawberry</li> 
          </ol> 
          <h6>Current Date: {date}</h6> 
          <h6>Current Time: {time}</h6> 
          </div>
  );
}

export default App;
