class ThumbnailSlider {
    constructor() {
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

    prev() {
        this.lBut.onclick = () => {
            for (let i = 0; i < this.slides.length; i++) {
                this.slides[i].style.display = "none";
            }
            if (this.slideIndex < this.slides.length - 1) {
                this.slideIndex++;
            } else {
                this.slideIndex = 0;
            }
            this.slides[this.slideIndex].style.display = "block";
        };
    }

    next() {
        this.rBut.onclick = () => {
            for (let i = 0; i < this.slides.length; i++) {
                this.slides[i].style.display = "none";
            }
            if (this.slideIndex > 0) {
                this.slideIndex--;
            } else {
                this.slideIndex = this.slides.length - 1;
            }
            this.slides[this.slideIndex].style.display = "block";
        };
    }

    showSlide(slideNum) {
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";
        }
        this.slides[slideNum].style.display = "block";
    }

    slideButtonClick() {
        for (let i = 0; i < this.slButtons.length; i++) {
            this.slButtons[i].onclick = () => {
                this.showSlide(i)
            }
        }
    }

    nextSlideButton() {
        this.nextSlButton.onclick = () => {
            console.log(this.imageStack.nextImageSrc());
            this.slideButtonRefresh();
        }

    }

    prevSlideButton() {
        this.prevSlButton.onclick = () => {
            console.log(this.imageStack.prevImageSrc());
            this.slideButtonRefresh();
        }
    }

    printImgSrc() {
        for (let i = 0; i < 4; i++) {
            let image = this.slButtons[i].children[0];
            image.src = this.imagePaths[i + 1];
        }
    }

    slideButtonRefresh() {
        for (let i = 0; i < this.slButtons.length; i++) {
            let image = this.slButtons[i].children[0];
            image.src = this.imageStack.stack[i];
        }

    }

}

class ImageStack {
    constructor(imagePaths) {
        console.log("=============\nImage Stack\n=============");
        this.imagePaths = imagePaths;
        this.stack = this.imagePaths;
        console.log(this.stack);
    }

    prevImageSrc() {
        console.log("prev clicked");
        let tempImage = this.stack.pop();
        this.stack.unshift(tempImage);
        return this.stack;
    }

    nextImageSrc() {
        console.log("next clicked");
        let tempImage = this.stack.shift();
        this.stack.push(tempImage);
        return this.stack;
    }

}

thumbnailSlider = new ThumbnailSlider();


