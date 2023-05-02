
import './App.css'
import { useState ,useEffect} from 'react'
import Home from './pages/home/Home';

function App() {
  const [state , setState] = useState(false);
  useEffect(()=>{
    setTimeout(()=>setState(true),4000)  
  },[])
            
           
  return (

      <div className="App">

{!state && <div className="loader"></div> }
         { state &&  <Home/>}
     </div>
         
  )
}

export default App
