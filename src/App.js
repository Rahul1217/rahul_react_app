// import logo from './logo.svg';
 //import './App.css';
 import 'bulma/css/bulma.css';
 import ProfileCard from './ProfileCard';
 import Alexaimage from './images/alexa.png';
 import Cortanaimage from './images/cortana.png';
 import Siriimage from './images/siri.png';

function App() {
return (
<div>
  <section className='hero is-primary'>
    <div className='hero-body'>
      <p className='title'>
      Personal Digital Assistence
      </p>
    </div>
  </section>

<div className='container'>
  <section className='section'>
    <div className='columns'>
      <div className='column is-4'>
        <ProfileCard title="Alexa" 
        handle="@Alexa89" 
        image={Alexaimage}
        description="test desc1"></ProfileCard>
      </div>
      <div className='column is-4'>
        <ProfileCard  title="Cortana" 
        handle="@Cortana88" 
        image={Cortanaimage}
        description="test desc2"></ProfileCard>
      </div>
      <div className='column is-4'>
        <ProfileCard  title="Siri" 
        handle="@Siri77" 
        image={Siriimage}
        description="test desc3"></ProfileCard>
      </div>
    </div>
  </section>
</div>
  
  
</div>
);

  // const name="Rahul";
  // const age = 33;

  // return (
  //   <div>
  //     <div className="App">
  //       <h1>Myname is : {name} and Age is : {age}</h1>
  //       <div><input type='number' min={5} max={10}></input></div>
  //     </div>
  //     <br></br>
  //     <div className='App'>
  //       <textarea autoFocus={true} spellCheck= {true} style={{backgroundColor: 'red'}}></textarea>
  //     </div>
  //   </div>
  //);
}

export default App;
