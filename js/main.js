(function() {
  window.addEventListener('keydown',function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.sound[data-key="${e.keyCode}"]`);
    const keys = document.querySelectorAll('.sound');

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

    function remonveTransition(e) {
      if(e.propertyName !== 'transform') return;

      this.classList.remove('playing');
    }

    keys.forEach(key => key.addEventListener('transitionend', remonveTransition));
  });
})();
