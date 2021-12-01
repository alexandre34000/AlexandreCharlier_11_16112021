import { Component } from "react";
import logoKasa from '../../assets/logoKasaWhite.png'

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer-content">
                    <img className="footer-content__logo"src={ logoKasa } alt="Kasa" />
                    <p className="footer-content__p"> © 2020 Kasa. All rights reserved</p>
                </div>
            </div>
        )
    }
}

export default Footer