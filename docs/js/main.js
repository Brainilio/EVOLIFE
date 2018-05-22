"use strict";
var Bubble = (function () {
    function Bubble() {
        this.xspeed = 2;
        this.yspeed = 2;
        this.element = document.createElement("bubble");
        document.body.appendChild(this.element);
        this.xposition = this.randomNumber(0, window.innerWidth - 130);
        this.yposition = this.randomNumber(0, window.innerHeight - 130);
    }
    Bubble.prototype.update = function () {
        this.element.style.left = this.xposition + "px";
        this.element.style.top = this.yposition + "px";
        if (this.xposition > window.innerWidth || this.xposition < 0) {
            this.xspeed = this.xspeed * -1;
        }
        if (this.yposition > window.innerHeight || this.yposition < 0) {
            this.yspeed = this.yspeed * -1;
        }
        this.element.style.transform = "translate($(this.xposition)px, $(this.yposition)px)";
    };
    Bubble.prototype.randomNumber = function (min, max) {
        var a = Math.floor(Math.random() * (max - min + 1)) + min;
        return a;
    };
    Bubble.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    return Bubble;
}());
var Game = (function () {
    function Game() {
        for (var i = 0; i < 25; i++) {
            var d = new Bubble();
            d.update();
        }
        this.paddle = new Paddle();
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.paddle.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Paddle = (function () {
    function Paddle() {
        var _this = this;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.div = document.createElement("paddle");
        document.body.appendChild(this.div);
        this.upkey = 87;
        this.downkey = 83;
        this.leftkey = 68;
        this.rightkey = 65;
        this.x = 0;
        this.y = 200;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Paddle.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Paddle.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
            case this.leftkey:
                this.leftSpeed = 5;
                break;
            case this.rightkey:
                this.rightSpeed = 5;
                break;
        }
    };
    Paddle.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
            case this.leftkey:
                this.leftSpeed = 0;
                break;
            case this.rightkey:
                this.rightSpeed = 0;
                break;
        }
    };
    Paddle.prototype.update = function () {
        var newY = this.y - this.upSpeed + this.downSpeed;
        var newX = this.x - this.rightSpeed + this.leftSpeed;
        if (newY > 0 && newY + 100 < window.innerHeight)
            this.y = newY;
        if (newX > 0 && newX + 100 < window.innerWidth)
            this.x = newX;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Paddle;
}());
var Protero = (function () {
    function Protero() {
        var _this = this;
        this.yposition = Math.random() * window.innerHeight;
        this.xposition = Math.random() * window.innerWidth;
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.element = document.createElement("protero");
        document.body.appendChild(this.element);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Protero.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case 65:
                this.upSpeed = 5;
                break;
            case 68:
                this.downSpeed = 5;
                break;
            case 87:
                this.leftSpeed = 5;
                break;
            case 83:
                this.rightSpeed = 5;
                break;
        }
    };
    Protero.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case 65:
                this.upSpeed = 0;
                break;
            case 68:
                this.downSpeed = 0;
                break;
            case 87:
                this.leftSpeed = 0;
                break;
            case 83:
                this.rightSpeed = 0;
                break;
        }
    };
    Protero.prototype.update = function () {
        this.element.style.left = this.xposition + "px";
        this.element.style.top = this.yposition + "px";
    };
    return Protero;
}());
//# sourceMappingURL=main.js.map