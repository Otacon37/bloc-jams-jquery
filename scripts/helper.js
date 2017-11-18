class Helper {
    playPauseAndUpdate (song) {

    player.playPause(song);
    const totalDuration = player.getDuration();
      $('#time-control .total-time').text(totalDuration);
    }
  }

const helper = new Helper();
