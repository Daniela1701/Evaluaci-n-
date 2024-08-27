import Banner from "./componentes/banner"
import Cabecera from "./componentes/cabecera"
import FechaHora from "./componentes/footer"
import Formulario from "./componentes/formulario"
import './componentes/muebles.css'

function Muebles() {

    return (
      <>
        <Cabecera/>
        <hr />
        <Banner/>
        <Formulario/>
        <FechaHora/>
      </>
    )
  }
  
  export default Muebles