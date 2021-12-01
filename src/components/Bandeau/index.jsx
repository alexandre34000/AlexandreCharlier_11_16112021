import { Component } from 'react'

class Bandeau extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page,
            texte: this.props.text,
            imageDesktop: this.props.imgDesktop,
            imageMobile: this.props.imgMobile,
            alt: this.props.alt,
            filter: this.getClassFilter(this.props.page)
        }
    }

    getClassFilter(page) {
        return page === "Describ" ? "noFilter" : "filter"
    }

    render() {
        return (
            <picture className="bandeau-content">
            <source media="(max-width: 780px)" srcSet={this.state.imageMobile} />
                <img className={`bandeau-content__img  ${this.state.filter}`} src={this.state.imageDesktop} alt={this.state.alt} />
                <p className="bandeau-content__text">{this.state.texte}</p>
            </picture>
        )
    }
}

export default Bandeau;
