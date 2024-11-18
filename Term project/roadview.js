// 동적으로 로드뷰 설정 및 장면 이동 기능 추가
export function showBuildingFloorView(buildingName, floor) {
    const viewerElement = document.getElementById('pannellum-viewer');
    
    // 기존 뷰어 인스턴스를 제거
    if (viewerElement.viewerInstance) {
        viewerElement.viewerInstance.destroy();
    }

    const floorScenes = buildingFloorScenes[buildingName]?.[floor];
    if (!floorScenes) {
        console.error(`로드뷰 장면 정보가 없습니다: ${buildingName} - ${floor}층`);
        return;
    }

    // 초기화할 장면 설정
    const firstSceneId = 'scene1';

    // 각 장면에 다중 핫스팟 추가
    const scenes = floorScenes.scenes.reduce((acc, scene, index) => {
        acc[`scene${index + 1}`] = {
            type: 'equirectangular',
            panorama: scene.image,
            hotSpots: scene.nextScenes.map(nextScene => ({
                pitch: nextScene.pitch,
                yaw: nextScene.yaw,
                type: 'scene',
                text: '이동',
                sceneId: nextScene.sceneId,
                cssClass: "custom-hotspot"
            }))
        };
        return acc;
    }, {});

       // Pannellum 뷰어를 새로 초기화
       viewerElement.viewerInstance = pannellum.viewer(viewerElement, {
        default: {
            firstScene: firstSceneId
        },
        scenes: scenes,
        autoLoad: true,
        hfov: 100,
        minHfov: 70,
        maxHfov: 120
    });
}


// 로드뷰 이미지 및 장면 간 이동 경로 객체
const buildingFloorScenes = {
    highTechBuilding: {
        1: {
            firstScene: 'highTechBuilding_floor1_scene1.jpg',
            scenes: [
                { image: 'highTechBuilding_floor1_scene1.jpg', nextScene: 'scene2' },
                { image: 'highTechBuilding_floor1_scene2.jpg', nextScene: 'scene3' },
                { image: 'highTechBuilding_floor1_scene3.jpg', nextScene: 'scene1' },
            ]
        },
        2: {
            firstScene: 'highTechBuilding_floor2_scene1.jpg',
            scenes: [
                { image: 'highTechBuilding_floor2_scene1.jpg', nextScene: 'scene2' },
                { image: 'highTechBuilding_floor2_scene2.jpg', nextScene: 'scene1' },
            ]
        },
        // 추가 층
    },
    Mirae_Hall: {
        B1: { 
            firstScene: 'Mirae_Hall/MiraeB1.jpg',
            scenes: [
                {
                    image: 'Mirae_Hall/MiraeB1.jpg',
                    nextScenes :[]
                }
            ]
        },
        1: {
            firstScene: 'Mirae_Hall/Mirae1-1.jpg', // 벽에 붙어서 다시찍기
            scenes: [
                {
                    image: 'Mirae_Hall/Mirae1-1.jpg', 
                    nextScenes: [
                        { sceneId: 'scene2', pitch: -15, yaw: 88 },
                        { sceneId: 'scene3', pitch: -10, yaw: -88 }
                    ]
                },
                {
                    image: 'Mirae_Hall/Mirae1-2.jpg', // 벽에 붙어서 다시찍기
                    nextScenes: [
                        { sceneId: 'scene1', pitch: 0, yaw: 28 }
                    ]
                },
                {
                    image: 'Mirae_Hall/Mirae1-3.jpg', // 벽에 붙어서 다시찍기
                    nextScenes: [
                        { sceneId: 'scene1', pitch: 0, yaw: 28 }
                    ]
                }
            ]
        },
        2: {
            firstScene: 'Mirae_Hall/Mirae2-1.jpg', 
            scenes: [
                {
                    image: 'Mirae_Hall/Mirae2-1.jpg', 
                    nextScenes: [
                        { sceneId: 'scene2', pitch: -1, yaw: 7 }
                    ]
                },
                {
                    image: 'Mirae_Hall/Mirae2-2.jpg', // 벽에 붙어서 다시찍기
                    nextScenes: [
                        { sceneId: 'scene1', pitch: 0, yaw: 28 }
                    ]
                }
            ]
        },
        3: {
            firstScene: 'Mirae_Hall/Mirae3-1.jpg', 
            scenes: [
                {
                    image: 'Mirae_Hall/Mirae3-1.jpg', 
                    nextScenes: [
                        { sceneId: 'scene2', pitch: 0, yaw: 84 }
                    ]
                },
                {
                    image: 'Mirae_Hall/Mirae3-2.jpg', 
                    nextScenes: [
                        { sceneId: 'scene1', pitch: 7, yaw: 10 }
                    ]
                }
            ]
        },
        4: {
            firstScene: 'Mirae_Hall/Mirae4-1.jpg', 
            scenes: [
                {
                    image: 'Mirae_Hall/Mirae4-1.jpg', 
                    nextScenes: [
                        { sceneId: 'scene2', pitch: 0, yaw: 85 }
                    ]
                },
                {
                    image: 'Mirae_Hall/Mirae4-2.jpg', 
                    nextScenes: [
                        { sceneId: 'scene1', pitch: 12, yaw: 28 }
                    ]
                }
            ]
        },
        5: {
            firstScene: 'Mirae_Hall/Mirae5-1.jpg', 
            scenes: [
                {
                    image: 'Mirae_Hall/Mirae5-1.jpg', 
                    nextScenes: [
                        { sceneId: 'scene2', pitch: -15, yaw: 88 }
                    ]
                },
                {
                    image: 'Mirae_Hall/Mirae5-2.jpg', 
                    nextScenes: [
                        { sceneId: 'scene1', pitch: 0, yaw: 28 }
                    ]
                }
            ]
        }
    }
    // 다른 건물 추가 가능
};

