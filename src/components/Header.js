import React from "react";

import { Menu, Image, Row, Col } from "antd";
import weavLogo from "../assets/weavLogo.png";

export default class Header extends React.Component {
    state = {
        current: "mail",
    };

    handleClick = (e) => {
        console.log("click ", e);
        this.setState({ current: e.key });
    };
    render() {
        return (
            <Menu
                style={{
                    width: "100%",
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    zIndex: 1,
                }}
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item>Anasayfa</Menu.Item>
                <Menu.Item>Hakkımızda</Menu.Item>
                <Menu.Item>Projeler</Menu.Item>
                <Image src={weavLogo}></Image>
                <Menu.Item>Hizmetlerimiz</Menu.Item>
                <Menu.Item>Refaranslarımız</Menu.Item>
                <Menu.Item>İletişim</Menu.Item>
            </Menu>
        );
    }
}
