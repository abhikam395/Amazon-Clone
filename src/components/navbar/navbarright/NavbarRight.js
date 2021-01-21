import { Button } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import './navbarright.scss';
import { ArrowDropDown
 } from '@material-ui/icons';

import UserContentLayout from './../../../layouts/home/navbarleft/UserContentLayout';

export default class NavbarRight extends Component{

    constructor(){
        super();
        this.state = {
            languages: [
                {id: 1, name: 'English - EN', checked: true},
                {id: 2, name: 'Hindi HI', checked: false},
                {id: 3, name: 'Tamil TA', checked: false},
                {id: 4, name: 'TE', checked: false},
                {id: 5, name: 'KN', checked: false},
                {id: 6, name: 'ML', checked: false},
            ],
            selectedLanguage: Element
        }
        this.languageOptions = this.languageOptions.bind(this);
    }

    componentDidMount(){
        this.onSelectLanguageHover();
        this.onHoverUserContent();
        let defaultRadioSelect = document.getElementsByClassName('language-radio')[0];

        defaultRadioSelect.checked = true;
        this.setState({
            selectedLanguage: defaultRadioSelect
        })
    }

    /**
     * when user hover in on drop down button
     * content layout will display
     * and then user can select any language
     * and when user hover out content layout will remove from display
     */
    onSelectLanguageHover(){
        let button = document.getElementById('select-language-btn');
        let content = document.getElementById('content');
        
        button.addEventListener('mouseenter', () => {
            content.style.display = 'block';
            this.transparentMainHome();
        })

        button.addEventListener('mouseleave', () => {
            content.style.display = 'none';
            this.undoTransparentMainHome();
        })
    }

    /**
     * when user select particular language
     * radio button set to checked
     */
    onRadioButtonChange(e){
        let target = e.target;
        this.state.selectedLanguage.checked = false;
        this.setState({
            selectedLanguage: target
        })
    }

    /**
     * generate list of language which user can select
     * @param {*} languages 
     */
    languageOptions(languages){
        var returnLineIfIdOne = (id) => {
            if(id == 1 || id == languages.length){
               return <hr className="content-line"/>
            }
        }

        return languages.map((language) => (
            <li key={language.id} className="language">
                <div className="content-en">
                    <input type="radio" className="language-radio"  
                        onClick={this.onRadioButtonChange.bind(this)}/>
                    <label className="language-label">{language.name}</label>
                </div>
                { returnLineIfIdOne(language.id) }
            </li>
        ))
    }

    //transparent mainhome content
    transparentMainHome(){
        let mainhome = document.getElementById('mainhome-transparent');
        mainhome.style.backgroundColor = 'grey'
        mainhome.style.opacity = '0.8';
    }

    //remove transpancy of mainhome content
    undoTransparentMainHome(){
        let mainhome = document.getElementById('mainhome-transparent');
        mainhome.style.backgroundColor = 'transparent'
        mainhome.style.opacity = '1';
    }

    /**
     * when user hover in on sign in or register button
     * UserContentLayout will display
     * and when user hover out 
     * UserContentLayout will remove from display
     */
    onHoverUserContent(){
        let userAuth = document.getElementById('navbar-auth');
        let usercontent = document.getElementById('user-content')
        userAuth.addEventListener('mouseenter', () => {
            usercontent.style.display = 'block';
            this.transparentMainHome();
        })
        userAuth.addEventListener('mouseleave', () => {
            usercontent.style.display = 'none';
            this.undoTransparentMainHome();
        })
    }
    
    render(){
        return (
            <Fragment>
                <div className="row">
                    <Button className="select-language" id="select-language-btn">
                        <span className="flag"></span>
                        <ArrowDropDown className="arrowdropdown"/>
                        <div className="content" id="content">
                            <ul className="languages">
                            {this.languageOptions(this.state.languages)}
                            </ul>
                        </div>
                    </Button>
                    <div className="navbar-auth" id="navbar-auth">
                        <span>Hello, Sign in</span>
                        <div className="row">
                            <h5>Account & Lists</h5>
                            <ArrowDropDown/>
                        </div>
                        <UserContentLayout/>
                    </div>
                </div>
            </Fragment>
        )
    }
}