import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { styled } from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'
import {ko} from 'date-fns/esm/locale'
import {addDays, subDays} from 'date-fns'

const StyleDate = styled(DatePicker)`
    border: 1px solid #ddd;
    background-color: lightcoral;
    width: 300px;
`
const {kakao} = window;

function Datepicker() {
    
    useEffect(()=>{
        var container = document.getElementById('map'); 
        var options = { 
        center: new kakao.maps.LatLng(35.8500153, 128.587487), 
        level: 3
        };

        var map = new kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(35.8500153, 128.587487); 

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    var roadviewContainer = document.getElementById('roadview'); //로드뷰를 표시할 div
    var roadview = new kakao.maps.Roadview(roadviewContainer); //로드뷰 객체
    var roadviewClient = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체

    var position = new kakao.maps.LatLng(35.8500153, 128.587487);

    // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
    roadviewClient.getNearestPanoId(position, 50, function(panoId) {
        roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
    });

    },[])
    

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

  return (
    <>
        <StyleDate 
            locale={ko}
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(date)=>setDateRange(date)}
            dateFormat="yyyy년 MM월 dd"

            minDate={subDays(new Date(), 0)}
            maxDate={addDays(new Date(), 300)}
            monthsShown={5}
        />
        <div id="map" style={{width: "500px",height: "500px"}}></div>
        <div id="roadview" style={{width: "500px",height: "500px"}}></div>
    </>
  )
}

export default Datepicker