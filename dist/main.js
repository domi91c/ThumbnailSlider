"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ThumbnailSlider = function () {
    function ThumbnailSlider() {
        _classCallCheck(this, ThumbnailSlider);

        this.slides = document.getElementsByClassName("slide");
        this.lBut = document.getElementById("lBut");
        this.rBut = document.getElementById("rBut");
        this.slideIndex = 0;
        this.slides[0].style.display = "block";
        this.slButtons = document.getElementsByClassName("slButton");

        this.previous();
        this.next();
        this.slideButtonClick();
    }

    _createClass(ThumbnailSlider, [{
        key: "previous",
        value: function previous() {
            var _this = this;

            this.lBut.onclick = function () {
                for (var i = 0; i < _this.slides.length; i++) {
                    _this.slides[i].style.display = "none";
                }
                if (_this.slideIndex < _this.slides.length - 1) {
                    _this.slideIndex++;
                } else {
                    _this.slideIndex = 0;
                }
                _this.slides[_this.slideIndex].style.display = "block";
            };
        }
    }, {
        key: "next",
        value: function next() {
            var _this2 = this;

            this.rBut.onclick = function () {
                for (var i = 0; i < _this2.slides.length; i++) {
                    _this2.slides[i].style.display = "none";
                }
                if (_this2.slideIndex > 0) {
                    _this2.slideIndex--;
                } else {
                    _this2.slideIndex = _this2.slides.length - 1;
                }
                _this2.slides[_this2.slideIndex].style.display = "block";
            };
        }
    }, {
        key: "goToSlide",
        value: function goToSlide(slideNum) {
            for (var i = 0; i < this.slides.length; i++) {
                this.slides[i].style.display = "none";
            }
            this.slides[slideNum].style.display = "block";
        }
    }, {
        key: "slideButtonClick",
        value: function slideButtonClick() {
            var _this3 = this;

            var _loop = function _loop(i) {
                _this3.slButtons[i].onclick = function () {
                    _this3.goToSlide(i);
                };
            };

            for (var i = 0; i < this.slButtons.length; i++) {
                _loop(i);
            }
        }
    }]);

    return ThumbnailSlider;
}();

thumbnailSlider = new ThumbnailSlider();
//# sourceMappingURL=main.js.map