// 지도 초기화 및 OpenStreetMap 타일 추가
function initializeMap() {
    const map = L.map('map', {
        center: [37.6315, 127.0774],
        zoom: 16,
        minZoom: 16,
        maxZoom: 19
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const bounds = L.latLngBounds(
        [37.6285, 127.0735],
        [37.6355, 127.0825]
    );
    map.setMaxBounds(bounds);

    return map;
}

// 초기화 함수 호출
const map = initializeMap();

import { handleBuildingClick } from './buildingController.js'; // handleBuildingClick 가져오기



// 하이테크관 테두리 
const buildings = [
    // 학교 테두리
    {
        name: "Seoul_Tech",
        coordinates: [
        [37.6308286, 127.0753907],
        [37.6327085, 127.0760787],
        [37.6332693, 127.0762449],
        [37.6333532, 127.0760867],
        [37.6344939, 127.0764582],
        [37.6346659, 127.0763750],
        [37.6350079, 127.0752579],
        [37.6361655, 127.0755234],
        [37.6364761, 127.0759275],
        [37.6365277, 127.0761819],
        [37.6364607, 127.0764112],
        [37.6361278, 127.0766624],
        [37.6359664, 127.0768877],
        [37.6356918, 127.0773581],
        [37.6357258, 127.0777631],
        [37.6361995, 127.0792490],
        [37.6361788, 127.0797523],
        [37.6360402, 127.0801744],
        [37.6358703, 127.0806625],
        [37.6356987, 127.0809808],
        [37.6353860, 127.0813814],
        [37.6350121, 127.0817462],
        [37.6345172, 127.0821324],
        [37.6337440, 127.0826367],
        [37.6334488, 127.0828271],
        [37.6331811, 127.0829505],
        [37.6328774, 127.0830068],
        [37.6321743, 127.0829129],
        [37.6315923, 127.0828325],
        [37.6314871, 127.0828506], 
        [37.6313671, 127.0830001],
        [37.6309890, 127.0831141],
        [37.6309890, 127.0831141],
        [37.6310570, 127.0824744],
        [37.6310410, 127.0824261],
        [37.6310071, 127.0823912],
        [37.6300926, 127.0821083],
        [37.6297909, 127.0820197],
        [37.6288903, 127.0817623],
        [37.6284527, 127.0816670],
        [37.6282062, 127.0815772],
        [37.6282105, 127.0814900],
        [37.6285408, 127.0810810],
        [37.6285266, 127.0792160],
        [37.6284888, 127.0774814],
        [37.6292116, 127.0770057],
        [37.6298610, 127.0766245],
        [37.6299534, 127.0766084],
        [37.6300044, 127.0766325],
        [37.6300639, 127.0767090],
        [37.6301494, 127.0766613],
        [37.6302827, 127.0765802],
        [37.6302816, 127.0764904],
        [37.6302954, 127.0764273],
        [37.6303363, 127.0763542],
        [37.6306279, 127.0760961],
        [37.6307054, 127.0759083],
        [37.6307776, 127.0754738]
    ],
    color: 'gray', // 기본 테두리 색상
    fillColor: 'gray',
    fillOpacity: 0,
    alwaysVisible: true // hover 효과 적용
    },
    // 다산관 테두리(2) 
    {
        name: "Dasan_Hall",
        tooltipName: "다산관",
        coordinates: [
            [37.6325900, 127.0786554],
            [37.6328206, 127.0776820],
            [37.6323339, 127.0774982],
            [37.6322294, 127.0779417],
            [37.6321532, 127.0778460],
            [37.6321089, 127.0780337],
            [37.6321996, 127.0780678],
            [37.6321049, 127.0784721]
        ],
        color: 'red', // 기본 테두리 색상
        alwaysVisible: false // hover 효과 적용
    },
    // 창학관 테두리(3) 
    {
        name: "Changhak_Hall",
        tooltipName: "창학관",
        coordinates: [
            [37.6327523, 127.0791205],
            [37.6325168, 127.0801108],
            [37.6320295, 127.0799457],
            [37.6322718, 127.0789447]
        ],
        color: 'blue', // 기본 테두리 색상
        alwaysVisible: false // hover 효과 적용
    },
    // 프론티어관 테두리(32) 
    {
        name: "Frontier_Hall",
        tooltipName: "프론티어관",
        coordinates: [
            [37.6314836, 127.0765751],
            [37.6313271, 127.0765272],
            [37.6314024, 127.0761670],
            [37.6310842, 127.0760628],
            [37.6311385, 127.0758419],
            [37.6316058, 127.0760002]
        ],
        color: 'red', // 기본 테두리 색상
        alwaysVisible: false // hover 효과 적용
    },
    // 하이테크관 테두리(33) 
    {
        name: "Hi_Tech_Hall",
        tooltipName: "하이테크관",
        coordinates: [
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
        ],
        color: 'red', // 기본 테두리 색상
        alwaysVisible: false // hover 효과 적용
    },
    // 국제관 테두리(38)
    {
        name: "International_Hall",
        tooltipName: "국제관",
        coordinates: [
            [37.6348813, 127.0771873],
            [37.6347660, 127.0776671],
            [37.6353372, 127.0778670],
            [37.6353609, 127.0777596],
            [37.6353298, 127.0777479],
            [37.6353426, 127.0776949],
            [37.6352851, 127.0776735],
            [37.6352933, 127.0776393],
            [37.6349935, 127.0775256],
            [37.6350457, 127.0772882],
            [37.6349908, 127.0772703],
            [37.6349987, 127.0772296]
        ],
        color: 'red', // 기본 테두리 색상
        alwaysVisible: false // hover 효과 적용
    },
    //다빈치관 테두리(39)
    {
        name: "Davinch_Hall",
        tooltipName: "다빈치관",
        coordinates: [
            [37.6352657, 127.0782501],
            [37.6351105, 127.0789655],
            [37.6352023, 127.0789992],
            [37.6352394, 127.0788295],
            [37.6352996, 127.0788532],
            [37.6352705, 127.0789817],
            [37.6354932, 127.0790667],
            [37.6355580, 127.0788119],
            [37.6354277, 127.0787658],
            [37.6354760, 127.0785614],
            [37.6353843, 127.0785315],
            [37.6354342, 127.0783050]
        ],
        color: 'red', // 기본 테두리 색상
        alwaysVisible: false // hover 효과 적용
    },
    //어의관 테두리(40)
    {
        name: "Eoui_Hall",
        tooltipName: "어의관",
        coordinates: [
            [37.6357922, 127.0767958],
            [37.6357299, 127.0770125],
            [37.6348364, 127.0766788],
            [37.6349058, 127.0764499]
        ],
        color: 'red', // 기본 테두리 색상
        alwaysVisible: false // hover 효과 적용
    },
    // 100주년 기념관 테두리 (51)
    {
        name: "The_100th_Memorial_Hall",
        tooltipName: "백주년 기념관",
        coordinates: [
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
        ],
        color: 'blue', // 기본 테두리 색상
        alwaysVisible: false // hover 효과 적용
    },
    //2학생회관(52)
    {
        name: "Student_Union_Bldg2",
        tooltipName: "제2 학생회관",
        coordinates: [
            [37.6306327, 127.0789716],
            [37.6305554, 127.0794253],
            [37.6309146, 127.0794986],
            [37.6309462, 127.0793087],
            [37.6309204, 127.0793012],
            [37.6309444, 127.0791534],
            [37.6308342, 127.0791289],
            [37.6308515, 127.0790256]
        ],
        color: 'red', // 기본 테두리 색상
        alwaysVisible: false // hover 효과 적용
    },
    // 상상관 테두리(53)
    {
        name: "Sangsang_Hall",
        tooltipName: "상상관",
        coordinates: [
            [37.6310283, 127.0809080],
            [37.6307617, 127.0808288],
            [37.6309125, 127.0799316],
            [37.6310498, 127.0799751],
            [37.6310654, 127.0800501],
            [37.6310686, 127.0801057]
        ],
        color: 'blue', // 기본 테두리 색상
        alwaysVisible: false // hover 효과 적용
    },
    //무궁관 테두리(57)
    {
        name: "Mugung_Hall",
        tooltipName: "무궁관",
        coordinates: [
            [37.6307090, 127.0811898],
            [37.6305968, 127.0819245],
            [37.6307809, 127.0819673],
            [37.6308942, 127.0812341]
        ],
        color: 'red', // 기본 테두리 색상
        alwaysVisible: false // hover 효과 적용
    },
    // 미래관 테두리(60)
    {
        name: "Mirae_Hall",
        tooltipName: "미래관",
        coordinates: [
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
        ],
        color: 'red', // 기본 테두리 색상
        alwaysVisible: false // hover 효과 적용
    },
    // 테크노큐브 테두리(62)
    {
        name: "Techno_Cube",
        tooltipName: "테크노큐브",
        coordinates: [
            [37.6300431, 127.0797316],
            [37.6297769, 127.0796636],
            [37.6296920, 127.0801573],
            [37.6299593, 127.0802182],
        ],
        color: 'red', // 기본 테두리 색상
        alwaysVisible: false // hover 효과 적용
    }
]


// // 창학관 내부 테두리
// var Inner_Changhak_Hall = L.polygon([
//     [37.6324538, 127.0798936],
//     [37.6326084, 127.0792552],
//     [37.6323244, 127.0791541],
//     [37.6321681, 127.0797946]
// ], {
//     color: 'red',
//     fillColor: 'transparent',
//     fillOpacity: 0
// }).addTo(map).bindPopup("창학관");

// Inner_Changhak_Hall.on('click', function() {
//     handleBuildingClick("Changhak_Hall");
// });


// 공통 hover 효과 적용 함수
function applyHoverEffect(layer, building) {
    if (building.alwaysVisible) {
        // 항상 테두리가 표시되도록 기본 스타일 설정
        layer.setStyle({
            color: building.color,
            weight: 2
        });
        return;
    }

    // 건물의 테두리 좌표를 가져오기
    const coordinates = building.coordinates;
    const topmostCoordinate = coordinates.reduce((topmost, coord) => {
        return coord[0] > topmost[0] ? coord : topmost; // 위도가 가장 큰 좌표 찾기
    }, coordinates[0]);
     
    // 마우스를 올릴 때
    layer.on('mouseover', function () {
        layer.setStyle({
            color: building.color, // 건물별 색상 적용
            fillColor:building.color,
            weight: 3 // 테두리 두께
        });

        // 툴팁을 가장 위쪽 좌표로 이동
        layer.bindTooltip(building.tooltipName, {
            permanent: false,
            direction: 'top',
            offset: L.point(8, -5), // 툴팁 위치 미세 조정
            className: 'custom-tooltip'
        });

        // 툴팁의 위치를 최상단 좌표로 설정
        layer.openTooltip(L.latLng(topmostCoordinate));
    });

    // 마우스를 벗어날 때
    layer.on('mouseout', function () {
        layer.setStyle({
            color: 'transparent', // 테두리 숨기기
            fillColor:'transparent',
            weight: 0 // 테두리 두께 제거
        });
        layer.unbindTooltip(); // 툴팁 제거
    });

    
}

// 반복문으로 건물 추가
buildings.forEach(building => {
    const buildingLayer = L.polygon(building.coordinates, {
        color: building.alwaysVisible ? building.color : 'transparent', // 기본 테두리 설정
        fillColor: building.fillColor || 'transparent',
        fillOpacity: building.fillOpacity || 0.2
    }).addTo(map);

    // 클릭 이벤트 등록
    buildingLayer.on('click', function () {
        handleBuildingClick(building.name);
    });

    // hover 효과 적용
    applyHoverEffect(buildingLayer, building);
});