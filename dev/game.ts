class Game {
    
    constructor() {
        let c = new Protero()
    this.gameLoop()
    console.log("Hoi")
    c.update();
    }
   
    private gameLoop(){
   
    requestAnimationFrame(()=>this.gameLoop())
    }
   } 

   window.addEventListener("load", () => {
    new Game()
   }) 