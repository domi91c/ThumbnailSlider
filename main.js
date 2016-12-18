class ThumbnailSlider {
    constructor() {
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

    previous() {
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

    goToSlide(slideNum) {
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";
        }
        this.slides[slideNum].style.display = "block";
    }

    slideButtonClick() {
        for (let i = 0; i < this.slButtons.length; i++) {
            this.slButtons[i].onclick = () => {
                this.goToSlide(i)
            }
        }
    }
}


thumbnailSlider = new ThumbnailSlider();
