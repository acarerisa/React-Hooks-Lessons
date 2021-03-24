import React, {useReducer} from 'react'

const initialState = {
    ilkSayac:0,
    ikinciSayac:10
}

const reducer = (state,action)=>{
    switch(action.type){
        case 'artir':
            return {...state,ilkSayac:state.ilkSayac + action.value}
        case 'artir-2':
            return {...state,ikinciSayac:state.ikinciSayac + action.value}
        case 'azalt':
            return {...state,ilkSayac:state.ilkSayac - action.value}
        case 'azalt-2':
            return {...state,ikinciSayac:state.ikinciSayac - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function Sayac() {
    const [sayac,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <div>İlk Sayac:{sayac.ilkSayac}</div>
            <div>İkinci Sayac:{sayac.ikinciSayac}</div>
           <button onClick={()=>dispatch({type:'artir', value:1})} >Artır</button> 
           <button onClick={()=>dispatch({type:'artir', value:5})} >5 Artır</button> 
           <button onClick={()=>dispatch({type:'artir-2', value:1})} >Artır-ikinci</button> 
           <button onClick={()=>dispatch({type:'artir-2', value:5})} >5 Artır-ikinci</button> 
           <button onClick={()=>dispatch({type:'azalt',value:1})} >Azalt</button> 
           <button onClick={()=>dispatch({type:'azalt',value:5})} >5 Azalt</button> 
           <button onClick={()=>dispatch({type:'azalt-2',value:1})} >Azalt-ikinci</button> 
           <button onClick={()=>dispatch({type:'azalt-2',value:5})} >5 Azalt-ikinci</button> 
           <button onClick={()=>dispatch({type:'reset'})} >Reset</button> 
        </div>
    )
}

export default Sayac
