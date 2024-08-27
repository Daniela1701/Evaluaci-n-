import logo from '../imagenes/logo.png'
import facebook from '../imagenes/facebook.png'
import instagram from '../imagenes/youtube.png'
function Cabecera() 
{

  return (
    <>
    <div className="cabecera">
        <img src={logo} />
        <h1>MueblesFAST</h1>

        <div className='redes'>
            <img src={facebook}  />
            <img src={instagram} />
            <img src={youtube} />


        </div>
    </div>
      
    </>
  )
}

export default Cabecera