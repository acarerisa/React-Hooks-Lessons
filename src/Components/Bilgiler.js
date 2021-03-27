import React, {useState} from 'react'

export default function Bilgiler() {
    const[kimlik, setKimlik] = useState({isim:"isa",soyisim:"acarer"})
    return (
        <div>
           <input type="text" value={kimlik.isim}
           onChange={(e)=>setKimlik({...kimlik,isim:e.target.value})}
            placeholder="isim" />

           <input type="text" value = {kimlik.soyisim}
           onChange={(e)=>setKimlik({...kimlik,soyisim:e.target.value})}
            placeholder="soyisim"/>
           <div>isim: {kimlik.isim} </div>
           <div>soyisim:{kimlik.soyisim} </div>
        </div>
    )
}
