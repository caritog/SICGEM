import React, { Component } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";

class MainPage extends Component {
    render() {
        return(
            <div>
                <Header/>
                <Navbar/>
                <Body/>
                <Footer/>
            </div>
        )
    }
};

export default MainPage;