class ThumbnailSlider {
    constructor() {
        this.imagePaths = ["images/tns_1.jpg", "images/tns_2.jpg", "images/tns_3.jpg", "images/tns_4.jpg"];
        this.slides = document.getElementsByClassName("slide");
        this.slideButtonPrev = document.getElementById("slideButtonPrev");
        this.slideButtonNext = document.getElementById("slideButtonNext");
        this.thumbButtonPrev = document.getElementById("thumbButtonPrev");
        this.thumbButtonNext = document.getElementById("thumbButtonNext");
        this.slideIndex = 0;
        this.slides[0].style.display = "block";
        this.thumbButtons = document.getElementsByClassName("thumb-button");

        this.prevSlide();
        this.nextSlide();
        this.prevThumbButton();
        this.nextThumbButton();
        this.slideButtonClick();

        this.imageStack = new ImageStack(this.imagePaths);
    }

    nextSlide() {
        this.slideButtonNext.onclick = () => {
            console.log("clicked next slide button.");
            for (let i = 0; i < this.slides.length; i++) {
                this.slides[i].style.display = "none";
            }
            if (this.slideIndex < this.slides.length - 1) {
                this.slideIndex++;
            } else {
                this.slideIndex = 0;
            }
            this.showSlide(this.slideIndex);
        };
    }

    prevSlide() {
        this.slideButtonPrev.onclick = () => {
            for (let i = 0; i < this.slides.length; i++) {
                this.slides[i].style.display = "none";
            }
            if (this.slideIndex > 0) {
                this.slideIndex--;
            } else {
                this.slideIndex = this.slides.length - 1;
            }
            this.showSlide(this.slideIndex);
        };
    }

    showSlide(slideNum) {
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";
        }
        this.slides[slideNum].style.display = "block";
    }

    slideButtonClick() {
        for (let i = 0; i < this.thumbButtons.length; i++) {
            this.thumbButtons[i].onclick = () => {
                this.showSlide(i)
            }
        }
    }

    nextThumbButton() {
        this.thumbButtonNext.onclick = () => {
            console.log(this.imageStack.nextImage());
            this.thumbButtonRefresh();
        }

    }

    prevThumbButton() {
        this.thumbButtonPrev.onclick = () => {
            console.log(this.imageStack.prevImage());
            this.thumbButtonRefresh();
        }
    }

    printImgSrc() {
        for (let i = 0; i < 4; i++) {
            let image = this.thumbButtons[i].children[0];
            image.src = this.imagePaths[i + 1];
        }
    }

    thumbButtonRefresh() {
        for (let i = 0; i < this.thumbButtons.length; i++) {
            let image = this.thumbButtons[i].children[0];
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

    prevImage() {
        let tempImage = this.stack.pop();
        this.stack.unshift(tempImage);
        return this.stack;
    }

    nextImage() {
        let tempImage = this.stack.shift();
        this.stack.push(tempImage);
        return this.stack;
    }

}

thumbnailSlider = new ThumbnailSlider();


