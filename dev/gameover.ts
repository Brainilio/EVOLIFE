class GameOver { 
    private div: HTMLElement
    private game: Game
 

    constructor(g:Game) {
        this.game = g
        this.div = document.createElement("splash")
        document.body.appendChild(this.div)
        this.div.addEventListener("click", ()=>this.splashClicked())
        this.div.innerHTML = "YOU DIED, TRY AGAIN!"
    }

    public update(){

    }

    private splashClicked() {
       this.game.emptyScreen()
       this.game.showPlayScreen(new Playscreen(this.game))
    }
}