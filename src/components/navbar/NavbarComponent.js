import React, { Component } from 'react';
import './navbar.scss';

import SearchBox from './searchbox/Searchbox';
import NavbarRight from './navbarright/NavbarRight';
import NavbarLeft from './navbarleft/NavbarLeft';

export default class NavbarComponent extends Component{

    render(){
        return (
            <div className="navbar navbar--size navbar--theme">
                <div className="navbar__left">
                    <NavbarLeft/>
                </div>
                <div className="navbar__center">
                    <SearchBox/>
                </div>
                <div className="navbar__right">
                    <NavbarRight/>
                </div>
            </div>
        )
    }
}