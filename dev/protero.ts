class Protero { 
    private x:number = 0 
    private y:number = 0 
    private element:HTMLElement
    
    constructor() { 
        this.element = document.createElement("protero")
        document.body.appendChild(this.element)
    }
}