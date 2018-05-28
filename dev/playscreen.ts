

class Playscreen {
    private paddle:Paddle
    private bubbles:Bubble[]
    private scoreElement:Element
    private score:number = -2

    

    constructor() {
        
        this.scoreElement = document.getElementsByTagName('score')[0]
        this.bubbles = []
        
        
        for(let i = 0; i<10; i++) { 
            let d = new Bubble()
            this.bubbles.push(d)
           
          
        }
      
    
        this.paddle = new Paddle()
        this.paddle
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
            b.update()
        }

        this.paddle.update()
        
 
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