import { Component } from "react";

class SlideShow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: this.props.images[0],
            currentIndex: 0,
            alt: "",
            animateTimer: '',
            touchStart: 0,
            touchEnd: 0
        }
    }

    componentDidMount = () => {
        this.startAnimation();
    }

    componentWillUnmount = () => {
        this.stopAnimation();
    }

    startAnimation = () => {
        this.animate = setInterval(() => {
            this.toMoveSlide("rigth")
        }, 3000);
        this.setState({ animateTimer: this.animate })
    }

    stopAnimation = () => {
        clearInterval(this.state.animateTimer);
    }

    handleButtonClick = (e) => {
        let pos = e.target.dataset.position;
        this.toMoveSlide(pos)
    }

    handleTouchStart = (e) => {
        this.stopAnimation();
        this.setState({ touchStart: e.targetTouches[0].clientX });
    }

    handleTouchMove = (e) => {
        this.setState({ touchEnd: e.targetTouches[0].clientX })
    }

    handleTouchEnd = (e) => {
        this.startAnimation();
        let direction = (this.state.touchStart - this.state.touchEnd) > 100 ? "right" : "left";
        this.toMoveSlide(direction)
    }

    toMoveSlide = (direction) => {
        const size = this.props.images.length;
        let currentIndex = this.state.currentIndex;
        let newIndex = (direction === "left" ? --currentIndex : ++currentIndex);
        if (newIndex === size) {
            newIndex = 0;
        }
        else if (newIndex < 0) {
            newIndex = (size - 1);
        }
        this.setState(() => {
            return {
                image: this.props.images[newIndex],
                currentIndex: newIndex
            }
        })
    }

    render() {
        return (
            <div className="content-slideShow" id="slider" onMouseEnter={this.stopAnimation} onMouseLeave={this.startAnimation} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} onTouchEnd={this.handleTouchEnd} >
                <img className="slideShow-img" src={this.state.image} alt={this.state.alt} />
                <span className="slideShow-arrow left" aria-label="image prédente" data-position="left" onClick={this.handleButtonClick}></span>
                <span className="slideShow-arrow right" aria-label="image suivante" data-position="right" onClick={this.handleButtonClick}></span>
                <span className="slideShow-number">{this.state.currentIndex + 1}/{this.props.images.length}</span>
            </div>

        )
    }
}

export default SlideShow
