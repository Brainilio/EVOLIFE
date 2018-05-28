class Paddle {

    private div: HTMLElement
    private x: number
    private y: number

    private downkey: number
    private upkey: number
    private leftkey: number 
    private rightkey: number

    private downSpeed: number = 0
    private upSpeed: number = 0
    private leftSpeed: number = 0 
    private rightSpeed: number = 0 

    constructor() {
        this.div = document.createElement("paddle")
        document.body.appendChild(this.div)

        this.upkey = 87
        this.downkey = 83
        this.leftkey = 68
        this.rightkey = 65


        this.x = 0
        this.y = 200

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    public getRectangle() {
        return this.div.getBoundingClientRect()
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 5
                break
            case this.downkey:
                this.downSpeed = 5
                break
            case this.leftkey:
                this.leftSpeed = 5
                break 
            case this.rightkey: 
                this.rightSpeed = 5
                break 

        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0
                break
            case this.downkey:
                this.downSpeed = 0
                break
            case this.leftkey:
                this.leftSpeed = 0
                break
            case this.rightkey:
                this.rightSpeed = 0
                break
        }
    }

    public update() {
        let newY = this.y - this.upSpeed + this.downSpeed
        let newX = this.x - this.rightSpeed + this.leftSpeed

        // check of de paddle binnen beeld blijft
        if (newY > 0 && newY + 100 < window.innerHeight) this.y = newY
        if (newX > 0 && newX + 100 < window.innerWidth) this.x = newX
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`

    }

    public getRectangleq() { 
        return this.div.getBoundingClientRect()
    }

}