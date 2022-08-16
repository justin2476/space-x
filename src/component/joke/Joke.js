import React,{useEffect,useState} from 'react'
import './joke.css'
import GetJoke from '../../service/get.joke.service';


export default function Joke() {
    const [joke,setJoke]=useState();
    async function fetchData() {
        var data = await GetJoke();
       setJoke(data.data);
      }
    useEffect(() => {
       
        fetchData();
      }, []);
      const getNextJoke=()=>{
        fetchData();
      }
  return (
    <section className="u-align-left u-clearfix u-grey-75 u-section-1 flex" id="carousel_927b">
    <h1 className="u-custom-font u-font-montserrat u-text u-text-body-alt-color u-text-1-j A">Joke</h1>
    <img className="u-image u-image-default u-image-1-j B" src={require('./smile.jpg')} alt="test pictures"/>
    <p className="u-align-left u-text u-text-2-j C">{joke&&joke.joke}</p>
    <button onClick={getNextJoke} className="D u-active-palette-1-light-2 u-border-none u-btn u-btn-round u-button-style u-hover-palette-1-light-2 u-radius-50 u-text-active-white u-text-body-color u-text-hover-white u-white u-btn-1-j">next joke</button>
  </section>
  
  )
}
