import React, {useReducer} from 'react'

const initialState = 0

const reducer = (state,action)=>{
    switch(action){
        case 'artir':
            return state + 1
        case 'azalt':
            return state - 1
        case 'reset':
            return initialState
    }
}

function Sayac() {
    const [sayac,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <div>Sayac:{sayac}</div>
           <button onClick={()=>dispatch('artir')} >Artır</button> 
           <button onClick={()=>dispatch('azalt')} >Azalt</button> 
           <button onClick={()=>dispatch('reset')} >Reset</button> 
        </div>
    )
}

export default Sayac
