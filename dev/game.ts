class Game {
    
    constructor() {
        for(let i = 0; i<25; i++) { 
            let d = new Bubble()
            d.update();
        }
        for(let i = 0; i<8;i++) { 
        let c = new Protero()
        c.update();
        
        }
    this.gameLoop()
  
    }
   
    private gameLoop(){
   
    requestAnimationFrame(()=>this.gameLoop())
    }
   } 

   window.addEventListener("load", () => {
    new Game()
   }) 