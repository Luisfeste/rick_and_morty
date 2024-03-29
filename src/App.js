import { useState } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import './App.css'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav'
import Detail from './components/detail/Detail.jsx'
import About from './components/about/About'
import Form from './components/Form/Form'





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

 const location = useLocation();
 console.log(location);
 
  return (
    <div className='App' style={{ padding: '25px' }}>
     <div><Nav onSearch={onSearch} /></div>
    
     <Routes>
      <Route exact path='/' element={<Form/>}></Route>
      <Route path="/home" element={<Cards onClose={onClose} characters={characters} />}/>
  
      <Route path="/about" element ={<About/>}/>
      <Route path="/detail/:detailId" element ={<Detail/>}/>
      </Routes>
         
    </div>
  )
}



export default App
