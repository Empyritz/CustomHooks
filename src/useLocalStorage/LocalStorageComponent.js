import React from "react";
import useLocalStorage from "./useLocalStorage";

export default function LocalStorage(){
  const [name, setName] = useLocalStorage('name', '')

  return(
    <input 
      type="text"
      value={name}
      onChange={e => setName(e.target.value)}
    />
  )
}