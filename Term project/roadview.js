// 기본 이미지를 숨기는 함수
function hideDefaultImage() {
    const defaultImage = document.getElementById("default-image");
    if (defaultImage) {
        defaultImage.style.display = "none";
    }
}

// 정적 이미지를 보여주는 함수 (로드뷰가 아닌 경우 사용)
export function showStaticBuildingImage(imagePath) {
    const viewerElement = document.getElementById('pannellum-viewer');
    viewerElement.innerHTML = `<img src="${imagePath}" alt="Building Image" style="width: 100%; height: 100%; object-fit: cover;">`;
    hideDefaultImage();
}

// 동적으로 로드뷰 설정 및 장면 이동 기능
export function showBuildingFloorView(buildingName, floor) {
    const viewerElement = document.getElementById('pannellum-viewer');
    
    // 기존 뷰어 인스턴스를 제거
    if (viewerElement.viewerInstance) {
        viewerElement.viewerInstance.destroy();
    }

    const floorScenes = buildingFloorScenes[buildingName]?.floors?.[floor];
    if (!floorScenes) {
        console.error(`로드뷰 장면 정보가 없습니다: ${buildingName} - ${floor}층`);
        return;
    }

    // 기본 이미지 숨기기
    hideDefaultImage();

    // 초기화할 장면 설정
    const firstSceneId = 'scene1';

    // Pannellum 뷰어에 사용할 scenes 객체 생성
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
export const buildingFloorScenes = {
    Dasan_Hall: {
        type: 'pannellum',
        floors: {
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
                        image: 'Dasan_Hall/Dasan_2-2.jpg',
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
                firstScene: 'Dasan_Hall/Dasan_3-1.jpg', 
                scenes: [
                    {
                        image: 'Dasan_Hall/Dasan_3-1.jpg',
                        nextScenes: [
                            { sceneId: 'scene2', pitch: 0, yaw: 110 },
                            { sceneId: 'scene5', pitch: 5, yaw: -115 }
                        ]
                    },
                    {
                        image: 'Dasan_Hall/Dasan_3-2.jpg',  
                        nextScenes: [
                            { sceneId: 'scene3', pitch: -6, yaw: -18 },
                            { sceneId: 'scene1', pitch: -5, yaw: -130 }
                        ]
                    },
                    {
                        image: 'Dasan_Hall/Dasan_3-3.jpg', 
                        nextScenes: [
                            { sceneId: 'scene4', pitch: -3, yaw: 5 },
                            { sceneId: 'scene2', pitch: 0, yaw: -120 }
                        ]
                    },
                    {
                        image: 'Dasan_Hall/Dasan_3-4.jpg',  
                        nextScenes: [
                            { sceneId: 'scene5', pitch: 10, yaw: 23 },
                            { sceneId: 'scene3', pitch: 9, yaw: -95 }
                        ]
                    },
                    {
                        image: 'Dasan_Hall/Dasan_3-5.jpg',  
                        nextScenes: [
                            { sceneId: 'scene1', pitch: -15, yaw: 20 },
                            { sceneId: 'scene4', pitch: -5, yaw: -92 }
                        ]
                    }
                ]
            }
        }
        
    },
    Changhak_Hall:{
        type: 'pannellum',
        floors: {
            1: {
                firstScene: 'Changhak_Hall/Changhak_1-1.jpg',  
                scenes: [
                    {
                        image: 'Changhak_Hall/Changhak_1-1.jpg',
                        nextScenes: [
                            { sceneId: 'scene2', pitch: 2, yaw: 120 },
                            { sceneId: 'scene5', pitch: 5, yaw: -82 }
                        ]
                    },
                    {
                        image: 'Changhak_Hall/Changhak_1-2.jpg',
                        nextScenes: [
                            { sceneId: 'scene3', pitch: 2, yaw: -12 },
                            { sceneId: 'scene1', pitch: 13, yaw: -127 }
                        ]
                    },
                    {
                        image: 'Changhak_Hall/Changhak_1-3.jpg',
                        nextScenes: [
                            { sceneId: 'scene4', pitch: 0, yaw: 22 },
                            { sceneId: 'scene2', pitch: 2, yaw: -83 }
                        ]
                    },
                    {
                        image: 'Changhak_Hall/Changhak_1-4.jpg',
                        nextScenes: [
                            { sceneId: 'scene5', pitch: 3, yaw: -7 },
                            { sceneId: 'scene3', pitch: 10, yaw: -113 }

                        ]
                    },
                    {
                        image: 'Changhak_Hall/Changhak_1-5.jpg',
                        nextScenes: [
                            { sceneId: 'scene1', pitch: -8, yaw: 22 },
                            { sceneId: 'scene4', pitch: 5, yaw: -85 }, 
                        ]
                    }
                ]
            },
            2: {
                firstScene: 'Changhak_Hall/Changhak_2-1.jpg',  
                scenes: [
                    {
                        image: 'Changhak_Hall/Changhak_2-1.jpg',
                        nextScenes: [
                            { sceneId: 'scene2', pitch: 2, yaw: 107 },
                            { sceneId: 'scene5', pitch: 3, yaw: -120 }
                        ]
                    },
                    {
                        image: 'Changhak_Hall/Changhak_2-2.jpg',
                        nextScenes: [
                            { sceneId: 'scene3', pitch: 4, yaw: 20 },
                            { sceneId: 'scene1', pitch: 9, yaw: -89 }
                        ]
                    },
                    {
                        image: 'Changhak_Hall/Changhak_2-3.jpg',
                        nextScenes: [
                            { sceneId: 'scene4', pitch: -5, yaw: 35 },
                            { sceneId: 'scene2', pitch: 2, yaw: -70 }
                        ]
                    },
                    {
                        image: 'Changhak_Hall/Changhak_2-4.jpg',
                        nextScenes: [
                            { sceneId: 'scene5', pitch: 2, yaw: 9 },
                            { sceneId: 'scene3', pitch: 12, yaw: -103 }

                        ]
                    },
                    {
                        image: 'Changhak_Hall/Changhak_2-5.jpg',
                        nextScenes: [
                            { sceneId: 'scene1', pitch: 5, yaw: 10 },
                            { sceneId: 'scene4', pitch: 8, yaw: -100 }, 
                        ]
                    }
                ]
            },
            3: {
                firstScene: 'Changhak_Hall/Changhak_3-1.jpg',  
                scenes: [
                    {
                        image: 'Changhak_Hall/Changhak_3-1.jpg',
                        nextScenes: [
                            { sceneId: 'scene2', pitch: 2, yaw: 110 },
                            { sceneId: 'scene5', pitch: 10, yaw: -113 }
                        ]
                    },
                    {
                        image: 'Changhak_Hall/Changhak_3-2.jpg',
                        nextScenes: [
                            { sceneId: 'scene3', pitch: 2, yaw: 27 },
                            { sceneId: 'scene1', pitch: 3, yaw: -85 }
                        ]
                    },
                    {
                        image: 'Changhak_Hall/Changhak_3-3.jpg',
                        nextScenes: [
                            { sceneId: 'scene4', pitch: 5, yaw: 62 },
                            { sceneId: 'scene2', pitch: 5, yaw: -45 }
                        ]
                    },
                    {
                        image: 'Changhak_Hall/Changhak_3-4.jpg',
                        nextScenes: [
                            { sceneId: 'scene5', pitch: -2, yaw: 37 },
                            { sceneId: 'scene3', pitch: 3, yaw: -73 }

                        ]
                    },
                    {
                        image: 'Changhak_Hall/Changhak_3-5.jpg',
                        nextScenes: [
                            { sceneId: 'scene1', pitch: -5, yaw: -22 },
                            { sceneId: 'scene4', pitch: 5, yaw: -132 }, 
                        ]
                    }
                ]
            }  
        }
    },
    Chungun_Hall:{
        type: 'pannellum',
        floors: {
            1: {
                firstScene: 'Chungun_Hall/Chungun_1-1.jpg',  
                scenes: [
                    {
                        image: 'Chungun_Hall/Chungun_1-1.jpg',
                        nextScenes: [
                            { sceneId: 'scene2', pitch: -40, yaw: 37 },
                            { sceneId: 'scene4', pitch: -10, yaw: -40 },
                            { sceneId: 'scene6', pitch: -25, yaw: -82 }
                        ]
                    },
                    {
                        image: 'Chungun_Hall/Chungun_1-2.jpg',
                        nextScenes: [
                            { sceneId: 'scene3', pitch: -5, yaw: -27 },
                            { sceneId: 'scene1', pitch: 7, yaw: -138 }
                        ]
                    },
                    {
                        image: 'Chungun_Hall/Chungun_1-3.jpg',
                        nextScenes: [
                            { sceneId: 'scene4', pitch: 2, yaw: 4 },
                            { sceneId: 'scene2', pitch: -6, yaw: -94 }
                        ]
                    },
                    {
                        image: 'Chungun_Hall/Chungun_1-4.jpg',
                        nextScenes: [ 
                            { sceneId: 'scene5', pitch: -30, yaw: 90 },
                            { sceneId: 'scene3', pitch: 5, yaw: -120 },
                            { sceneId: 'scene1', pitch: -5, yaw: -7 }

                        ]
                    },
                    {
                        image: 'Chungun_Hall/Chungun_1-5.jpg',
                        nextScenes: [
                            { sceneId: 'scene6', pitch: -9, yaw: 8 },
                            { sceneId: 'scene4', pitch: -5, yaw: -115 }, 
                        ]
                    },
                    {
                        image: 'Chungun_Hall/Chungun_1-6.jpg',
                        nextScenes: [
                            { sceneId: 'scene1', pitch: -8, yaw: 85 },
                            { sceneId: 'scene5', pitch: -3, yaw: -20 }, 
                        ]
                    }
                ]
            },
            2: {
                firstScene: 'Changhak_Hall/Changhak_2-1.jpg',  
                scenes: [
                    {
                        image: 'Changhak_Hall/Changhak_2-1.jpg',
                        nextScenes: [
                            { sceneId: 'scene2', pitch: 2, yaw: 107 },
                            { sceneId: 'scene5', pitch: 3, yaw: -120 }
                        ]
                    },
                    {
                        image: 'Changhak_Hall/Changhak_2-2.jpg',
                        nextScenes: [
                            { sceneId: 'scene3', pitch: 4, yaw: 20 },
                            { sceneId: 'scene1', pitch: 9, yaw: -89 }
                        ]
                    },
                    {
                        image: 'Changhak_Hall/Changhak_2-3.jpg',
                        nextScenes: [
                            { sceneId: 'scene4', pitch: -5, yaw: 35 },
                            { sceneId: 'scene2', pitch: 2, yaw: -70 }
                        ]
                    },
                    {
                        image: 'Changhak_Hall/Changhak_2-4.jpg',
                        nextScenes: [
                            { sceneId: 'scene5', pitch: 2, yaw: 9 },
                            { sceneId: 'scene3', pitch: 12, yaw: -103 }

                        ]
                    },
                    {
                        image: 'Changhak_Hall/Changhak_2-5.jpg',
                        nextScenes: [
                            { sceneId: 'scene1', pitch: 5, yaw: 10 },
                            { sceneId: 'scene4', pitch: 8, yaw: -100 }, 
                        ]
                    }
                ]
            },
            3: {
                firstScene: 'Changhak_Hall/Changhak_3-1.jpg',  
                scenes: [
                    {
                        image: 'Changhak_Hall/Changhak_3-1.jpg',
                        nextScenes: [
                            { sceneId: 'scene2', pitch: 2, yaw: 110 },
                            { sceneId: 'scene5', pitch: 10, yaw: -113 }
                        ]
                    },
                    {
                        image: 'Changhak_Hall/Changhak_3-2.jpg',
                        nextScenes: [
                            { sceneId: 'scene3', pitch: 2, yaw: 27 },
                            { sceneId: 'scene1', pitch: 3, yaw: -85 }
                        ]
                    },
                    {
                        image: 'Changhak_Hall/Changhak_3-3.jpg',
                        nextScenes: [
                            { sceneId: 'scene4', pitch: 5, yaw: 62 },
                            { sceneId: 'scene2', pitch: 5, yaw: -45 }
                        ]
                    },
                    {
                        image: 'Changhak_Hall/Changhak_3-4.jpg',
                        nextScenes: [
                            { sceneId: 'scene5', pitch: -2, yaw: 37 },
                            { sceneId: 'scene3', pitch: 3, yaw: -73 }

                        ]
                    },
                    {
                        image: 'Changhak_Hall/Changhak_3-5.jpg',
                        nextScenes: [
                            { sceneId: 'scene1', pitch: -5, yaw: -22 },
                            { sceneId: 'scene4', pitch: 5, yaw: -132 }, 
                        ]
                    }
                ]
            }  
        }
    },//1층까지함 2,3층 화살표 설정
    Frontier_Hall: {
        type: 'pannellum',
        floors: {
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
        }
    },
    Hi_Tech_Hall: {
        type: 'pannellum',
        floors: {
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
        }
    },
    International_Hall: {
        type: 'pannellum',
        floors: {
            1: { 
                firstScene: 'International_Hall/International_1.jpg',
                scenes: [
                    {
                        image: 'International_Hall/International_1.jpg',
                        nextScenes :[]
                    }
                ]
            },
            2: { 
                firstScene: 'International_Hall/International_2.jpg',
                scenes: [
                    {
                        image: 'International_Hall/International_2.jpg',
                        nextScenes :[]
                    }
                ]
            },
            3: { 
                firstScene: 'International_Hall/International_3.jpg',
                scenes: [
                    {
                        image: 'International_Hall/International_3.jpg',
                        nextScenes :[]
                    }
                ]
            },
            4: { 
                firstScene: 'International_Hall/International_4.jpg',
                scenes: [
                    {
                        image: 'International_Hall/International_4.jpg',
                        nextScenes :[]
                    }
                ]
            },
            5: { 
                firstScene: 'International_Hall/International_5.jpg',
                scenes: [
                    {
                        image: 'International_Hall/International_5.jpg',
                        nextScenes :[]
                    }
                ]
            }
        }
    },
    Davinch_Hall: {
        type: 'pannellum',
        floors: {
            B1: { 
                firstScene: 'Davinch_Hall/Davinch_B1.jpg',
                scenes: [
                    {
                        image: 'Davinch_Hall/Davinch_B1.jpg',
                        nextScenes :[]
                    }
                ]
            },
            1: { 
                firstScene: 'Davinch_Hall/Davinch_1-1.jpg',
                scenes: [
                    {
                        image: 'Davinch_Hall/Davinch_1-1.jpg',
                        nextScenes :[
                            { sceneId: 'scene2', pitch: -12, yaw: -5 }
                        ]
                    },
                    {
                        image: 'Davinch_Hall/Davinch_1-2.jpg', 
                        nextScenes: [
                            { sceneId: 'scene1', pitch: -0, yaw: -8 }
                        ]
                    }
                ]
            },
            2: { 
                firstScene: 'Davinch_Hall/Davinch_2-1.jpg',
                scenes: [
                    {
                        image: 'Davinch_Hall/Davinch_2-1.jpg',
                        nextScenes :[
                            { sceneId: 'scene2', pitch: -9, yaw: 7 }
                        ]
                    },
                    {
                        image: 'Davinch_Hall/Davinch_2-2.jpg', 
                        nextScenes: [
                            { sceneId: 'scene1', pitch: -2, yaw: 10 }
                        ]
                    }
                ]
            },
            3: { 
                firstScene: 'Davinch_Hall/Davinch_3-1.jpg',
                scenes: [
                    {
                        image: 'Davinch_Hall/Davinch_3-1.jpg',
                        nextScenes :[
                            { sceneId: 'scene2', pitch: -9, yaw: -7 }
                        ]
                    },
                    {
                        image: 'Davinch_Hall/Davinch_3-2.jpg', 
                        nextScenes: [
                            { sceneId: 'scene1', pitch: -2, yaw: -8 }
                        ]
                    }
                ]
            },
            4: { 
                firstScene: 'Davinch_Hall/Davinch_4-1.jpg',
                scenes: [
                    {
                        image: 'Davinch_Hall/Davinch_4-1.jpg',
                        nextScenes :[
                            { sceneId: 'scene2', pitch: -40, yaw: 10 }
                        ]
                    },
                    {
                        image: 'Davinch_Hall/Davinch_4-2.jpg', 
                        nextScenes: [
                            { sceneId: 'scene1', pitch: -2, yaw: -8 }
                        ]
                    }
                ]
            },
            5: { 
                firstScene: 'Davinch_Hall/Davinch_5.jpg',
                scenes: [
                    {
                        image: 'Davinch_Hall/Davinch_5.jpg',
                        nextScenes :[]
                    }
                ]
            },
            6: { 
                firstScene: 'Davinch_Hall/Davinch_6-1.jpg',
                scenes: [
                    {
                        image: 'Davinch_Hall/Davinch_6-1.jpg',
                        nextScenes :[
                            { sceneId: 'scene2', pitch: -35, yaw: 140 }
                        ]
                    },
                    {
                        image: 'Davinch_Hall/Davinch_6-2.jpg', 
                        nextScenes: [
                            { sceneId: 'scene1', pitch: -2, yaw: -8 }
                        ]
                    }
                ]
            },
            7: { 
                firstScene: 'Davinch_Hall/Davinch_7-1.jpg',
                scenes: [
                    {
                        image: 'Davinch_Hall/Davinch_7-1.jpg',
                        nextScenes :[
                            { sceneId: 'scene2', pitch: -10, yaw: 0 }
                        ]
                    },
                    {
                        image: 'Davinch_Hall/Davinch_7-2.jpg', 
                        nextScenes: [
                            { sceneId: 'scene1', pitch: -2, yaw: -6 }
                        ]
                    }
                ]
            }
        }
    },
    Eoui_Hall: {
        type: 'pannellum',
        floors: {
            1: { 
                firstScene: 'Eoui_Hall/Eoui_2.jpg', //1층 사진으로 바꾸기
                scenes: [
                    {
                        image: 'Eoui_Hall/Eoui_2.jpg',
                        nextScenes :[]
                    }
                ]
            },
            2: { 
                firstScene: 'Eoui_Hall/Eoui_2.jpg',
                scenes: [
                    {
                        image: 'Eoui_Hall/Eoui_2.jpg',
                        nextScenes :[]
                    }
                ]
            },
            3: { 
                firstScene: 'Eoui_Hall/Eoui_3.jpg',
                scenes: [
                    {
                        image: 'Eoui_Hall/Eoui_3.jpg',
                        nextScenes :[]
                    }
                ]
            },
            4: { 
                firstScene: 'Eoui_Hall/Eoui_4.jpg',
                scenes: [
                    {
                        image: 'Eoui_Hall/Eoui_4.jpg',
                        nextScenes :[]
                    }
                ]
            },
            5: { 
                firstScene: 'Eoui_Hall/Eoui_5.jpg',
                scenes: [
                    {
                        image: 'Eoui_Hall/Eoui_5.jpg',
                        nextScenes :[]
                    }
                ]
            },
            6: { 
                firstScene: 'Eoui_Hall/Eoui_6.jpg',
                scenes: [
                    {
                        image: 'Eoui_Hall/Eoui_6.jpg',
                        nextScenes :[]
                    }
                ]
            }
        }
    },
    Student_Union_Bldg2: {
        type: 'pannellum',
        floors: {
            1: { 
                firstScene: 'Student_Union_Bldg2/Student_Union_Bldg2_1.jpg', 
                scenes: [
                    {
                        image: 'Student_Union_Bldg2/Student_Union_Bldg2_1.jpg',
                        nextScenes :[]
                    }
                ]
            },
            2: { 
                firstScene: 'Student_Union_Bldg2/Student_Union_Bldg2_2.jpg',
                scenes: [
                    {
                        image: 'Student_Union_Bldg2/Student_Union_Bldg2_2.jpg',
                        nextScenes :[]
                    }
                ]
            },
            3: { 
                firstScene: 'Student_Union_Bldg2/Student_Union_Bldg2_3.jpg',
                scenes: [
                    {
                        image: 'Student_Union_Bldg2/Student_Union_Bldg2_3.jpg',
                        nextScenes :[]
                    }
                ]
            }
        }
    },
    Areum_Hall: {
        type: 'static',
        image: 'campus.jpg',
        floors: { 1: {} }
    },
    Mugung_Hall:{
        type: 'pannellum',
        floors: {
            1: { 
                firstScene: 'Mugung_Hall/Mugung_1.jpg', //1층 사진으로 바꾸기
                scenes: [
                    {
                        image: 'Mugung_Hall/Mugung_1.jpg',
                        nextScenes :[]
                    }
                ]
            },
            2: { 
                firstScene: 'Mugung_Hall/Mugung_2.jpg',
                scenes: [
                    {
                        image: 'Mugung_Hall/Mugung_2.jpg',
                        nextScenes :[]
                    }
                ]
            },
            3: { 
                firstScene: 'Mugung_Hall/Mugung_3.jpg',
                scenes: [
                    {
                        image: 'Mugung_Hall/Mugung_3.jpg',
                        nextScenes :[]
                    }
                ]
            },
            4: { 
                firstScene: 'Mugung_Hall/Mugung_4.jpg',
                scenes: [
                    {
                        image: 'Mugung_Hall/Mugung_4.jpg',
                        nextScenes :[]
                    }
                ]
            },
            5: { 
                firstScene: 'Mugung_Hall/Mugung_5.jpg',
                scenes: [
                    {
                        image: 'Mugung_Hall/Mugung_5.jpg',
                        nextScenes :[]
                    }
                ]
            },
            6: { 
                firstScene: 'Mugung_Hall/Mugung_6.jpg',
                scenes: [
                    {
                        image: 'Mugung_Hall/Mugung_6.jpg',
                        nextScenes :[]
                    }
                ]
            },
            7: { 
                firstScene: 'Mugung_Hall/Mugung_7.jpg',
                scenes: [
                    {
                        image: 'Mugung_Hall/Mugung_7.jpg',
                        nextScenes :[]
                    }
                ]
            },
            8: { 
                firstScene: 'Mugung_Hall/Mugung_8.jpg',  //8층 찍기
                scenes: [
                    {
                        image: 'Mugung_Hall/Mugung_8.jpg',
                        nextScenes :[]
                    }
                ]
            },
            9: { 
                firstScene: 'Mugung_Hall/Mugung_9.jpg',
                scenes: [
                    {
                        image: 'Mugung_Hall/Mugung_9.jpg',
                        nextScenes :[]
                    }
                ]
            }
        }
    },
    Mirae_Hall: {
        type: 'pannellum',
        floors: {
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
                firstScene: 'Mirae_Hall/Mirae1-1.jpg', 
                scenes: [
                    {
                        image: 'Mirae_Hall/Mirae1-1.jpg', 
                        nextScenes: [
                            { sceneId: 'scene2', pitch: -10, yaw: 50 },
                            { sceneId: 'scene3', pitch: -10, yaw: -130 }
                        ]
                    },
                    {
                        image: 'Mirae_Hall/Mirae1-2.jpg', 
                        nextScenes: [
                            { sceneId: 'scene1', pitch: -15, yaw: -5 }
                        ]
                    },
                    {
                        image: 'Mirae_Hall/Mirae1-3.jpg', 
                        nextScenes: [
                            { sceneId: 'scene1', pitch: -10, yaw: -30 }
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
                        image: 'Mirae_Hall/Mirae2-2.jpg', 
                        nextScenes: [
                            { sceneId: 'scene1', pitch: -10, yaw: -28 }
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
    },
    Techno_Cube: {
        type: 'pannellum',
        floors: {
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
    }
          
};
