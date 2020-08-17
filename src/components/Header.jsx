import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid img-responsive d-flex flex-column flex-md-row align-items-center pt-4 pr-3 pl-3 pb-4 px-md-4 bg-white border-bottom box-shadow">
                <img className="my-0 mr-md-auto font-weight-normal img-responsive standard-logo" src={require('../images/sicgem-logo.png')} alt="Logo SICGEM"
                    href="//www.medellin.gov.co/sicgem/" width="" height="100" />
                <a className="btn facebook-icon p-0" target="_blank" rel="noopener noreferrer" href="//www.facebook.com/AlcaldiadeMed/">
                    <i><FontAwesomeIcon icon={faFacebook} /></i>
                </a>
                <a className="btn twitter-icon p-0 " target="_blank" rel="noopener noreferrer" href="//twitter.com/AlcaldiadeMed">
                    <i><FontAwesomeIcon icon={faTwitter} /></i>
                </a>
            </div>
        )
    }
};

export default Header;