// 지도 초기화 및 OpenStreetMap 타일 추가
var map = L.map('map', {
    center: [37.6315, 127.0774],
    zoom: 16,
    minZoom: 16,
    maxZoom: 19
});

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

import { handleBuildingClick } from './buildingController.js'; // handleBuildingClick 가져오기
import { buildingDescriptions } from './buildingDescriptions.js'; // 건물 소개 데이터 가져오기

export function updateBuildingInfo(buildingName) {
    const infoContainer = document.getElementById("info-container");
    const description = buildingDescriptions[buildingName] || "No description available for this building.";
    infoContainer.querySelector("p").textContent = description;
}

// 하이테크관 테두리 추가
var highTechBuilding = L.polygon([
    [37.6323620, 127.0769686],
    [37.6324662, 127.0764924],
    [37.6325294, 127.0765144],
    [37.6325829, 127.0762701],
    [37.6317930, 127.0759945],
    [37.6317804, 127.0760520],
    [37.6316975, 127.0761074],
    [37.6315640, 127.0767175],
    [37.6317623, 127.0767867],
    [37.6318661, 127.0763121],
    [37.6322688, 127.0764526],
    [37.6321705, 127.0769061],
    [37.6323620, 127.0769686]
], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.2
}).addTo(map).bindPopup("하이테크관");

highTechBuilding.on('click', function() {
    handleBuildingClick("highTechBuilding");
});



// 100주년 기념관 테두리
var centennialBuilding = L.polygon([
    [37.6305389, 127.0777960],
    [37.6304807, 127.0781132],
    [37.6303637, 127.0787947],
    [37.6308211, 127.0789201],
    [37.6308652, 127.0785958],
    [37.6308818, 127.0785956],
    [37.6308834, 127.0784890],
    [37.6308662, 127.0784887],
    [37.6308270, 127.0782188],
    [37.6307898, 127.0782530],
    [37.6307912, 127.0783015],
    [37.6307637, 127.0783912],
    [37.6305915, 127.0783427],
    [37.6306635, 127.0779156]
], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.2
}).addTo(map).bindPopup("100주년 기념관");

// 미래관 테두리
var Mirae_Hall = L.polygon([
    [37.6297845, 127.0812884],
    [37.6296967, 127.0817586],
    [37.6293290, 127.0816422],
    [37.6293122, 127.0817413],
    [37.6290979, 127.0816899],
    [37.6290924, 127.0816212],
    [37.6289998, 127.0816179],
    [37.6290235, 127.0810866],
    [37.6291132, 127.0810866],
    [37.6291131, 127.0811428],
    [37.6291920, 127.0811465],
    [37.6292042, 127.0810592],
    [37.6293206, 127.0810901],
    [37.6292529, 127.0814643],
    [37.6295617, 127.0815608],
    [37.6295926, 127.0814181],
    [37.6295932, 127.0813268],
    [37.6295941, 127.0812569],
    [37.6296126, 127.0812256],
    [37.6296345, 127.0812104],
    [37.6297409, 127.0812584],
    [37.6297415, 127.0812793],
    [37.6297845, 127.0812884]
], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.2
}).addTo(map).bindPopup("미래관");

Mirae_Hall.on('click', function() {
    handleBuildingClick("Mirae_Hall");
});

// 테크노큐브 테두리
var TechnoCube = L.polygon([
    [37.6300431, 127.0797316],
    [37.6297769, 127.0796636],
    [37.6296920, 127.0801573],
    [37.6299593, 127.0802182],
], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.2
}).addTo(map).bindPopup("테크노큐브");

TechnoCube.on('click', function() {
    handleBuildingClick("TechnoCube");
});

// 상상관 테두리
var Sangsang_Hall = L.polygon([
    [37.6310283, 127.0809080],
    [37.6307617, 127.0808288],
    [37.6309125, 127.0799316],
    [37.6310498, 127.0799751],
    [37.6310654, 127.0800501],
    [37.6310686, 127.0801057]
], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.2
}).addTo(map).bindPopup("상상관");

Sangsang_Hall.on('click', function() {
    handleBuildingClick("Sangsang_Hall");
});

// 상상관 테두리
var Frontier_Hall = L.polygon([
    [37.6314836, 127.0765751],
    [37.6313271, 127.0765272],
    [37.6314024, 127.0761670],
    [37.6310842, 127.0760628],
    [37.6311385, 127.0758419],
    [37.6316058, 127.0760002]
], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.2
}).addTo(map).bindPopup("프론티어관");

Frontier_Hall.on('click', function() {
    handleBuildingClick("Frontier_Hall");
});

// 다산관 테두리
var Dasan_Hall = L.polygon([
    [37.6325900, 127.0786554],
    [37.6328206, 127.0776820],
    [37.6323339, 127.0774982],
    [37.6322294, 127.0779417],
    [37.6321532, 127.0778460],
    [37.6321089, 127.0780337],
    [37.6321996, 127.0780678],
    [37.6321049, 127.0784721]
], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.2
}).addTo(map).bindPopup("다산관");

Dasan_Hall.on('click', function() {
    handleBuildingClick("Dasan_Hall");
});

// 창학관 테두리
var Changhak_Hall = L.polygon([
    [37.6327523, 127.0791205],
    [37.6325168, 127.0801108],
    [37.6320295, 127.0799457],
    [37.6322718, 127.0789447]
], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.2
}).addTo(map).bindPopup("창학관");

Changhak_Hall.on('click', function() {
    handleBuildingClick("Changhak_Hall");
});

var Inner_Changhak_Hall = L.polygon([
    [37.6324538, 127.0798936],
    [37.6326084, 127.0792552],
    [37.6323244, 127.0791541],
    [37.6321681, 127.0797946]
], {
    color: 'red',
    fillColor: 'transparent',
    fillOpacity: 0
}).addTo(map).bindPopup("창학관");

Inner_Changhak_Hall.on('click', function() {
    handleBuildingClick("Changhak_Hall");
});