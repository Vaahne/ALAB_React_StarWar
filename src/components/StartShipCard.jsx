import '../App.css'
export default function StarShipCard({name,uid}){
    return <>
    <div className="card">{name}  {uid}</div>
    </>
}