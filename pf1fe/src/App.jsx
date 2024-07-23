import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar/navbar'
import { Displayboard } from './components/displayboard'
import { Nameboard } from './components/nameboard'
import { BrowserRouter , Route , Routes , Link} from 'react-router-dom';
import Hireme from './components/hireme'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>


      <BrowserRouter >

<Routes>


<Route path="/" element={<Displayboard/>} /> 


<Route path="/hireme" element={<Hireme/>} /> 

</Routes>
</BrowserRouter>


      </div>
  
  
    </>
  )
}

export default App
