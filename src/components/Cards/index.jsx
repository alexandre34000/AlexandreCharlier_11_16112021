import { Component } from 'react';
import { Link } from 'react-router-dom';

class Cards extends Component {

    render() {
        return (
            <Link to={`/Describ/${this.props.id}`}>
                <section className="content-section">
                    <img className="content-section__img" src={this.props.cover} alt="" />
                    <h2 className="content-section__text">{this.props.title}</h2>
                </section>
            </Link>
        )
    }

}
export default Cards