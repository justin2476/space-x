import React,{useEffect,useState} from 'react'
import SpacexApi from './../../service/spacex.company.info';
import './Dragon.css'

export default function Dragon() {
    const [info,setInfo]=useState();
 
    async function fetchData() {
        var data = await SpacexApi.getDragon();
   
       setInfo(data.data);
       console.log(info);

      }
    useEffect(() => {
        fetchData();
      }, []);
  return (
    <section class="u-align-center u-black u-clearfix u-section-1" id="carousel_1383">
    <div class="u-clearfix u-layout-wrap u-layout-wrap-1">
      <div class="u-layout">
        <div class="u-layout-row">
          <div class="u-align-left u-container-style u-layout-cell u-size-24 u-layout-cell-1">
            <div class="u-container-layout u-valign-middle u-container-layout-1">
              <h2 class="u-text u-text-1">{info&&info[0].name}</h2>
              <p class="u-text u-text-2">{info&&info[0].description}
              </p>
              <a href={info&&info[0].wikipedia} class="u-active-black u-align-center u-border-2 u-border-active-black u-border-grey-75 u-border-hover-black u-btn u-btn-round u-button-style u-hover-black u-none u-radius-10 u-text-active-white u-text-hover-white u-btn-1">Learn more</a>
            </div>
          </div>
          <img src={info&&info[0].flickr_images[2]} class="u-align-left u-container-style u-image u-image-default u-layout-cell u-size-36 u-image-1" data-image-width="1280" data-image-height="848"/>
            
        </div>
      </div>
    </div>

  </section>
  )
}
