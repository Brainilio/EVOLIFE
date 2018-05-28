class Game { 
    screen:any
    constructor(){ 
        this.screen = new StartScreen()
        this.gameLoop()
    }


gameLoop(){
this.screen.update()
requestAnimationFrame(()=>this.gameLoop())
           
}    

showPlayScreen() {
    document.body.innerHTML = "niks"
    this.screen = new Playscreen
}

}