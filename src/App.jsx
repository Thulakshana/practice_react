import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './Components/Header/Header'
import Bodycontent from './Components/Header/Bodycontent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


    <Header/>

    <Bodycontent>
      <h1>hello</h1>
    </Bodycontent>
    </>
  )
}

export default App
