 
    class Bubble { 
        private yposition:number 
        private xposition:number
        private element:HTMLElement;

        frames = 10
        frame = 0
        frameWidth = 850
        speedcounter = 0



        
    
        constructor() { 
            this.frame = 0    


            
            this.element = document.createElement("bubble")
            document.body.appendChild(this.element)
         
            
            this.xposition = this.randomNumber(0, window.innerWidth-130)
            this.yposition = this.randomNumber(0, window.innerHeight-130)
    
    
        }
        public update(){ 
           
            this.speedcounter++

                        let framerate = 30
                        if(this.speedcounter%framerate == 0) 
                        { 
                            this.frame++
                            
                        }
                        if(this.frame >= this.frames) this.frame = 1 

                        console.log(this.frame);
                        

                        let pos = 0 - (this.frame*this.frameWidth)
                        this.element.style.backgroundPosition = pos + 'px,  1000px'
           
                        this.element.style.transform = `translate(${this.xposition}px, ${this.yposition}px)`  
        }

        public dead() {  
          // (this.element.classList.add("dead"), 5000)
      
        
        }
       

    
        randomNumber(min:number, max:number) {
            let a:number = Math.floor(Math.random() * (max - min + 1) ) + min;
            return a
        }

        public getRectangle() {
            return this.element.getBoundingClientRect()
    }
    
    }
    

    
