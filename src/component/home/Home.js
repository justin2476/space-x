import React,{useEffect,useState} from 'react'
import './Home.css'
import SpacexApi from './../../service/spacex.company.info';

export default function Home() {
    const [info,setInfo]=useState();
    const [image,setImage]=useState();
    async function fetchData() {
        var data = await SpacexApi.CompanyInfo();
        var data2=await SpacexApi.StarShip();
        setImage(data2.data.flickr_images);
        setInfo(data.data);
      }
    useEffect(() => {
        fetchData();
      }, []);
  return (
    <section className="u-black u-clearfix u-section-1" id="carousel_0bd9">
    <div className="u-clearfix u-sheet u-sheet-1">
      <img className="u-image u-image-1" src={image&&image[0]} alt="spacex " />
      <img className="u-image u-image-2" src={image&&image[2]} alt="spacex  2" />
      <img className="u-image u-image-3" src={image&&image[3]} alt="spacex  3" />
      <div className="u-align-left u-container-style u-grey-60 u-group u-group-1">
        <div className="u-container-layout u-valign-middle u-container-layout-1">
          <h2 className="u-custom-font u-font-montserrat u-text u-text-body-alt-color u-text-1"> Future technology</h2>
          <h6 className="u-text u-text-2">{info&&info.name}</h6>
          <p className="u-text u-text-3">{info&&info.summary}</p>
       
          <a href={info&&info.links&&info.links.website} className="u-active-palette-1-light-1 u-border-none u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-radius-11 u-text-palette-1-base u-white u-btn-2" >learn more</a>
        </div>
      </div>
    </div>
  </section>
  
  )
}
