// 하이테크관 클릭 이벤트: Pannellum을 이용한 360도 실내 뷰 표시
function showHighTechBuildingView() {
    pannellum.viewer('pannellum-viewer', {
        type: 'equirectangular',
        panorama: 'path_to_your_360_image.jpg', // 여기에 360도 이미지 경로 입력
        autoLoad: true,
        hfov: 100, // 기본 수평 시야각, 필요에 따라 조정
        minHfov: 70, // 최소 줌
        maxHfov: 120 // 최대 줌
    });
}

// 미래관 클릭 이벤트: Pannellum을 이용해 실내 로드뷰 표시
function showFutureBuildingView() {
    pannellum.viewer('pannellum-viewer', {
        default: {
            firstScene: 'firstScene'    // 초기 장면을 명시적으로 설정
        },
        scenes: {
            'firstScene': {
                type: 'equirectangular',
                panorama: '미래관5층-1.jpg', // 첫 번째 파노라마 이미지 경로
                hfov: 50,
                minHfov: 70,
                maxHfov: 120,
                pitch: 0,
                yaw: 0,
                hotSpots: [
                    {
                        pitch: -15,            // 화살표 위치 (수직)
                        yaw: 88,             // 화살표 위치 (수평)
                        type: 'scene',       // 장면 전환 타입
                        text: 'Next View',   // 설명 텍스트
                        sceneId: 'secondScene' // 두 번째 파노라마 ID로 이동
                    }
                ]
            },
            'secondScene': {
                type: 'equirectangular',
                panorama: '미래관5층-2.jpg', // 두 번째 파노라마 이미지 경로
                hfov: 50,
                minHfov: 70,
                maxHfov: 120,
                pitch: 0,
                yaw: 0,
                hotSpots: [
                    {
                        pitch: 0,            // 화살표 위치 (수직)
                        yaw: 28,            // 다른 방향에 화살표 배치
                        type: 'scene',       // 장면 전환 타입
                        text: 'Previous View', // 설명 텍스트
                        sceneId: 'firstScene'  // 첫 번째 파노라마 ID로 돌아감
                    }
                ]
            }
        }
    });
}
