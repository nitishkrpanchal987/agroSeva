
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routing from './components/Routing';
import Alert from './components/Alert';
import { useState } from 'react';
// import Fire from './components/Fire';



function App() {
  let [alert, setalert] = useState(null);
  const showalert = (message, type)=>{
    setalert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setalert(null);
    }, 5000);
  }

  return (
    <>
      <Navbar/>
      <Alert alert={alert}/>
      <Routing showalert={showalert}/>
      <Footer/>
    </>
  );
}

export default App;
