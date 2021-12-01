import { Component } from 'react';

class Tags extends Component {

    render(){
        return(
                <li className="content-tags">{this.props.name}</li>  
        )
    }
}
export default Tags