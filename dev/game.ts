class Game { 
    screen:any
    constructor(){ 
        this.screen = new StartScreen(this)
        this.gameLoop()
    }


gameLoop(){
this.screen.update()
requestAnimationFrame(()=>this.gameLoop())
           
}    

showPlayScreen() {
    document.body.innerHTML = ""
    this.screen = new Playscreen
}

}