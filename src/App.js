import { useState } from 'react';
import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
// import { Route ,Switch} from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light');
  const [value , setValue] = useState('Enable Dark Mode');
  const [alert , setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
       setAlert(null)
    }, 2000);
  }
  const toggleMode = () =>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Has Been Enabled","success");
      setValue('Enable Dark Mode');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled","success");
      setValue('Enable Light Mode');
    }
  }
  return (
     <>
    
     <Navbar title={'Textutils'}
     mode = {mode} 
     toggleMode = {toggleMode}
     value = {value}
     />
     <Alert alert={alert}/>
     <div className="container my-4">
{/*      
     <Switch>
       <Route exact path="/" component={()=>   }/>
       <Route exact path="/about" component={About}/>
     </Switch> */}
   
     <TextForm text ={'Enter The Text To Analize'} mode={mode} showAlert={showAlert}/>
     {/* <About/> */}
     </div>
     
    </>
  );
}

export default App;
