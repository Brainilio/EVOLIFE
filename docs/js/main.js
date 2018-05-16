"use strict";
var Game = (function () {
    function Game() {
        var c = new Protero();
        this.gameLoop();
        console.log("Hoi");
        c.update();
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
        this.element = document.createElement("protero");
        document.body.appendChild(this.element);
    }
    Protero.prototype.update = function () {
        this.element.style.transform = "translate(100px, 100px)";
    };
    return Protero;
}());
//# sourceMappingURL=main.js.map