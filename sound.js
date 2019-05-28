function soundManager() {
    var audios = {
        coin : new Audio('sound/coin.mp3'),
        jump: new Audio('sound/jump.mp3'),
        main : new Audio('sound/music.mp3'),
        lose : new Audio('sound/lose.mp3'),
        gameOver: new Audio('sound/gameover.mp3'),
        levelUp : new Audio('sound/levelup.mp3')
    }

    var mute = false;
    if (arguments.callee._singletonInstance) {
        return arguments.callee._singletonInstance;
    }

    arguments.callee._singletonInstance = this;

    this.CoinCollected = function () {
        if (!mute) {
            audios.brick.play();
        }
    };

    this.paddleHit = function () {
        if (!mute) {
           audios.paddle.play();
        }
    };

    this.gameStart = function () {
        if (!mute) {
          audios.start.play();
        }
    };

    this.loseLife = function () {
        if (!mute) {
            audios.lose.play();
        }
    };

    this.gameOver = function () {
        if (!mute) {
           audios.gameOver.play();
        }
    };
    this.levelUp = function () {
        if (!mute) {
           audios.levelUp.play();
        }
    };
    music = new Audio('sound/Hit_It_Hard.mp3');
    this.toggleBackground = function () {
        if (music.paused) {
            music.addEventListener('ended', function () {
                this.currentTime = 0;
                this.play();
            }, false);
            music.play();
        } else {
            music.pause();
        }


    };

    //   this.menuBackground = function () {
    //      if (!mute) {
    //          var audio = new Audio('sound/menu.wav');
    //          audio.addEventListener('ended', function () {
    //              this.currentTime = 0;
    //              this.play();
    //          }, false);
    //          audio.play();
    //          audio.volume=0.5
    //      }
    //  };
    this.setMute = function () {
        mute = !mute;
    }
}
