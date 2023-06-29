// import logo from './logo.svg';
 import './App.css';

function App() {
  const name="Rahul";
  const age = 33;

  return (
    <div>
      <div className="App">
        <h1>Myname is : {name} and Age is : {age}</h1>
        <div><input type='number' min={5} max={10}></input></div>
      </div>
      <br></br>
      <div className='App'>
        <textarea autoFocus={true} spellCheck= {true} style={{backgroundColor: 'red'}}></textarea>
      </div>
    </div>
  );
}

export default App;
