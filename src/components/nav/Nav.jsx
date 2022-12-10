import React from "react";
import SearchBar from "../serchbar/SearchBar";



export default function nav({onSearch}){
     return <div ><SearchBar onSearch={onSearch}/></div>
}