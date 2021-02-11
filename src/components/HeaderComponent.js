import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Museum</h1>
                                <h2>the best museum in the world</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            <Navbar style={{backgroundColor: '#000000'}} sticky="top">
                <div className="container">
                    <NavbarBrand style={{color: '#ffffff'}} href="/">Museum</NavbarBrand>
                </div>
            </Navbar>
        </React.Fragment>
        );
    }
}

export default Header;