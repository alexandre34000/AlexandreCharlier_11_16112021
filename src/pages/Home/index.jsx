import { Component } from 'react';
import Bandeau from '../../components/Bandeau';
import ContainerCards from '../../components/ContainerCards'

/**
 * Component Main of Home's page
 * 
 * @return DOM of main
 */
class Home extends Component {

  render() {

    const property = {
      page: "Home",
      text: "Chez vous, partout et ailleurs",
      imgDesktop: `${process.env.PUBLIC_URL}/assets/home-banner-1240x223.png`,
      imgMobile: `${process.env.PUBLIC_URL}/assets/home-banner-335x111.png`,
      alt: "Représentation d'une falaise qui surplombe la mer avec la vue sur des montagnes en fond"
    }
   
    return (
        <div className="home-content">
          <div className="home-content__bandeau">
            <Bandeau {...property} />
          </div>
          <h1 className="sr-only">Présentation de nos logements en location</h1>
          <div className="home-content__gallery">
            <ContainerCards />
          </div>
        </div>
    );
  }
}

export default Home;
