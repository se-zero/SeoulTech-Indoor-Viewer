# Runaway Turtle Game - 설명서

<div>
    <img src="https://github.com/se-zero/seyeong/blob/main/week%204/turtle_runaway1.png" alt="게임 화면 1" width="33%" style="margin-right: 10px;"/>
    <img src="https://github.com/se-zero/seyeong/blob/main/week%204/turtle_runaway2.png" alt="게임 화면 2" width="33%" style="margin-right: 10px;"/>
    <img src="https://github.com/se-zero/seyeong/blob/main/week%204/turtle_runaway3.png" alt="게임 화면 3" width="33%" />
</div>

## 게임 설명
Runaway Turtle Game은 **Chaser(추적자)**와 **Runner(도망자)**가 등장하는 추격 게임입니다. 플레이어는 **Chaser**를 조종하여 **Runner**를 쫓아 잡아 점수를 얻습니다. 추가적으로 **Intelligent Turtle**이 등장하여 **Chaser**를 쫓습니다. **Intelligent Turtle**에게 잡히면 점수가 감소합니다.

## 게임 목적
1. **Chaser**는 **Runner**를 잡아야 점수를 획득합니다.
2. **Intelligent Turtle**에게 잡히면 점수가 감소합니다.
3. 게임 종료 후 최종 점수가 표시됩니다.

## 기본 조작 방법
- 키보드의 방향키(위, 아래, 왼쪽, 오른쪽)를 사용하여 **Chaser**를 움직입니다.
- **Runner**는 랜덤하게 움직입니다.

## 게임 규칙
- **Chaser**가 **Runner**를 잡으면 1점이 추가됩니다.
- **Intelligent Turtle**이 **Chaser**를 잡으면 1점이 감소합니다.
- 주어진 시간 동안 가능한 많은 점수를 얻는 것이 목표입니다.
- 게임 시작 전, 화면 중앙에 게임 규칙이 표시되며, 스페이스바 키를 누르면 게임이 시작됩니다.
- 게임이 끝나면 화면 중앙에 최종 점수가 표시됩니다.

## 주요 추가된 기능
1. **타이머**: 게임은 60초 동안 진행됩니다. 시간이 경과하면 게임이 종료되며 점수가 표시됩니다.
2. **Intelligent Turtle**: 추가적인 추적자로 등장하며, **Chaser**를 쫓아다닙니다. **Intelligent Turtle**에게 잡히면 점수가 감소합니다.
3. **시작 화면과 종료 화면**: 
   - 게임 시작 전에 규칙 설명이 화면에 나타나고, 스페이스바 키를 누르면 게임이 시작됩니다.
   - 게임이 끝난 후에는 점수가 화면 중앙에 표시됩니다.

