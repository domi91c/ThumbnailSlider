"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ThumbnailSlider = function () {
    function ThumbnailSlider() {
        _classCallCheck(this, ThumbnailSlider);

        this.imagePaths = ["images/tns_1.jpg", "images/tns_2.jpg", "images/tns_3.jpg", "images/tns_4.jpg"];
        this.slides = document.getElementsByClassName("slide");
        this.lBut = document.getElementById("lBut");
        this.rBut = document.getElementById("rBut");
        this.nextSlButton = document.getElementById("slButtonNext");
        this.prevSlButton = document.getElementById("slButtonPrev");
        this.slideIndex = 0;
        this.slides[0].style.display = "block";
        this.slButtons = document.getElementsByClassName("slButton");

        this.prev();
        this.next();
        this.prevSlideButton();
        this.nextSlideButton();
        this.slideButtonClick();

        this.imageStack = new ImageStack(this.imagePaths);
    }

    _createClass(ThumbnailSlider, [{
        key: "prev",
        value: function prev() {
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
        key: "showSlide",
        value: function showSlide(slideNum) {
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
                    _this3.showSlide(i);
                };
            };

            for (var i = 0; i < this.slButtons.length; i++) {
                _loop(i);
            }
        }
    }, {
        key: "nextSlideButton",
        value: function nextSlideButton() {
            var _this4 = this;

            this.nextSlButton.onclick = function () {
                console.log(_this4.imageStack.nextImageSrc());
                _this4.slideButtonRefresh();
            };
        }
    }, {
        key: "prevSlideButton",
        value: function prevSlideButton() {
            var _this5 = this;

            this.prevSlButton.onclick = function () {
                console.log(_this5.imageStack.prevImageSrc());
                _this5.slideButtonRefresh();
            };
        }
    }, {
        key: "printImgSrc",
        value: function printImgSrc() {
            for (var i = 0; i < 4; i++) {
                var image = this.slButtons[i].children[0];
                image.src = this.imagePaths[i + 1];
            }
        }
    }, {
        key: "slideButtonRefresh",
        value: function slideButtonRefresh() {
            for (var i = 0; i < this.slButtons.length; i++) {
                var image = this.slButtons[i].children[0];
                image.src = this.imageStack.stack[i];
            }
        }
    }]);

    return ThumbnailSlider;
}();

var ImageStack = function () {
    function ImageStack(imagePaths) {
        _classCallCheck(this, ImageStack);

        console.log("=============\nImage Stack\n=============");
        this.imagePaths = imagePaths;
        this.stack = this.imagePaths;
        console.log(this.stack);
    }

    _createClass(ImageStack, [{
        key: "prevImageSrc",
        value: function prevImageSrc() {
            console.log("prev clicked");
            var tempImage = this.stack.pop();
            this.stack.unshift(tempImage);
            return this.stack;
        }
    }, {
        key: "nextImageSrc",
        value: function nextImageSrc() {
            console.log("next clicked");
            var tempImage = this.stack.shift();
            this.stack.push(tempImage);
            return this.stack;
        }
    }]);

    return ImageStack;
}();

thumbnailSlider = new ThumbnailSlider();
//# sourceMappingURL=main.js.map