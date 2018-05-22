 
    class Bubble { 
        private yposition:number 
        private xposition:number
        private element:HTMLElement;

        
    
        constructor() { 
            
            this.element = document.createElement("bubble")
            document.body.appendChild(this.element)
            
            this.xposition = this.randomNumber(0, window.innerWidth-130)
            this.yposition = this.randomNumber(0, window.innerHeight-130)
    
    
        }
        public update(){ 
           
            this.element.style.left = this.xposition + "px";
            this.element.style.top = this.yposition + "px";
        }

    
        randomNumber(min:number, max:number) {
            let a:number = Math.floor(Math.random() * (max - min + 1) ) + min;
            return a
        }
    
    }
    

    
