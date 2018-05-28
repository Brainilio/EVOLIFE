class StartScreen {

    private div: HTMLElement
 

    constructor() {
  
        this.div = document.createElement("splash")
        document.body.appendChild(this.div)
        this.div.addEventListener("click", ()=>this.splashClicked())
        this.div.innerHTML = "START THE GAME"
    }

    public update(){

    }

    private splashClicked() {
        // TODO: geef door aan 'game' dat het spel gestart moet worden
    }
}