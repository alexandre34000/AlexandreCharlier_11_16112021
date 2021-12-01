import { Component } from 'react';
import Bandeau from '../../components/Bandeau';
import Dropdown from '../../components/DropDown'
import Fr from '../../i18n/fr.json'

class About extends Component {

    getArrayOfDescriptif = (value) => {
        let arrayOfValue = [];
        if (Array.isArray(value)) {
            value.map((el) => arrayOfValue.push(el));
        } else if (typeof value === "string") {
            arrayOfValue.push(value);
        }
        return arrayOfValue;
    }


    render() {
        const collapse = [];
        const property = {
            page: "About",
            text: "",
            imgDesktop: `${process.env.PUBLIC_URL}/assets/about-banner-1240x223.png`,
            imgMobile: `${process.env.PUBLIC_URL}/assets/about-banner-336x223.png` ,
            alt: "vue sur des montagnes et un lac"
        }
        const dropDownContent = {
            Fiabilité: this.getArrayOfDescriptif(Fr.pageAbout.Fiabilité),
            Respect: this.getArrayOfDescriptif(Fr.pageAbout.Respect),
            Service: this.getArrayOfDescriptif(Fr.pageAbout.Service),
            Sécurité: this.getArrayOfDescriptif(Fr.pageAbout.Sécurité),
        };

        Object.entries(dropDownContent).forEach(([k, v]) => {
            collapse.push(
                <Dropdown key={`${k}`} title={k} content={v} />)
        })

        return (
            <div className="about-content">
                <div className="about-content__bandeau" aria-hidden="true">
                    <Bandeau {...property} />
                </div>
                <h1 className="sr-only">Charte qualité de nos services</h1>
                <div className="about-dropdown">
                    {collapse}
                </div>
            </div>
        )
    }
}

export default About;