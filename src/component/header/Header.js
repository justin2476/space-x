import './Header.css';
import SpaceXLogo from '../space-x/Logo';
import { useNavigate } from "react-router-dom";



function Header() {
    let navigate = useNavigate(); 
    const routeHome = () =>{ 
      let path = `home`; 
      navigate(path);
    }
    const routeDragon = () =>{ 
        let path = `dragon`; 
        navigate(path);
      }
    const routeJoke = () =>{ 
      let path = `joke`; 
      navigate(path);
    }
    
    const routeFalcon = () =>{ 
        let path = `falcon`; 
        navigate(path);
      }
  return (
<div>
    
    <ul className="header">
    <SpaceXLogo route={routeHome}/>
      <li className="tabs" onClick={routeHome} ><button className="active" >Home</button></li>
      <li className="tabs" onClick={routeDragon}><button >Dragon</button></li>
      <li className="tabs" onClick={routeFalcon}><button>Falcon</button></li>
      <li className="tabs" onClick={routeJoke}><button>Jokes</button></li>
  </ul>
  </div>


  );
}

export default Header;