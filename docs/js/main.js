"use strict";
var Bubble = (function () {
    function Bubble() {
        this.yposition = Math.random() * window.innerHeight;
        this.xposition = Math.random() * window.innerWidth;
        this.element = document.createElement("bubble");
        document.body.appendChild(this.element);
    }
    Bubble.prototype.update = function () {
        this.element.style.left = this.xposition + "px";
        this.element.style.top = this.yposition + "px";
    };
    return Bubble;
}());
var Game = (function () {
    function Game() {
        for (var i = 0; i < 25; i++) {
            var d = new Bubble();
            d.update();
        }
        for (var i = 0; i < 8; i++) {
            var c = new Protero();
            c.update();
        }
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Protero = (function () {
    function Protero() {
        this.yposition = Math.random() * window.innerHeight;
        this.xposition = Math.random() * window.innerWidth;
        this.element = document.createElement("protero");
        document.body.appendChild(this.element);
    }
    Protero.prototype.update = function () {
        this.element.style.left = this.xposition + "px";
        this.element.style.top = this.yposition + "px";
    };
    return Protero;
}());
//# sourceMappingURL=main.js.map