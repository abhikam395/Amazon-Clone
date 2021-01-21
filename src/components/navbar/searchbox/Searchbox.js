import React, { Component } from 'react';
import './searchbox.scss';

import { Search } from '@material-ui/icons';

export default class SearchBox extends Component{

    constructor(){
        super();
        this.state = {
            categories: [
                {id: 1, name: 'All'},
                {id: 2, name: 'Sports'},
                {id: 3, name: 'Foods'},
                {id: 4, name: 'Toys'},
                {id: 5, name: 'Cloths'},
                {id: 6, name: 'Electronics'},
            ],
            query: null
        }
        this.returnCategories = this.returnCategories.bind(this);
    }

    returnCategories(categories){
        return categories.map(category => 
            (<option className="category" key={category.id}>{category.name}</option>))
    }

    search(){
        let query = document.getElementById('search-query');
        this.setQuery(query.value)
    }

    setQuery(query){
        this.setState({
            query: query
        })
    }

    render(){
        return (
            <div className="searchbox searchbox--size searchbox--theme">
                <select className="searchbox__categories" id="categories">
                    {this.returnCategories(this.state.categories)}
                </select>
                <input type="text" className="searchbox__query searchbox__query--size" id="search-query"/>
                <button className="searchbox__button" id="search-button" onClick={this.search.bind(this)}>
                    <Search></Search>
                </button>
            </div>
        )
    }
}