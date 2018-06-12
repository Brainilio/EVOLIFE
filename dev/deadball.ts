class deadBall { 
    private yposition:number 
    private xposition:number

    private speedX:number
    private speedY:number

    private element:HTMLElement;

    

    constructor() { 
        
        this.element = document.createElement("deadball")
        document.body.appendChild(this.element)
     
        
        this.xposition = window.innerWidth
        this.yposition = Math.random() * (window.innerHeight - 100)

        this.speedX = -3 - (Math.random() * 6)
        this.speedY = Math.random() * 6 - 3


    }   
    
    public getRectangle() {
        return this.element.getBoundingClientRect()
}


    public update(){ 
        this.xposition += this.speedX
        this.yposition += this.speedY
        
        if( this.yposition + this.getRectangle().height > window.innerHeight || this.yposition < 0) { 
            this.speedY *= -1
        }

        if (this.xposition > window.innerWidth) {
            this.speedX *= -1
        } 
        this.element.style.transform = `translate(${this.xposition}px, ${this.yposition}px)`      
        
    }

    dead() { 
       //  (this.element.classList.add("dead"), 5000)
            this.element.remove(); 
    }
}









