import React, {useState, useEffect} from 'react'

export default function HookSayac1() {
    const [sayac, setSayac] = useState(0)
    const [isim,setIsim] = useState("")

    useEffect(()=>{
        console.log("güncelleme yapıldı")
        document.title=`${sayac} defa tıklandı`
    },[sayac])

    return (
        <div>
            <input type="text" value={isim} onChange={(e)=>setIsim(e.target.value)} />
           <button onClick={()=>setSayac(sayac + 1)} >{sayac} defa tıklandı</button> 
        </div>
    )
}
