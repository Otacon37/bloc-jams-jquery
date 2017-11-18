class Helper {
  playPauseAndUpdate (song) {
    if (player.playState !== 'playing') { return; }
    player.playPause(this);
    const duration = player.getDuration();
      $('#time-control .total-time').text(duration);
    }
  }

}

const helper = new Helper();
