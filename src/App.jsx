import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './Components/Header/Header'
import Bodycontent from './Components/Header/Bodycontent'

function App() {
  const [count, setCount] = useState(0)

  const name="thulakshana";
  const addres="buluwala";
  const style_dev={
    color:'Blue'
  }

  const getname=(a,b,c)=>{
    return `${a} ${b} ${c}`;
  }

  function event_h(e){
    console.log("clicked",e);
  }

  let fruits=["apple","banana","mango"];
  fruits.push("strowberry");

 

 




  return (
    <>


    <Header/>

    <Bodycontent>
      <h1>hello</h1>
      <p style={style_dev}>my name is {name}. and i line in {addres}</p>

      <p>full name:{getname("thulakshana","randeepana","dissanyaka")}</p>

      <button onClick={event_h}>click me</button>

      <h1>the most sold out fruit is {fruits[3]}</h1>

     


      

     







    </Bodycontent>
    </>
  )
}

export default App
