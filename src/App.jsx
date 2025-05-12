import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import StarShipCard from './components/StartShipCard'
import { generatePath } from 'react-router-dom';
import { getAllStarShips } from './services/sw-api';
import Label from './components/Label';


function App() {
  const [starShip, setStarShip] = useState()

  async function getStarShip(){
    let res = await axios("https://www.swapi.tech/api/starships");
    let data = await res.data.results;
    // console.log(data);
    setStarShip(data);
  }

  useEffect(()=>{
    
    getStarShip();
    
    // async function getData(){
    //    let data = await getAllStarShips();
    //    setStarShip(data);
    // }
    
    // getData();
    
  },[]);

  let display =() => starShip.map(s=>{
    return <StarShipCard key={s.name} name={s.name} uid={s.uid}/>
  })

  return (
   <>
    <Label/>
    <div  class="cardsContainer"> {starShip && display() }</div>
   </>
  )
}

export default App
