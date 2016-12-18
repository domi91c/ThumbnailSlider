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
        this.nextSlButton = document.getElementById("thumbButtonNext");
        this.prevSlButton = document.getElementById("thumbButtonPrev");
        this.slideIndex = 0;
        this.slides[0].style.display = "block";
        this.thumbButtons = document.getElementsByClassName("thumb-button");

        this.prev();
        this.next();
        this.prevThumbButton();
        this.nextThumbButton();
        this.slideButtonClick();

        this.imageStack = new ImageStack(this.imagePaths);
    }

    _createClass(ThumbnailSlider, [{
        key: "next",
        value: function next() {
            var _this = this;

            this.rBut.onclick = function () {
                for (var i = 0; i < _this.slides.length; i++) {
                    _this.slides[i].style.display = "none";
                }
                if (_this.slideIndex > 0) {
                    _this.slideIndex--;
                } else {
                    _this.slideIndex = _this.slides.length - 1;
                }
                _this.showSlide(_this.slideIndex);
            };
        }
    }, {
        key: "prev",
        value: function prev() {
            var _this2 = this;

            this.lBut.onclick = function () {
                for (var i = 0; i < _this2.slides.length; i++) {
                    _this2.slides[i].style.display = "none";
                }
                if (_this2.slideIndex < _this2.slides.length - 1) {
                    _this2.slideIndex++;
                } else {
                    _this2.slideIndex = 0;
                }
                _this2.showSlide(_this2.slideIndex);
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
                _this3.thumbButtons[i].onclick = function () {
                    _this3.showSlide(i);
                };
            };

            for (var i = 0; i < this.thumbButtons.length; i++) {
                _loop(i);
            }
        }
    }, {
        key: "nextThumbButton",
        value: function nextThumbButton() {
            var _this4 = this;

            this.nextSlButton.onclick = function () {
                console.log(_this4.imageStack.nextImage());
                _this4.thumbButtonRefresh();
            };
        }
    }, {
        key: "prevThumbButton",
        value: function prevThumbButton() {
            var _this5 = this;

            this.prevSlButton.onclick = function () {
                console.log(_this5.imageStack.prevImage());
                _this5.thumbButtonRefresh();
            };
        }
    }, {
        key: "printImgSrc",
        value: function printImgSrc() {
            for (var i = 0; i < 4; i++) {
                var image = this.thumbButtons[i].children[0];
                image.src = this.imagePaths[i + 1];
            }
        }
    }, {
        key: "thumbButtonRefresh",
        value: function thumbButtonRefresh() {
            for (var i = 0; i < this.thumbButtons.length; i++) {
                var image = this.thumbButtons[i].children[0];
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
        key: "prevImage",
        value: function prevImage() {
            var tempImage = this.stack.pop();
            this.stack.unshift(tempImage);
            return this.stack;
        }
    }, {
        key: "nextImage",
        value: function nextImage() {
            var tempImage = this.stack.shift();
            this.stack.push(tempImage);
            return this.stack;
        }
    }]);

    return ImageStack;
}();

thumbnailSlider = new ThumbnailSlider();
//# sourceMappingURL=main.js.map