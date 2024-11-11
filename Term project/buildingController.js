// 건물을 클릭했을 때 호출되는 함수
function handleBuildingClick(buildingName) {
    // 사이드바에 층수 표시
    showBuildingFloors(buildingName); 

    // 기본 층 로드뷰 표시 (1층부터 시작, 필요 시 수정 가능)
    if (buildingName === "highTechBuilding") {
        showHighTechBuildingFloorView(1);
    } else if (buildingName === "futureBuilding") {
        showFutureBuildingFloorView(1);
    }
}
