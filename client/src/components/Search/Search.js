import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    render() {
        return (
            <form className="form md-form mr-auto mb-4 search">
                <input className="search-bar form-control mr-sm-2" type="text" placeholder="Look up Brand" aria-label="Search"/>
                <button className="btn btn-rounded btn-sm my-0" type="submit">Search</button>
            </form> 
        );
    }
}

export default Search;