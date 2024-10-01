import tkinter as tk
import turtle, random

class RunawayGame:
    def __init__(self, canvas, runner, chaser, intelligent, catch_radius=50):
        self.canvas = canvas
        self.runner = runner
        self.chaser = chaser
        self.intelligent = intelligent  
        self.catch_radius2 = catch_radius**2

        self.runner.shape('turtle')
        self.runner.color('blue')
        self.runner.penup()

        self.chaser.shape('turtle')
        self.chaser.color('red')
        self.chaser.penup()

        self.intelligent.shape('turtle')
        self.intelligent.color('green')
        self.intelligent.penup()

        self.drawer = turtle.RawTurtle(canvas)
        self.drawer.hideturtle()
        self.drawer.penup()

        self.score = 0  # 점수 초기화
        self.time_left = 60  # 타이머 초기화 (60초)
        self.game_started = False  # 게임이 시작되었는지 여부를 추적

    #게임 시작 전 안내 메시지 표시
    def show_start_message(self):
        self.drawer.clear()
        self.drawer.penup()
        self.drawer.setpos(0, 50) 
        self.drawer.write(
            "Intelligent Turtle(green)을 피해 runner(blue)를 잡으세요.\n"
            "Intelligent Turtle에게 잡히면 1점을 잃고 runner를 잡으면 1점을 얻습니다.\n"
            "게임을 시작하려면 스페이스바를 누르세요.",
            font=("Arial", 14, "normal"),
            align="center"
        )
        self.canvas.onkeypress(self.start_game, 'space')  # 스페이스바로 게임 시작
        self.canvas.listen()

    #게임 시작 시 호출되는 함수
    def start_game(self):
        if not self.game_started:
            self.drawer.clear()
            self.game_started = True
            self.start() 

    def is_catched(self, turtle1, turtle2):
        p = turtle1.pos()
        q = turtle2.pos()
        dx, dy = p[0] - q[0], p[1] - q[1]
        return dx**2 + dy**2 < self.catch_radius2

    def start(self, init_dist=400, ai_timer_msec=100):
        self.runner.setpos((-init_dist / 2, 0))
        self.runner.setheading(0)
        self.chaser.setpos((+init_dist / 2, 0))
        self.chaser.setheading(180)
        self.intelligent.setpos((0, +init_dist / 2))  

        self.ai_timer_msec = ai_timer_msec
        self.canvas.ontimer(self.update_timer, 1000)  
        self.canvas.ontimer(self.step, self.ai_timer_msec)

    #타이머를 갱신하고 게임 종료 처리
    def update_timer(self):
        if self.time_left > 0:
            self.time_left -= 1  
            self.update_score_display()
            self.canvas.ontimer(self.update_timer, 1000)  
        else:
            self.show_game_over()

    #현재 점수와 남은 시간을 표시
    def update_score_display(self):
       
        self.drawer.clear() 
        self.drawer.penup()
        self.drawer.setpos(-300, 300)
        self.drawer.write(f'Time Left: {self.time_left}s, Score: {self.score}', font=("Arial", 16, "normal"))

    #게임 종료 후 메시지를 표시
    def show_game_over(self):
        
        self.drawer.clear()
        self.drawer.penup()
        self.drawer.setpos(0, 50)  
        self.drawer.write(f'Game Over!\nYour Final Score: {self.score}', font=("Arial", 24, "bold"), align="center")

    def step(self):
        if self.time_left > 0:  
            self.runner.run_ai(self.chaser.pos(), self.chaser.heading())
            self.chaser.run_ai(self.runner.pos(), self.runner.heading())
            self.intelligent.run_ai(self.chaser.pos(), self.chaser.heading())  

            if self.is_catched(self.runner, self.chaser):
                self.score += 1  
                self.runner.setpos(random.randint(-200, 200), random.randint(-200, 200))  # runner를 임의의 위치로 이동

            if self.is_catched(self.chaser, self.intelligent):
                self.score -= 1 
                self.intelligent.setpos(random.randint(-200, 200), random.randint(-200, 200))  # Intelligent Turtle를 새로운 위치로 이동

            self.update_score_display()
            self.canvas.ontimer(self.step, self.ai_timer_msec)

class IntelligentTurtle(turtle.RawTurtle):
    def __init__(self, canvas, step_move=10, step_turn=10, screen_width=700, screen_height=700):
        super().__init__(canvas)
        self.step_move = step_move
        self.screen_width = screen_width // 2  
        self.screen_height = screen_height // 2  

    def run_ai(self, opp_pos, opp_heading):
        p = self.pos()
        
        # Intelligent Turtle이 화면 밖으로 나가는 것을 방지하는 경계 설정
        if abs(p[0]) > self.screen_width or abs(p[1]) > self.screen_height:
            self.setheading((self.heading() + 180) % 360)  # 방향을 반대로 바꿈
            self.forward(self.step_move)
        else:
            # Intelligent Turtle이 Chaser의 위치로 향하게 각도를 계산
            target_angle = self.towards(opp_pos)  # 목표 위치로 향하는 각도를 계산
            self.setheading(target_angle)  # 그 각도로 향하도록 설정
            self.forward(self.step_move)  # 그 방향으로 움직임

class ManualMover(turtle.RawTurtle):
    def __init__(self, canvas, step_move=10, step_turn=10):
        super().__init__(canvas)
        self.step_move = step_move
        self.step_turn = step_turn

        canvas.onkeypress(lambda: self.forward(self.step_move), 'Up')
        canvas.onkeypress(lambda: self.backward(self.step_move), 'Down')
        canvas.onkeypress(lambda: self.left(self.step_turn), 'Left')
        canvas.onkeypress(lambda: self.right(self.step_turn), 'Right')
        canvas.listen()

    def run_ai(self, opp_pos, opp_heading):
        pass

class RandomMover(turtle.RawTurtle):
    def __init__(self, canvas, step_move=10, step_turn=10):
        super().__init__(canvas)
        self.step_move = step_move
        self.step_turn = step_turn

    def run_ai(self, opp_pos, opp_heading):
        mode = random.randint(0, 2)
        if mode == 0:
            self.forward(self.step_move)
        elif mode == 1:
            self.left(self.step_turn)
        elif mode == 2:
            self.right(self.step_turn)

if __name__ == '__main__':
    root = tk.Tk()
    canvas = tk.Canvas(root, width=700, height=700)
    canvas.pack()
    screen = turtle.TurtleScreen(canvas)

    runner = RandomMover(screen)
    chaser = ManualMover(screen)
    intelligent = IntelligentTurtle(screen)

    game = RunawayGame(screen, runner, chaser, intelligent)
    game.show_start_message() 
    screen.mainloop()
