import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import StarShipCard from './components/StartShipCard'


function App() {
  const [starShip, setStarShip] = useState(0)

  async function getStarShip(){
    let res = await axios("https://www.swapi.tech/api/starships");
    let data = await res.data.results;
    console.log(data);
    setStarShip(data);
  }

  useEffect(()=>{
      getStarShip();
  },[]);

  let display =() => starShip.map(s=>{
    return <StarShipCard key={s.name} name={s.name} uid={s.uid}/>
  })

  return (
   <>
     {starShip && display() }
   </>
  )
}

export default App
