import { showBuildingFloors } from './sidebar.js'; // 사이드바 층수 표시 함수 가져오기
import { showBuildingFloorView } from './roadview.js'; // 로드뷰 표시 함수 가져오기
import { updateBuildingInfo } from './buildingDescriptions.js'; // 건물 정보 업데이트 함수 가져오기

// 건물을 클릭했을 때 호출되는 함수
export function handleBuildingClick(buildingName) {
    // 1. 사이드바 층수 표시
    showBuildingFloors(buildingName);

    // 2. 건물 소개글 업데이트
    updateBuildingInfo(buildingName);

    // 3. 기본적으로 1층 로드뷰 표시
    showBuildingFloorView(buildingName, 1);
}
