import { Component } from "react";

class StarRating extends Component {

    getStars = (array, rating) => {
        [...Array(5)].forEach((star, index) => {
            index += 1;
            array.push(
                <span key={`${index}`} className={index <= rating ? "star on" : "star off"}></span>
            )
        })
    }

    render() {
        const elements = [];
        const nbOfRating = parseInt(this.props.number);
        this.getStars(elements, nbOfRating);

        return (
                <span role="img" aria-label={`Rating de ${this.props.number} étoiles sur 5 `}  className="content-stars">
                    {elements}
                </span>
        )
    }
}

export default StarRating