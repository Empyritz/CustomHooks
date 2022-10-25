import { useRef } from "react";

export default function usePrevious(value) {
  const currentRef = useRef(value)
  const previousRef = useRef()


  if(currentRef.current !==value){
    previousRef.currrent = currentRef.current
    currentRef.current = value
  }

  return previousRef.current

}