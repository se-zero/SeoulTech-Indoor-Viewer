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
    Dasan_Hall: {
        1: {
            firstScene: 'Dasan_Hall/Dasan_1-1.jpg',  
            scenes: [
                {
                    image: 'Dasan_Hall/Dasan_1-1.jpg',
                    nextScenes: [
                        { sceneId: 'scene2', pitch: 5, yaw: -92 },
                        { sceneId: 'scene5', pitch: -18, yaw: 125 }
                    ]
                },
                {
                    image: 'Dasan_Hall/Dasan_1-2.jpg',
                    nextScenes: [
                        { sceneId: 'scene1', pitch: 0, yaw: -102 },
                        { sceneId: 'scene3', pitch: 0, yaw: 7 }
                    ]
                },
                {
                    image: 'Dasan_Hall/Dasan_1-3.jpg',
                    nextScenes: [
                        { sceneId: 'scene2', pitch: 0, yaw: -17 },
                        { sceneId: 'scene4', pitch: -2, yaw: 95 }
                    ]
                },
                {
                    image: 'Dasan_Hall/Dasan_1-4.jpg',
                    nextScenes: [
                        { sceneId: 'scene3', pitch: 5, yaw: -38 },
                        { sceneId: 'scene5', pitch: 5, yaw: 75 }
                    ]
                },
                {
                    image: 'Dasan_Hall/Dasan_1-5.jpg',
                    nextScenes: [
                        { sceneId: 'scene4', pitch: 5, yaw: -38 }, 
                        { sceneId: 'scene1', pitch: -15, yaw: 75 }
                    ]
                }
            ]
        },
        2: {
            firstScene: 'Dasan_Hall/Dasan_2-1.jpg',
            scenes: [
                {
                    image: 'Dasan_Hall/Dasan_2-1.jpg',
                    nextScenes: [
                        { sceneId: 'scene2', pitch: 4, yaw: 118 },
                        { sceneId: 'scene5', pitch: 5, yaw: -108 }
                    ]
                },
                {
                    image: 'Dasan_Hall/Dasan_2-2-1.jpg',
                    nextScenes: [
                        { sceneId: 'scene1', pitch: -5, yaw: -82 },
                        { sceneId: 'scene3', pitch: -5, yaw: 43 }
                    ]
                },
                {
                    image: 'Dasan_Hall/Dasan_2-3.jpg',
                    nextScenes: [
                        { sceneId: 'scene2', pitch: 10, yaw: -60 },
                        { sceneId: 'scene4', pitch: 10, yaw: 53 }
                    ]
                },
                {
                    image: 'Dasan_Hall/Dasan_2-4.jpg',
                    nextScenes: [
                        { sceneId: 'scene3', pitch: -10, yaw: -88 }, 
                        { sceneId: 'scene5', pitch: -15, yaw: 25 } 
                    ]
                },
                {
                    image: 'Dasan_Hall/Dasan_2-5.jpg',
                    nextScenes: [
                        { sceneId: 'scene4', pitch: 0, yaw: -100 },
                        { sceneId: 'scene1', pitch: -2, yaw: 0 }
                    ]
                }
            ]
        },
        3: {
            firstScene: 'Dasan_Hall/Dasan_3-1.jpg', // 3층 2 3 4 5 다시찍기
            scenes: [
                {
                    image: 'Dasan_Hall/Dasan_3-1.jpg',
                    nextScenes: [
                        { sceneId: 'scene2', pitch: 0, yaw: 110 },
                        { sceneId: 'scene5', pitch: 5, yaw: -115 }
                    ]
                },
                {
                    image: 'Dasan_Hall/Dasan_2-2-1.jpg',  
                    nextScenes: [
                        { sceneId: 'scene2', pitch: -5, yaw: -82 },
                        { sceneId: 'scene4', pitch: -5, yaw: 43 }
                    ]
                },
                {
                    image: 'Dasan_Hall/Dasan_1-2.jpg', 
                    nextScenes: [
                        { sceneId: 'scene2', pitch: -15, yaw: 88 },
                        { sceneId: 'scene4', pitch: -10, yaw: -88 }
                    ]
                },
                {
                    image: 'Dasan_Hall/Dasan_1-3.jpg',  
                    nextScenes: [
                        { sceneId: 'scene3', pitch: -15, yaw: 88 },
                        { sceneId: 'scene5', pitch: -10, yaw: -88 }
                    ]
                },
                {
                    image: 'Dasan_Hall/Dasan_1-4.jpg',  
                    nextScenes: [
                        { sceneId: 'scene4', pitch: -15, yaw: 88 },
                        { sceneId: 'scene1', pitch: -10, yaw: -88 }
                    ]
                }
            ]
        }
        
    },
    Frontier_Hall: {
        1: {
            firstScene: 'Frontier_Hall/Frontier_1.jpg',
            scenes: [
                {
                    image: 'Frontier_Hall/Frontier_1.jpg',
                    nextScenes: []
                }
            ]
        },
        2: {
            firstScene: 'Frontier_Hall/Frontier_2-1.jpg',  
            scenes: [
                {
                    image: 'Frontier_Hall/Frontier_2-1.jpg', 
                    nextScenes: [
                        { sceneId: 'scene2', pitch: -15, yaw: 5 }
                    ]
                },
                {
                    image: 'Frontier_Hall/Frontier_2-2.jpg',
                    nextScenes: [
                        { sceneId: 'scene1', pitch: 9, yaw: -100 }
                    ]
                }
            ]
        },
        3: {
            firstScene: 'Frontier_Hall/Frontier_3-1.jpg',  
            scenes: [
                {
                    image: 'Frontier_Hall/Frontier_3-1.jpg', 
                    nextScenes: [
                        { sceneId: 'scene2', pitch: 0, yaw: 5 }
                    ]
                },
                {
                    image: 'Frontier_Hall/Frontier_3-2.jpg',
                    nextScenes: [
                        { sceneId: 'scene1', pitch: 9, yaw: -100 }
                    ]
                }
            ]
        },
        4: {
            firstScene: 'Frontier_Hall/Frontier_4.jpg', //다시찍기(안해도 그만)
            scenes: [
                {
                    image: 'Frontier_Hall/Frontier_4.jpg', 
                    nextScenes: []
                }
            ]
        },
        5: {
            firstScene: 'Frontier_Hall/Frontier_5.jpg',
            scenes: [
                {
                    image: 'Frontier_Hall/Frontier_5.jpg', 
                    nextScenes: []
                }
            ]
        },
        6: {
            firstScene: 'Frontier_Hall/Frontier_6.jpg',
            scenes: [
                {
                    image: 'Frontier_Hall/Frontier_6.jpg', 
                    nextScenes: []
                }
            ]
        },
        7: {
            firstScene: 'Frontier_Hall/Frontier_7.jpg',
            scenes: [
                {
                    image: 'Frontier_Hall/Frontier_7.jpg', 
                    nextScenes: []
                }
            ]
        },
        8: {
            firstScene: 'Frontier_Hall/Frontier_8.jpg',
            scenes: [
                {
                    image: 'Frontier_Hall/Frontier_8.jpg', 
                    nextScenes: []
                }
            ]
        },
        9: {
            firstScene: 'Frontier_Hall/Frontier_9.jpg',
            scenes: [
                {
                    image: 'Frontier_Hall/Frontier_9.jpg', 
                    nextScenes: []
                }
            ]
        },
        10: {
            firstScene: 'Frontier_Hall/Frontier_10.jpg',
            scenes: [
                {
                    image: 'Frontier_Hall/Frontier_10.jpg', 
                    nextScenes: []
                }
            ]
        },
    },
    Hi_Tech_Hall: {
        1: {
            firstScene: 'Hi_Tech_Hall/Hi_Tech_1-1.jpg',
            scenes: [
                {
                    image: 'Hi_Tech_Hall/Hi_Tech_1-1.jpg',
                    nextScenes: [
                        { sceneId: 'scene2', pitch: 0, yaw: 30 },
                        { sceneId: 'scene3', pitch: 0, yaw: 15 }
                    ]
                },
                {
                    image: 'Hi_Tech_Hall/Hi_Tech_1-2.jpg',
                    nextScenes: [
                        { sceneId: 'scene1', pitch: -12, yaw: 80 }
                    ]
                },
                {
                    image: 'Hi_Tech_Hall/Hi_Tech_1-3.jpg',
                    nextScenes: [
                        { sceneId: 'scene1', pitch: 5, yaw: -120 },
                    ]
                }
            ]
        },
        2: {
            firstScene: 'Hi_Tech_Hall/Hi_Tech_2-1.jpg',  
            scenes: [
                {
                    image: 'Hi_Tech_Hall/Hi_Tech_2-1.jpg',
                    nextScenes: [
                        { sceneId: 'scene2', pitch: 5, yaw: -128 },
                        { sceneId: 'scene3', pitch: -5, yaw: 98 }
                    ]
                },
                {
                    image: 'Hi_Tech_Hall/Hi_Tech_2-2.jpg',
                    nextScenes: [
                        { sceneId: 'scene1', pitch: 8, yaw: -3 }
                    ]
                },
                {
                    image: 'Hi_Tech_Hall/Hi_Tech_2-3.jpg',
                    nextScenes: [
                        { sceneId: 'scene1', pitch: -10, yaw: -55 },
                    ]
                }
            ]
        }
    },
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
                    image: 'Mirae_Hall/Mirae1-2.jpg', 
                    nextScenes: [
                        { sceneId: 'scene1', pitch: -15, yaw: -5 }
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
    },
    Techno_Cube: {
        1: { 
            firstScene: 'Techno_Cube/Techno_1.jpg',
            scenes: [
                {
                    image: 'Techno_Cube/Techno_1.jpg',
                    nextScenes :[]
                }
            ]
        },
        2: { 
            firstScene: 'Techno_Cube/Techno_2.jpg',
            scenes: [
                {
                    image: 'Techno_Cube/Techno_2.jpg',
                    nextScenes :[]
                }
            ]
        },
        3: { 
            firstScene: 'Techno_Cube/Techno_3.jpg',
            scenes: [
                {
                    image: 'Techno_Cube/Techno_3.jpg',
                    nextScenes :[]
                }
            ]
        },
        4: { 
            firstScene: 'Techno_Cube/Techno_4.jpg',
            scenes: [
                {
                    image: 'Techno_Cube/Techno_4.jpg',
                    nextScenes :[]
                }
            ]
        },
        5: { 
            firstScene: 'Techno_Cube/Techno_5.jpg',
            scenes: [
                {
                    image: 'Techno_Cube/Techno_5.jpg',
                    nextScenes :[]
                }
            ]
        },
        6: { 
            firstScene: 'Techno_Cube/Techno_6.jpg',
            scenes: [
                {
                    image: 'Techno_Cube/Techno_6.jpg',
                    nextScenes :[]
                }
            ]
        },
        7: { 
            firstScene: 'Techno_Cube/Techno_7.jpg',
            scenes: [
                {
                    image: 'Techno_Cube/Techno_7.jpg',
                    nextScenes :[]
                }
            ]
        },
        8: { 
            firstScene: 'Techno_Cube/Techno_8.jpg',
            scenes: [
                {
                    image: 'Techno_Cube/Techno_8.jpg',
                    nextScenes :[]
                }
            ]
        },
        9: { 
            firstScene: 'Techno_Cube/Techno_9.jpg',
            scenes: [
                {
                    image: 'Techno_Cube/Techno_9.jpg',
                    nextScenes :[]
                }
            ]
        },
        10: { 
            firstScene: 'Techno_Cube/Techno_10.jpg',
            scenes: [
                {
                    image: 'Techno_Cube/Techno_10.jpg',
                    nextScenes :[]
                }
            ]
        },
        11: { 
            firstScene: 'Techno_Cube/Techno_11.jpg',
            scenes: [
                {
                    image: 'Techno_Cube/Techno_11.jpg',
                    nextScenes :[]
                }
            ]
        },
        12: { 
            firstScene: 'Techno_Cube/Techno_12.jpg',
            scenes: [
                {
                    image: 'Techno_Cube/Techno_12.jpg',
                    nextScenes :[]
                }
            ]
        }
    }
          
};
