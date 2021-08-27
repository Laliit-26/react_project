
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState, useEffect } from 'react';
import Axios from './components/Axios';
import Alerts from './components/Alerts';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

    const showalert = (message, type) => {
      setalert({
        message: message,
        type: type,
      })
      setTimeout(() => {
        setalert(null);
      }, 1500);
    }


  if (mode === "dark")
  {
    document.body.style.backgroundColor = '#042743';
   
   }
  const togglemode = () => {
    if (mode==='light')
    {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert('dark mode has enabled', 'success');
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert('light mode has enabled', 'success')
    }
  }
  return (
    <>
      <Navbar title='TextUtils' mode={mode} toggle={togglemode} />
      <Alerts alert={alert}/>
       <TextForm heading='Enter the text to analyze below' mode={mode} showalert={showalert} />
{/* <Axios/> */}
    </>
  )
}

export default App;
