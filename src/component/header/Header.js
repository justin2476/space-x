import './Header.css';
import React, {useState} from 'react';
import SpaceXLogo from '../space-x/Logo';
import { useNavigate } from "react-router-dom";

function Header() {
  const [active,setActive]=useState("home")
  const activeNav = (id) => {
    if (id === active) {
      return "active";
    } else {
      return "";
    }
  };
    let navigate = useNavigate(); 
    const routePath = (path) =>{ 
      setActive(path)
      navigate(path);
    }
 
     
  return (
<div>
    
    <ul className="header">
    <SpaceXLogo route={routePath}/>
      <li className="tabs" onClick={()=>routePath('home')} ><button className={activeNav('home')} >Home</button></li>
      <li className="tabs" onClick={()=>routePath('dragon')}><button className={activeNav('dragon')}>Dragon</button></li>
      <li className="tabs" onClick={()=>routePath('falcon')}><button className={activeNav('falcon')}>Falcon</button></li>
      <li className="tabs" onClick={()=>routePath('joke')}><button className={activeNav('joke')}>Jokes</button></li>
  </ul>
  </div>

  );
}

export default Header;