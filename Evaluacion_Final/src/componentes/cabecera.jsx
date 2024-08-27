import logo from '../imagenes/logo.png'
import facebook from '../imagenes/facebook.png'
import instagram from '../imagenes/instagram.png'
import youtube from '../imagenes/youtube.png'

function Cabecera() 
{

  return (
    <>
    <div className="cabecera">
        <div className='logo'>
        <img src={logo} />
        <h1>MueblesFAST</h1>
        </div>
        <div className='redes'>
            <img src={facebook}  className='red1' />
            <img src={instagram} className='red2' />
            <img src={youtube} className='red3' />
        </div>
    </div>
      
    </>
  )
}

export default Cabecera