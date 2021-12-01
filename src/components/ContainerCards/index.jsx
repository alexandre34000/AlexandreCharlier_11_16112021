import { Component } from 'react'
import Cards from '../../components/Cards';
import Data from '../../data.json';

class ContainerCards extends Component {

    render() {
        const property = [];
        Data.forEach((el) => {
            property.push(
                <Cards key={el.id} id={el.id} cover={el.cover} title={el.title} />
            )
        })
        return (
                <div className="content-gallery">
                    {property}
                </div>
        )
    }
}


export default ContainerCards