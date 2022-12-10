import { useState } from 'react'
import './App.css'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav'





function App () {
  const [characters, setCharacters]= useState([]);


  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 };
 const onClose = (id) => {
setCharacters(characters.filter((char)=> char.id !== id));
 };
 
  return (
    <div className='App' style={{ padding: '25px' }}>
     <div><Nav onSearch={onSearch} /></div>
      <div><Cards onClose={onClose} characters={characters} /></div>     
    </div>
  )
}



export default App
