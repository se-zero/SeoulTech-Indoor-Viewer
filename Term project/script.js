// Leaflet 지도 초기화
var map = L.map('map', {
    center: [37.6315, 127.0774],
    zoom: 16,
    minZoom: 16,
    maxZoom: 19
});

// OpenStreetMap 타일 추가
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 지도 경계 설정
var bounds = L.latLngBounds(
    [37.6285, 127.0735],
    [37.6355, 127.0825]
);
map.setMaxBounds(bounds);

// 건물 마커 추가 예제 (건물 이름과 위치 설정)
var buildingMarker = L.marker([37.6315, 127.0774]).addTo(map);
buildingMarker.bindPopup("클릭하여 실내 뷰 확인");

// 마커 클릭 이벤트: Pannellum을 이용한 360도 실내 뷰 표시
buildingMarker.on('click', function() {
    pannellum.viewer('pannellum-viewer', {
        type: 'equirectangular',
        panorama: 'path_to_your_360_image.jpg', // 여기에 360도 이미지 경로 입력
        autoLoad: true
    });
});
