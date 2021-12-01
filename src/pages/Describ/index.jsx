import { Component } from 'react';
import Data from '../../data.json'
import Dropdown from '../../components/DropDown';
import Tags from '../../components/Tags';
import StarRating from '../../components/StarRating';
import SlideShow from '../../components/SlideShow';

class Describ extends Component {

  getUserInformation = (id) => {
    return Data.find(v => v.id === id)
  }

  getArrayOfProperty = (value) => {
    let arrayOfValue = [];
    if (Array.isArray(value)) {
      value.map((el) => arrayOfValue.push(el));
    } else if (typeof value === "string") {
      arrayOfValue.push(value);
    }
    return arrayOfValue;
  }

  render() {
    const userId = this.props.match.params.userId;
    const userInformation = this.getUserInformation(userId);
    const informations = [];
    const dropDownContent = {
      Description: this.getArrayOfProperty(userInformation.description),
      Equipements: this.getArrayOfProperty(userInformation.equipments)
    };
    Object.entries(dropDownContent).forEach(([k, v]) => {
      informations.push(
        <Dropdown key={`${k}`} title={k} content={v} />)
    })

    return (
      <div className=" descriptif-content">
      <h1 className="sr-only">Présentation du logement</h1>
        <div className="descriptif-content__slideshow" aria-hidden="true">
          <SlideShow images={userInformation.pictures} />
        </div>
        <div className="description-content__center">
          <div className="content-center__information-location">
            <h2>{userInformation.title} </h2>
            <p>{userInformation.location}</p>
            <ul className="information-location__tags" aria-label="les tags selectionnés sont " >
              {userInformation.tags.map((el) => (
                <Tags key={el} name={el} />
              ))}
            </ul>
          </div>
          <div className="content-center__information-user">
            <StarRating number={userInformation.rating} />
            <div className="information-user__card">
              <p>{userInformation.host.name}</p>
              <img src={userInformation.host.picture} alt={`visage de ${userInformation.host.name}`} aria-hidden="true"/>
            </div>
          </div>
        </div>
        <div className="description-dropDown">
          {informations}
        </div>
      </div>
    )
  }
}

export default Describ

