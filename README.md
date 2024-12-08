# SeoulTech Campus Map and Indoor Viewer

## 🚀 Introduction
**SeoulTech Campus Map and Indoor Viewer**는 서울과학기술대학교 캠퍼스와 건물 내부를 탐색할 수 있는 웹 애플리케이션입니다.  
학생들과 방문객들에게 보다 나은 탐색 경험을 제공하며, 다음과 같은 목적을 가지고 개발되었습니다:

## 🎯 Project Purpose
이 프로젝트는 다음 두 가지 문제를 해결하기 위해 설계되었습니다:

1. **서울과학기술대학교 학생들의 건물 탐색 문제**  
   - 대부분의 학생들은 자신의 학과가 사용하는 건물만 이용하므로 다른 건물을 가볼 기회가 적습니다.  
   - 대학교 내에는 공부할 공간이 많지만, 이를 잘 모르는 경우가 많습니다.  
   - 이 시스템을 통해 학생들이 건물 내부를 탐색하고 새로운 학습 공간을 발견할 수 있습니다.

2. **수험생들의 대학교 건물 위치 탐색**  
   - 면접이나 논술고사를 위해 대학교를 방문하는 수험생들은 대학교 건물에 처음 들어오는 경우가 많습니다.  
   - 수험생들이 면접 또는 논술고사를 보는 건물 내부 위치를 미리 확인함으로써, 당일 혼란을 줄이고 효율적으로 준비할 수 있도록 돕는 것이 목표입니다.


## 🌐 Live Demo
[SeoulTech Campus Map and Indoor Viewer](https://se-zero.github.io/seyeong/Term%20project/)  
위 링크를 통해 프로젝트를 직접 체험해보세요!

## 🎥 Demo Video
[![Watch the demo](https://img.youtube.com/vi/영상ID/0.jpg)](https://www.youtube.com/watch?v=영상ID)  
_(위 이미지를 클릭하면 프로젝트 데모 영상으로 이동합니다.)_

## 💡 Features
- **캠퍼스 지도 탐색**: 주요 건물과 경계를 시각적으로 확인할 수 있습니다.
- **실내 로드뷰 제공**: `Pannellum.js`를 사용하여 각 층의 실내를 가상으로 탐험 가능.
- **사이드바 인터랙션**: 선택한 건물의 층별 정보와 뷰어를 제공.
- **건물별 상세 정보**: 건물 사용 목적, 주요 부서 등 세부 정보 표시.

## 🛠️ Technology Stack
- **Frontend**:
  - HTML5, CSS3, JavaScript (ES6+)
  - `Leaflet.js`: 지도 시각화
  - `Pannellum.js`: 로드뷰 뷰어
- **Backend**:
  - 없음 (정적 웹 애플리케이션)
- **Deployment**:
  - GitHub Pages

## 📂 Project Structure
```plaintext
seyeong/
├── README.md                 # 루트 디렉토리의 README 파일
└── Termproject/
    ├── index.html
    ├── style.css
    ├── mapLayers.js
    ├── roadview.js
    ├── sidebar.js
    ├── buildingController.js
    ├── buildingDescriptions.js
    ├── Eoui_Hall/
    ├── Mirae_Hall/
    ├── Hi_Tech_Hall/
    └── ...  
```


## 🔧 Setup & Usage
### 1. Clone the Repository
프로젝트를 로컬로 복사하려면 아래 명령어를 사용하세요:
```bash
git clone https://github.com/se-zero/seyeong.git
cd seyeong
```
### 2. Navigate to the Project Folder
`Termproject` 폴더로 이동합니다:
```bash
cd Termproject
```
### 3. Open the Project in a Browser
`index.html` 파일을 브라우저에서 엽니다:
```bash
open index.html
```
(Windows 사용자의 경우 start index.html 명령을 사용할 수 있습니다.)
### 4. Explore the Map!
- 건물을 클릭해 보세요.
- 사이드바를 통해 각 층의 정보를 확인하세요.

## 📄 License
This project is licensed under the **MIT License**. For more details, refer to the [LICENSE](LICENSE) file.

## 📖 References
- [Leaflet.js](https://leafletjs.com)
- [Pannellum.js](https://pannellum.org)
- 일부 오픈소스 및 레퍼런스 코드를 기반으로 작성되었으며, 사용한 코드의 출처는 위에 명시되어 있습니다.



