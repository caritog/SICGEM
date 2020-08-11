import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    render() {
        return (
            <div>
            <div id="footer" className="footer-section">
                <div className="footer-inner-wrapper">
                    <div id="footer-widgets-container" className="footer-widgets-section">
                        <div className="container">
                            <div className="tpath-row row">
                                <div id="footer-widgets-1" className="footer-widgets col-sm-4">
                                    <div id="text-2" className="widget widget_text">
                                        <div className="textwidget">
                                            <img src={require("../images/sicgem-logo-invertido.png")} alt="Logo invertido" />
                                            <div className="footer-sicgem-logo"></div>
                                        </div>
                                    </div>
                                    <div id="text-3" className="widget widget_text">
                                        <div className="textwidget">
                                            <div className="contact_info-inner">
                                                <p className="email_1">
                                                    <span className="contact-widget-title footer-white-text">Email: </span>
                                                    <span className="contact-widget-text">
                                                        <a href="mailto:comunicaciones.mujeres@medellin.gov.co">
                                                            comunicaciones.mujeres@medellin.gov.co
                                                        </a>
                                                    </span>
                                                </p>
                                                <p className="telephone">
                                                    <span className="contact-widget-title footer-white-text">Teléfono:</span>
                                                    <span className="contact-widget-text footer-white-text">(574)3855424</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tpath_social_links_widget-widget-2" className="widget tpath_social_links_widget">
                                        <ul className="tpath-social-icons widget-soc-icon">
                                            <li className="facebook">
                                                <a target="_blank" rel="noopener noreferrer" href="//www.facebook.com/AlcaldiadeMed/">
                                                    <i><FontAwesomeIcon icon={faFacebook}/></i>
                                                </a>
                                            </li>
                                            <li className="twitter">
                                                <a target="_blank" rel="noopener noreferrer" href="//www.twitter.com/AlcaldiadeMed/">
                                                    <i><FontAwesomeIcon icon={faTwitter}/></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="footer-widgets-2" className="footer-widgets col-sm-4">
                                    <div id="nav_menu-3" className="widget widget_nav_menu">
                                        <h3 className="widget-title">Mapa del sitio</h3>
                                        <div className="menu-mapa-del-sitio-container">
                                            <ul id="menu-mapa-del-sitio" className="menu">
                                                <li id="menu-item-1079"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1079">
                                                    <a href="//www.medellin.gov.co/sicgem/?page_id=803">Noticias</a>
                                                </li>
                                                <li id="menu-item-1078"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1078">
                                                    <a href="//www.medellin.gov.co/sicgem/?page_id=1055">Publicaciones</a>
                                                </li>
                                                <li id="menu-item-1080"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1080">
                                                    <a href="//www.medellin.gov.co/sicgem/?post_type=tribe_events">Eventos</a>
                                                </li>
                                                <li id="menu-item-1081"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1081">
                                                    <a href="//www.medellin.gov.co/sicgem/?page_id=363">Contacto</a>
                                                </li>
                                                <li id="menu-item-1207"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1207">
                                                    <a href="//www.medellin.gov.co/sicgem/?page_id=1202">Donde encontrarnos</a>
                                                </li>
                                                <li id="menu-item-1935"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1935">
                                                    <a href="//www.medellin.gov.co/sicgem/?page_id=1930&amp;preview=true">Habeas Data</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div id="footer-widgets-3" className="footer-widgets col-sm-4">
                                    <div id="text-4" className="widget widget_text">
                                        <div className="textwidget"></div>
                                    </div>
                                    <div id="media_image-2" className="widget widget_media_image">
                                        <img width="254" height="171" src={require('../images/alcaldia-de-medellin.png')}
                                        className="image wp-image-2652  attachment-full size-full" alt="logo invertido" style={{maxwidth: '100%', height: 'auto'}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer-copyright-container" className="footer-copyright-section">
                    <div className="container text-center">
                        <div className="tpath-row">
                            <div id="copyright-text" className="copyright-info">
                                <p className="copy">Copyright 2020 by <a href="//www.medellin.gov.co/sicgem/">SICGEM</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
};

export default Footer;