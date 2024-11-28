import { showBuildingFloorView } from './roadview.js'; // 로드뷰 표시 함수 가져오기

// 사이드바 열고 닫기 기능을 `sidebar-toggle` 버튼에만 적용
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");

    // 열릴 때 크기 다시 설정
    if (!sidebar.classList.contains("open")) {
        adjustSidebarDimensions();
    }

    // 사이드바 열기/닫기 상태 전환
    sidebar.classList.toggle("open");
}

// 이벤트 리스너로 연결
document.querySelector('.sidebar-toggle').addEventListener('click', toggleSidebar);

function adjustSidebarDimensions() {
    const mainContent = document.getElementById("main-content");
    const sidebar = document.getElementById("sidebar");

    // main-content 높이 계산
    const partialHeight = (mainContent.offsetHeight * 9) / 10;


    // body와 main-content 너비 차이를 계산
    const bodyWidth = document.body.offsetWidth;
    const mainContentWidth = mainContent.offsetWidth;
    const remainingWidth = (bodyWidth - mainContentWidth)/2;

    // 사이드바 크기 설정
    sidebar.style.height = `${partialHeight}px`;
    sidebar.style.width = `${remainingWidth}px`;
}

// 초기화 함수 실행
window.onload = function () {
    adjustSidebarDimensions(); // 처음 로드 시 사이드바 크기 설정
};

// 창 크기 변경 시 동기화
window.addEventListener("resize", adjustSidebarDimensions);



const buildingFloors = {
    Dasan_Hall: [1,2,3],
    Changhak_Hall: [1,2,3],
    Chungun_Hall: [1,2,3],
    Frontier_Hall: [1,2,3,4,5,6,7,8,9,10],
    Hi_Tech_Hall: [1, 2],
    International_Hall: [1,2,3,4,5],
    Davinch_Hall: ['B1',1,2,3,4,5,6,7],
    Eoui_Hall: [1,2,3,4,5,6],
    The_100th_Memorial_Hall:[1],
    Student_Union_Bldg2: [1,2,3],
    Sangsang_Hall: [1,2,3],
    Areum_Hall:[1],
    Mugung_Hall: [1,2,3,4,5,6,7,8,9],
    Mirae_Hall: ['B1',1, 2, 3, 4, 5],
    Techno_Cube: [1,2,3,4,5,6,7,8,9,10,11,12]
    // 필요한 다른 건물 추가
};

// 사이드바에 층수 표시 (사이드바를 항상 나타나게 설정)
export function showBuildingFloors(buildingName) {
    const sidebar = document.getElementById("sidebar");

    // 존재하지 않는 건물 이름이 들어왔을 경우 처리
    if (!buildingFloors[buildingName]) {
        console.error(`Building ${buildingName} is not defined in buildingFloors.`);
        return;
    }

    // 기존 사이드바 내용을 지워 중복 생성 방지
    sidebar.innerHTML = `
        <h4 style="text-align: center; position: sticky; top: 0; background-color: #333; z-index: 1;">층</h4>
        <div class="floor-list"></div>
    `;

    // 층수 버튼을 생성할 영역 선택
    const floorList = sidebar.querySelector(".floor-list");

    // 해당 건물의 층수만큼 버튼을 생성
    const floors = buildingFloors[buildingName];
    floors.forEach(floor => {
        const floorButton = document.createElement("div");
        floorButton.className = "floor-button";
        floorButton.textContent = floor;
        floorButton.onclick = function () {
            // 각 층 클릭 시 해당 층의 로드뷰를 표시하는 함수 호출
            showBuildingFloorView(buildingName, floor);
        };
        floorList.appendChild(floorButton);
    });
    // 사이드바를 표시하고 열기 상태로 설정 (항상 표시)
    sidebar.classList.add("open");
}


