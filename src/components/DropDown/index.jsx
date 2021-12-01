import { Component } from 'react';
import Collapsebar from './CollapseBar'

class DropDown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toChangeVisibilityofContent = () => {
        this.setState((state) => {
            return { isOpen: !state.isOpen }
        })
    }

    render() {
        return (
            <div className="dropdown-content">
                <Collapsebar title={this.props.title} toContentChange={this.toChangeVisibilityofContent} />
                {this.state.isOpen && (
                    <div className="dropdown-list" id="list" tabIndex="-1">
                         <ul className="dropdown-list__ul">{
                            this.props.content.map((el) => (
                                <li  key={`${el}`}>{el}</li>
                            ))}
                        </ul> 
                    </div>
                )}
            </div>
        )
    }
}

export default DropDown
