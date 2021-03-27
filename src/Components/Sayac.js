import React, {useState} from 'react'

export default function Sayac() {
    const initialState1 = 0
    const initialState2 = 10
    const[sayac,setSayac] = useState(initialState1)

    const[sayac2, setSayac2] = useState(initialState2)

    return (
        <div>
          <div>Sayaç-1: {sayac}</div> 
          <button onClick={()=>setSayac(prevstate=>prevstate + 1)} >Bir Artır</button> 
          <button onClick={()=>setSayac(prevstate=>prevstate - 1)} >Bir Azalt</button> 
          <button onClick={()=>setSayac(initialState1)}>Reset</button> 
          <hr></hr>
          <div>Sayaç-2: {sayac2}</div> 
          <button onClick={()=>setSayac2(prevstate=>prevstate + 1)} >Bir Artır</button> 
          <button onClick={()=>setSayac2(prevstate=>prevstate - 1)} >Bir Azalt</button> 
          <button onClick={()=>setSayac2(initialState2)}>Reset</button> 
        </div>
    )
}
