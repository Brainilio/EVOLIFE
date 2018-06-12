

class Playscreen {
    private paddle:Paddle
    private bubbles:Bubble[]
    private scoreElement:Element
    private score:number = 0
    private deads:number = 0
    private deadball: deadBall[] = []
    private deadElement:Element
    private game: Game
    private level:number = 0.01;

    

    constructor(g: Game) {
        this.game = g         
        this.scoreElement = document.createElement('score')
        document.body.appendChild(this.scoreElement)
        this.scoreElement.innerHTML = "Score: 0"

        this.deadElement = document.createElement('dead')
        document.body.appendChild(this.deadElement)
        this.deadElement.innerHTML = "Lives left: 3000 "

        this.bubbles = []
        this.deadball = []
        
        
        for(let i = 0; i<1; i++) { 
            let d = new Bubble()
            this.bubbles.push(d)
           
          
        }
      
    
        this.paddle = new Paddle()
        this.update()


        
  
        }
   
    private update(){
        for (let b of this.bubbles){
            let hit = this.checkCollision(this.paddle.getRectangle(), b.getRectangle())
            if(hit){
                b.dead();
                
                this.score++
                this.scoreElement.innerHTML = "Score: "+ this.score
            }
            if(this.score == 100) {  
                this.game.showGameoverScreen
            }
            b.update()
        }

        this.paddle.update()


    


    for (var b of this.deadball) {

        // ball hits paddle
        if (this.checkCollision(b.getRectangle(), this.paddle.getRectangle())) {
          this.deads--
          this.deadElement.innerHTML = "Score: "+ this.deads
          b.dead(); 
        }

        // ball leaves the screen: gameover!
       

        b.update()
    }

    if (Math.random() < this.level) {
        this.deadball.push(new deadBall());
    }
 
}    


public checkCollision(a: ClientRect, b: ClientRect): boolean {
    return (a.left <= b.right &&
        b.left <= a.right &&
        a.top <= b.bottom &&
        b.top <= a.bottom)
}
   } 


   window.addEventListener("load", () => {
    new Game()
   }) 