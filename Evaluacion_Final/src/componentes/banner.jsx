import React, { useState, useEffect } from 'react'; 
import mueble1 from '../imagenes/mueble1.jpg';
import mueble2 from '../imagenes/mueble2.jpg';

function Banner() {

  const [indiceImg, nuevaImg] = useState(0);

  // Array de imágenes
  const imagen = [mueble1, mueble2];

  useEffect(() => {
    // Función para rotar la imagen
    const rotarImagen = () => {
      nuevaImg((indicePrevio) => (indicePrevio + 1) % imagen.length);
    };

    // Iniciar la rotación cada segundo
    const intervaloId = setInterval(rotarImagen, 3000);

    // Agregamos console.log para depuración
    console.log(`Imagen actual: ${imagen[indiceImg]}`);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervaloId);
  }, [indiceImg, imagen]); // Aseguramos que se vuelva a ejecutar el efecto cuando cambie el índice o las imágenes

  return (
        <div id="Banner">
            <img id="imagenBanner" src={imagen[indiceImg]} alt={`Banner ${indiceImg}`} />
        </div>

  );
}
export default Banner;