 
    class Bubble { 
        private yposition:number 
        private xposition:number
        private xspeed:number = 2
        private yspeed:number = 2 
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

            if(this.xposition > window.innerWidth || this.xposition < 0) {  
                this.xspeed = this.xspeed * -1
            }
            if(this.yposition > window.innerHeight || this.yposition < 0) { 
                this.yspeed = this.yspeed * -1
            }
            this.element.style.transform = `translate($(this.xposition)px, $(this.yposition)px)`
        }
       

    
        randomNumber(min:number, max:number) {
            let a:number = Math.floor(Math.random() * (max - min + 1) ) + min;
            return a
        }

        public getRectangle() {
            return this.element.getBoundingClientRect()
    }
    
    }
    

    
