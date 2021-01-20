import React, { Component } from 'react';
import './navbar.scss';
import icon from './../../../assets/images/amazon-icon.jpeg';

export default class NavbarComponent extends Component{

    render(){
        return (
            <div className="navbar navbar--size navbar--theme">
                <div className="navbar__left navbar__left--size">
                    <div className="navbar__logo navbar__logo--size">
                        <a href="#" className="navbar__logo-link">
                            <span className="navbar__logo-base"/>
                        </a>
                    </div>
                </div>
                <div className="navbar__center">

                </div>
                <div className="navbar__right"></div>
            </div>
        )
    }
}