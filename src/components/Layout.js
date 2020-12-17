import React from "react";

import Header from "./Header";
import Carousel from "./Carousel";


export default class Navbar extends React.Component {
    state = {};

    render() {
        return (
            <>
                <Header />
                <Carousel />
            </>
        );
    }
}
