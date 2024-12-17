import { showBuildingFloors } from './sidebar.js';
import { showBuildingFloorView, showStaticBuildingImage,buildingFloorScenes } from './roadview.js';
import { updateBuildingInfo } from './buildingDescriptions.js';

export function handleBuildingClick(buildingName) {
    const buildingData = buildingFloorScenes[buildingName];
    
    if (!buildingData) {
        console.error(`Building data not found: ${buildingName}`);
        return;
    }

    // 건물 정보 업데이트
    updateBuildingInfo(buildingName);

    if (buildingData.type === 'static') {
        showStaticBuildingImage(buildingData.image);
        showBuildingFloors('default');
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.remove("open");
    } else if (buildingData.type === 'pannellum') {
        showBuildingFloors(buildingName);
        showBuildingFloorView(buildingName, 1); // 기본적으로 1층 로드뷰 표시
    }
}
