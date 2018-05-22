 
    class Bubble { 
        private yposition:number 
        private xposition:number
        private element:HTMLElement;

        
    
        constructor() { 
            
            this.element = document.createElement("bubble")
            document.body.appendChild(this.element)
            
            this.yposition = Math.random() * window.innerHeight
            this.xposition = Math.random() * window.innerWidth

    
    
        }
        public update(){ 
           
            this.element.style.left = this.xposition + "px";
            this.element.style.top = this.yposition + "px";
        }
    }
    
    
