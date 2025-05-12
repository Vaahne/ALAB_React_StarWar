import axios from "axios";
export async function getAllStarShips(){
    try{
        let res = await axios("https://www.swapi.tech/api/starships");
        let data = await res.data.results;
        return data;
    }catch(err){
        console.error(err.message);
    }
}