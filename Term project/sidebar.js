// 사이드바 높이를 main-content 높이와 맞추기
function adjustSidebarHeight() {
    const mainContent = document.getElementById("main-content");
    const sidebar = document.getElementById("sidebar");
    if (mainContent && sidebar) {
        sidebar.style.height = mainContent.offsetHeight + "px";
    }
}

// 초기 로드 및 창 크기 변경 시 높이 맞추기
document.addEventListener("DOMContentLoaded", adjustSidebarHeight);
window.addEventListener("resize", adjustSidebarHeight);

// 사이드바 열고 닫기 기능을 `sidebar-toggle` 버튼에만 적용
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open"); // 사이드바 숨기기
    } else {
        sidebar.classList.add("open"); // 사이드바 표시
    }
}

const buildingFloors = {
    highTechBuilding: [1, 2, 3, 4, 5],
    futureBuilding: [1, 2, 3, 4, 5, 6],
    // 필요한 다른 건물 추가
};

// 사이드바에 층수 표시 (사이드바를 항상 나타나게 설정)
function showBuildingFloors(buildingName) {
    const sidebar = document.getElementById("sidebar");

    // 존재하지 않는 건물 이름이 들어왔을 경우 처리
    if (!buildingFloors[buildingName]) {
        console.error(`Building ${buildingName} is not defined in buildingFloors.`);
        return;
    }

    // 기존 사이드바 내용을 지워 중복 생성 방지
    sidebar.innerHTML = "<h2>건물 층수</h2>"; 

    // 해당 건물의 층수만큼 버튼을 생성
    const floors = buildingFloors[buildingName];
    floors.forEach(floor => {
        const floorButton = document.createElement("div");
        floorButton.className = "floor-button";
        floorButton.textContent = floor + "층";
        floorButton.onclick = function() {
            // 각 층 클릭 시 해당 층의 로드뷰를 표시하는 함수 호출
            showFloorView(buildingName, floor);
        };
        sidebar.appendChild(floorButton);
    });

    // 사이드바를 표시하고 열기 상태로 설정 (항상 표시)
    sidebar.classList.add("open");
}

// 건물과 층에 따라 로드뷰를 표시하는 함수 (로드뷰 로직은 roadview.js에 정의)
function showFloorView(buildingName, floor) {
    // 로드뷰와 연동하기 위한 로직을 여기에 추가할 수 있습니다.
    console.log(`Show road view for ${buildingName}, Floor: ${floor}`);
}
