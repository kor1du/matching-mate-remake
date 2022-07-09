import axios from "axios";
import { setPosition } from "../../redux/MatchingPostRedux";

export interface Position {
  lat: number;
  lng: number;
}

const kakao = (window as any).kakao;

export default async function GetMap(setAddress: any, dispatch: any) {
  const map: any = createMap(); /* 맵 생성 */
  const coordinate: Position = await getCoordinate(dispatch); /* 현재 좌표 */
  const marker: any = createMarker(map, coordinate); /* 마커 생성 */
  getAddress(coordinate, setAddress); /* 초기 주소 설정 */
  addMarkerDragEvent(marker, setAddress, dispatch); /* 마커 이동시 실시간 위치 조회 */
}

/* 화면에 보일 지도 생성 */
function createMap(): object {
  var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
  var options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };
  return new kakao.maps.Map(container, options);
}

/* 현재 위치 저장 */
export function getCoordinate(dispatch: any): any {
  return new Promise((resolve) => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        const coordinate: Position = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        dispatch(setPosition(coordinate));
        resolve(coordinate);
      });
    } else {
      console.log("navigator를 사용할 수 없습니다.");
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      const coordinate: Position = {
        lat: 33.450701,
        lng: 126.570667,
      };
      resolve(coordinate);
    }
  }).then((res: any) => {
    return res;
  });
}

/* 마커 생성 */
function createMarker(map: any, coordinate: Position): any {
  /* 구글 좌표를 카카오맵에 필요한 좌표로 변환 */
  let locPosition = new kakao.maps.LatLng(coordinate.lat, coordinate.lng);
  /* 마커 생성 */
  let marker = new kakao.maps.Marker({
    map: map,
    position: locPosition,
  });

  map.setCenter(locPosition);

  return marker;
}

/* 실시간 위치 조회 */
function getAddress(position: Position, setAddress: any): void {
  axios
    .get("https://api.matching-mate.com/address", {
      params: {
        lat: position.lat,
        lng: position.lng,
      },
    })
    .then((res) => {
      setAddress(res.data.data);
    });
}

/* 마커 드래그 이벤트 추가 (실시간 위치 조회)*/
function addMarkerDragEvent(marker: any, setAddress: any, dispatch: any): void {
  marker.setDraggable(true);

  kakao.maps.event.addListener(marker, "dragend", async function () {
    // 지도의 중심좌표를 얻어옵니다
    const position: Position = {
      lat: marker.getPosition().getLat(),
      lng: marker.getPosition().getLng(),
    };

    dispatch(setPosition(position));

    getAddress(position, setAddress);
  });
}
