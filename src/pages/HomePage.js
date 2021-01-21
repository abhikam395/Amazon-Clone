import React, { Component, Fragment } from 'react';

import NavbarComponent from '../components/navbar/NavbarComponent';
import MainHomeLayout from './../layouts/home/MainHomeLayout';

export default class HomePage extends Component{
    render(){
        return (
            <Fragment>
                <NavbarComponent/>
                <MainHomeLayout/>
            </Fragment>
        )
    }
}