// import { useState } from 'react';
import './App.css';

import Cards from './components/cards/Cards';
import Decomposition from "./components/decomposition/Decomposition";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Cards />
      </div>
      <div id='tags2'>------------- ниже 2-е задание ------------</div>
      <div className='App'>
        <Decomposition />
      </div>
    </>
    
  )
}

export default App
