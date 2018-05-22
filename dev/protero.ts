class Protero { 
    private yposition = Math.random() * window.innerHeight
    private xposition = Math.random() * window.innerWidth
    private element:HTMLElement;
    leftSpeed : number = 0
    rightSpeed : number = 0
    downSpeed : number = 0
    upSpeed : number = 0

    constructor() { 
        
        this.element = document.createElement("protero")
        document.body.appendChild(this.element)
        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e))
        
      


    }
    onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case 65:
            this.upSpeed = 5
            break
        case 68:
            this.downSpeed = 5
            break
        case 87:
            this.leftSpeed = 5
            break
        case 83:
            this.rightSpeed = 5
            break
        }
    }
    
    onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
        case 65:
            this.upSpeed = 0
            break
        case 68:
            this.downSpeed = 0
            break
        case 87:
            this.leftSpeed = 0
            break
        case 83:
            this.rightSpeed = 0
            break
        }
    }
    
    public update(){ 
      
        this.element.style.left = this.xposition + "px";
        this.element.style.top = this.yposition + "px";
    }
}



