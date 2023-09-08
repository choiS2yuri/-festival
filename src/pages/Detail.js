import React from 'react'
import { Map, MapMarker, Roadview } from 'react-kakao-maps-sdk';
import { useLocation } from 'react-router-dom'
import { styled } from 'styled-components';


function Detail() {

  const location = useLocation();
  const data = location.state;
  console.log(location);

  return (
    <>
    <div style={{width: "80%", border: "1px solid #ddd", margin: "20px auto"}}>
      <h3 style={{textAlign:"center", margin: "20px 0", fontWeight: "bold"}}>{data.TITLE}</h3>
      <div style={{width: "100%", textAlign:"center"}}>
        <img src={data.MAIN_IMG_NORMAL} alt={data.TITLE} title={data.TITLE} style={{border: "5px solid #ddd", marginBottom: "20px"}}/>
      </div>
      <div style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
        <Map center={
            {
              lat: data.LAT,
              lng: data.LNG
            }
          } style={{width: "50%", height: "360px"}}>
          <MapMarker position={
            {
            lat: data.LAT,
            lng: data.LNG
            }
          }>
            
          </MapMarker>
        </Map>

        <Roadview position={
            {
              lat: data.LAT,
              lng: data.LNG,
              radius: 50
            }
        } style={{width: "50%", height: "360px"}}>

        </Roadview>
      </div>
      <div style={{width:"50%", margin:"0 auto", marginTop: "50px"}}>
        <p style={{textAlign: "justify", lineHeight: 2 }}>{data.ITEMCNTNTS}</p>
      </div>
    </div>
    </>
  )
}

export default Detail