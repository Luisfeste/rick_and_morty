import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../serchbar/SearchBar";
import style from "./Nav.module.css"



export default function nav({onSearch}){
     return <div className={style.nav} >
          <Link to="/home" className={style.link}>Home</Link>
          <Link to="/about" className={style.links}>About</Link>
          
          <SearchBar onSearch={onSearch}/>
          </div>
}