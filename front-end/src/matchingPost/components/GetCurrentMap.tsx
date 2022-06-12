const kakao = (window as any).kakao;

export default function GetCurrentMap(): void {
  var map: object = createMap();
  getCurrentPosition(map);
}

function createMap(): object {
  var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
  var options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };
  return new kakao.maps.Map(container, options);
}

function getCurrentPosition(map: any): void {
  if (navigator.geolocation) {
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude, // 위도
        lon = position.coords.longitude; // 경도

      var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

      // 마커를 표시합니다
      displayMarker(map, locPosition);
    });
  } else {
    // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    console.log("현재 위치를 찾을 수 없습니다");
    displayMarker(map, locPosition);
  }
}

function displayMarker(map: any, locPosition: string) {
  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    map: map,
    position: locPosition,
  });

  marker.setDraggable(true);

  kakao.maps.event.addListener(marker, "dragend", function () {
    // 지도의 중심좌표를 얻어옵니다
    var lat = marker.getPosition().getLat();
    var lon = marker.getPosition().getLng();

    console.log(`위도 : ${lat} 경도 : ${lon}`);
  });

  // console.log(locPosition);
  // console.log(marker.getPosition().getLat());

  // 지도 중심좌표를 접속위치로 변경합니다
  map.setCenter(locPosition);
}
