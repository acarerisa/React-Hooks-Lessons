import React, { useState } from "react";

export default function Kitaplar() {
  const [kutuphane, setKutuphane] = useState([
    { adi: "İstanbul Hatırası", yazari: "Ahmet Ümit", basim: "2010" },
    { adi: "Gülün Adı", yazari: "Umberto Eco", basim: "2012" },
    { adi: "1984", yazari: "George Orwell", basim: "1948" },
  ]);
  const [kitap, setKitap] = useState({ adi: "", yazari: "", basim: "" });

  const ekleKitap=()=>{
        setKutuphane([...kutuphane,kitap])
        setKitap({ adi: "", yazari: "", basim: "" })
  }
  return (
    <div>
      
        <input
          type="text" value={kitap.adi}
          onChange={(e) => setKitap({ ...kitap, adi: e.target.value })}
          placeholder="isim"
        />
       
        <input type="text" value={kitap.yazari}
         onChange={(e) => setKitap({ ...kitap, yazari: e.target.value })}
         placeholder="soyisim" />
        <input
          type="text" value={kitap.basim}
          onChange={(e) => setKitap({ ...kitap, basim: e.target.value })}
          placeholder="basım yılı"
        />
        <button onClick={ekleKitap} >Ekle</button>
      
        <div style={{display:"flex",flexWrap:"wrap" }} >
      {kutuphane.map((kitap, index) => {
        return (
          <div
            style={{
              border: "2px solid red",
              backgroundColor: "turquoise",
              width: "300px",
              margin: "5px",
            }}
            key={index}
          >
            <h1>Kitap Adı: {kitap.adi} </h1>
            <h2>Yazarı: {kitap.yazari}</h2>
            <h3>Basım Yılı: {kitap.basim} </h3>
          </div>
        );
      })}
      </div>
    </div>
  );
}
