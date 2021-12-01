import { Component } from 'react';
import Arrow from '../../../assets/arrowup.png'

class CollapseBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            rotate: false,
        }
    }

    handleButtonClick = (e) => {
        e.preventDefault();
        this.setState((state) => {
            return {
                isOpen: !state.isOpen,
                rotate: !state.rotate,
            };
        });
        this.props.toContentChange();
    }
    render() {

        return (
            <button className="dropdown-btn"
                onClick={this.handleButtonClick} aria-expanded={this.state.isOpen} aria-controls="list" >
                <img className={this.state.rotate ? " dropdown-btn__arrowup" : " dropdown-btn__arrowup rotate"} src={Arrow} alt="arrow icone" aria-hidden="true"/>
                {this.props.title}
            </button>
        )
    }
}
export default CollapseBar