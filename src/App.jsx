import React, { useState, useEffect } from "react";
import ImagenSnipet from "./components/ImagenSnipet/ImagenSnipet";

function App() {
  const [galeria, setGaleria] = useState([]);
  useEffect(async () => {
    const datos = await (
      await fetch("https://jsonplaceholder.typicode.com/photos")
    ).json();
    // setGaleria((datosviejos)=>([...datosviejos, datos]))
    setGaleria(datos);
  }, []);

  return (
    <div className="container">
      <div className="row">
        {galeria.map((imagen) => (
          <ImagenSnipet data={imagen} />
        ))}
      </div>
    </div>
  );
}

export default App;
