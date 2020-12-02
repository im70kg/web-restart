// 子类
(function () {
  class Slider extends BaseSlider {
    constructor(el, options) {
      super(el, options);
      this._bindEvent();
    }

    _bindEvent() {
      document.addEventListener(
        'keyup',
        ev => {
          if (ev.keyCode === 37) {
            this.prev();
          } else if (ev.keyCode === 39) {
            this.next();
          }
        },
        false
      );
    }
  }

  window.Slider = Slider;
})();
