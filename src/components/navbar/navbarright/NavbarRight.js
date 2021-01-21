import { Button } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import './navbarright.scss';
import { ArrowDropDown
 } from '@material-ui/icons';

export default class NavbarRight extends Component{

    constructor(){
        super();
    }

    componentDidMount(){
        this.onHover();
    }

    onHover(){
        let button = document.getElementById('select-language-btn');
        let content = document.getElementById('content');
        let mainhome = document.getElementById('mainhome-transparent');
        
        button.addEventListener('mouseenter', () => {
            content.style.display = 'block';
            mainhome.style.backgroundColor = 'grey'
            mainhome.style.opacity = '0.8';
        })

        button.addEventListener('mouseleave', () => {
            content.style.display = 'none';
            mainhome.style.backgroundColor = 'transparent'
            mainhome.style.opacity = '1';
        })
    }
    
    render(){
        return (
            <Fragment>
                <Button className="select-language" id="select-language-btn">
                    <span className="flag"></span>
                    <ArrowDropDown className="arrowdropdown"/>
                    <div className="content" id="content">
                        <h1>dfsdfsdfsdfsdf</h1>
                        <h2>sdfsdfsdf</h2>
                    </div>
                </Button>
            </Fragment>
        )
    }
}