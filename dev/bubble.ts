 
    class Bubble { 
        private yposition = Math.random() * window.innerHeight
        private xposition = Math.random() * window.innerWidth
        private element:HTMLElement;
        
        
    
        constructor() { 
            
            this.element = document.createElement("bubble")
            document.body.appendChild(this.element)
            
          
    
    
        }
        public update(){ 
           
            this.element.style.left = this.xposition + "px";
            this.element.style.top = this.yposition + "px";
        }
    }
    
    
