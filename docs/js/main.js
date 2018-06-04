"use strict";
var Bubble = (function () {
    function Bubble() {
        this.element = document.createElement("bubble");
        document.body.appendChild(this.element);
        this.xposition = this.randomNumber(0, window.innerWidth - 130);
        this.yposition = this.randomNumber(0, window.innerHeight - 130);
    }
    Bubble.prototype.update = function () {
        this.element.style.left = this.xposition + "px";
        this.element.style.top = this.yposition + "px";
    };
    Bubble.prototype.dead = function () {
        (this.element.classList.add("dead"), 5000);
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
var deadBall = (function () {
    function deadBall() {
        this.element = document.createElement("deadball");
        document.body.appendChild(this.element);
        this.xposition = window.innerWidth;
        this.yposition = Math.random() * (window.innerHeight - 100);
        this.speedX = -3 - (Math.random() * 6);
        this.speedY = Math.random() * 6 - 3;
    }
    deadBall.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    deadBall.prototype.update = function () {
        this.xposition += this.speedX;
        this.yposition += this.speedY;
        if (this.yposition + this.getRectangle().height > window.innerHeight || this.yposition < 0) {
            this.speedY *= -1;
        }
        if (this.xposition > window.innerWidth) {
            this.speedX *= -1;
        }
        this.element.style.left = this.xposition + "px";
        this.element.style.top = this.yposition + "px";
    };
    deadBall.prototype.dead = function () {
        (this.element.classList.add("dead"), 5000);
    };
    return deadBall;
}());
var Game = (function () {
    function Game() {
        this.screen = new StartScreen(this);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.screen.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.emptyScreen = function () {
        document.body.innerHTML = " ";
    };
    Game.prototype.showPlayScreen = function (screen) {
        this.screen = screen;
    };
    Game.prototype.showGameoverScreen = function (screen) {
        this.screen = screen;
    };
    return Game;
}());
var GameOver = (function () {
    function GameOver(g) {
        var _this = this;
        this.game = g;
        this.div = document.createElement("splash");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () { return _this.splashClicked(); });
        this.div.innerHTML = "YOU DIED, TRY AGAIN!";
    }
    GameOver.prototype.update = function () {
    };
    GameOver.prototype.splashClicked = function () {
        this.game.emptyScreen();
        this.game.showPlayScreen(new Playscreen(this.game));
    };
    return GameOver;
}());
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
                this.upSpeed = 8;
                break;
            case this.downkey:
                this.downSpeed = 8;
                break;
            case this.leftkey:
                this.leftSpeed = 8;
                break;
            case this.rightkey:
                this.rightSpeed = 8;
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
    Paddle.prototype.getRectangleq = function () {
        return this.div.getBoundingClientRect();
    };
    return Paddle;
}());
var Playscreen = (function () {
    function Playscreen(g) {
        this.score = 0;
        this.deads = 0;
        this.deadball = [];
        this.level = 0.05;
        this.game = g;
        this.scoreElement = document.createElement('score');
        document.body.appendChild(this.scoreElement);
        this.scoreElement.innerHTML = "Score: 0";
        this.deadElement = document.createElement('dead');
        document.body.appendChild(this.deadElement);
        this.deadElement.innerHTML = "Lives left: 3000 ";
        this.bubbles = [];
        this.deadball = [];
        for (var i = 0; i < 25; i++) {
            var d = new Bubble();
            this.bubbles.push(d);
        }
        this.paddle = new Paddle();
        this.update();
    }
    Playscreen.prototype.update = function () {
        for (var _i = 0, _a = this.bubbles; _i < _a.length; _i++) {
            var b_1 = _a[_i];
            var hit = this.checkCollision(this.paddle.getRectangle(), b_1.getRectangle());
            if (hit) {
                b_1.dead();
                this.level += 0.001;
                this.score++;
                this.scoreElement.innerHTML = "Score: " + this.score;
            }
            if (this.score == 100) {
                this.game.showGameoverScreen;
            }
            b_1.update();
        }
        this.paddle.update();
        for (var _b = 0, _c = this.deadball; _b < _c.length; _b++) {
            var b = _c[_b];
            if (this.checkCollision(b.getRectangle(), this.paddle.getRectangle())) {
                this.deads -= 1;
                this.deadElement.innerHTML = "Score: " + this.deads;
                b.dead();
            }
            b.update();
        }
        if (Math.random() < this.level) {
            this.deadball.push(new deadBall());
        }
    };
    Playscreen.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    return Playscreen;
}());
window.addEventListener("load", function () {
    new Game();
});
var StartScreen = (function () {
    function StartScreen(g) {
        var _this = this;
        this.game = g;
        this.div = document.createElement("splash");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () { return _this.splashClicked(); });
        this.div.innerHTML = "START THE GAME";
    }
    StartScreen.prototype.update = function () {
    };
    StartScreen.prototype.splashClicked = function () {
        this.game.emptyScreen();
        this.game.showPlayScreen(new Playscreen(this.game));
    };
    return StartScreen;
}());
//# sourceMappingURL=main.js.map