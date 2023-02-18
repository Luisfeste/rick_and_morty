import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../serchbar/SearchBar";
import style from "./Nav.module.css"



export default function nav({onSearch}){
     return <nav >
          <img src="https://1.bp.blogspot.com/-AvVxtmDEbCw/YRQjDiXFhCI/AAAAAAABAR8/lNQZ_fg-C9UXdoNkqJ3uVOwANlu7S_ZAACLcBGAsYHQ/s3200/tipografia-rick-y-morty.jpg"/>
          <Link to="/home" className={style.links}>Home</Link>
          <Link to="/about" className={style.links}>About</Link>
          
          <SearchBar onSearch={onSearch}/>
          </nav>
}