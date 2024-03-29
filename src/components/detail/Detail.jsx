import {  useState, useEffect} from "react";
import { useParams } from "react-router-dom";

export default function Detail () {
     const {detailId} = useParams()
     //console.log(detailId);

     const [character, setCharacter]=useState({})
     useEffect(() => {
          fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
             .then((response) => response.json())
             .then((char) => {
                if (char.name) {
                   setCharacter(char);
                } else {
                   window.alert('No hay personajes con ese ID');
                }
             })
             .catch((err) => {
                window.alert('No hay personajes con ese ID');
             });
          return setCharacter({});
       }, [detailId]);
     return (<div> 
          <h1>{character.name}</h1>
     </div>)
     
}
