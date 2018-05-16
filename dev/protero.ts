class Protero { 

    private element:HTMLElement

    constructor() { 
        this.element = document.createElement("protero")
        document.body.appendChild(this.element)
    }
    public update(){ 
        this.element.style.transform = `translate(100px, 100px)`
    }
}
