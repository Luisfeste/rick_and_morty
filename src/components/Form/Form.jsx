import style from "./Form.module.css";
import React from "react";



export default function From(props) {
  return (
    <div>
     <form>
          <label htmlFor="">Username: </label>
          <input type="text" name="username" value="" onChange="" />
          <label htmlFor="">Password: </label>
          <input type="password" name="password" value="" onChange="" />
          <button>LOGIN</button>

     </form>

    </div>
  )
}
