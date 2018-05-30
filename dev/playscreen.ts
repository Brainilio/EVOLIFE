

class Playscreen {
    private paddle:Paddle
    private bubbles:Bubble[]
    private scoreElement:Element
    private score:number = 0
    private deads:number = 0
    private deadball: deadBall[]
    private deadElement:Element
    private game: Game

    

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
        
        
        for(let i = 0; i<10; i++) { 
            let d = new Bubble()
            this.bubbles.push(d)
           
          
        }
        for(let i = 0; i<30; i++) {  
            let h = new deadBall()
            this.deadball.push(h)
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

         for (let e of this.deadball) {  
        let hit = this.checkCollision(this.paddle.getRectangle(), e.getRectangle())
        if(hit){
         
            this.deads--
            this.deadElement.innerHTML = "Lives left: " + this.deads
        }
        if(this.deads == 0) {  
            this.game.showGameoverScreen
        }
            e.update


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