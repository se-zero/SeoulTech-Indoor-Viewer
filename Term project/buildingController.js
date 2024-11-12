// 건물을 클릭했을 때 호출되는 함수
function handleBuildingClick(buildingName) {
    // 사이드바에 해당 건물의 층수 표시
    showBuildingFloors(buildingName);

    // 기본으로 1층 로드뷰 표시
    showFloorView(buildingName, 1); // 1층을 기본 로드뷰로 설정
}


