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

emptyScreen() {  
    document.body.innerHTML = " "
}
showPlayScreen(screen: Playscreen) {
    this.screen = screen
}

showGameoverScreen(screen: GameOver) { 
    this.screen = screen
}

}