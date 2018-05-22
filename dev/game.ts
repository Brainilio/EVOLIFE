

class Game {
    private paddle:Paddle
    

    constructor() {
        for(let i = 0; i<25; i++) { 
            let d = new Bubble()
            d.update();
        }

       
        this.paddle = new Paddle()
       
        
       
    
    this.gameLoop()
  
    }
   
    private gameLoop(){
        
        this.paddle.update()
        
    requestAnimationFrame(()=>this.gameLoop())
                      
}      
   } 


   window.addEventListener("load", () => {
    new Game()
   }) 