import React, { Component, Fragment } from 'react';
import './navbarleft.scss';

import { LocationOn } from '@material-ui/icons';

export default class NavbarLeft extends Component{

    render(){
        return (
            <Fragment>
                <div className="navbar__logo navbar__logo--size">
                    <a href="#" className="navbar__logo-link">
                        <span className="navbar__logo-base"></span>
                    </a>
                </div>
                <div className="navbar__location">
                    <LocationOn/>
                    <div>
                        <span className="navbar__hello">Hello</span>
                        <span className="navbar__address-label">Select your address</span>
                    </div>
                </div>
            </Fragment>
        )
    }
}