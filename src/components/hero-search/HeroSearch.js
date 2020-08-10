import React from 'react';
import { Link } from 'react-router-dom';

import HeroApiService from '../../services/HeroApiService';
import './style.css';

export default class HeroSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { heroes: [], search: ""};
    }

    handleChange = async event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        let heroes = await HeroApiService.search(val);
        this.setState({ heroes: heroes});
        console.log("search: ", this.state.heroes);
    }
    
    render() {
        let dropdown = <div>
                        {this.state.heroes.map((hero, index) => (
                            <li key={index}>
                                <Link to={`/hero/${hero.id}`}>
                                    {hero.name}    
                                </Link>
                            </li>
                        ))}
                        </div>;

        let search = <div>
                        <div id="search-component">
                            <h4>Hero Search</h4>  
                            <input type='text'
                                name='search'
                                value={this.state.search}  
                                id="search-box" 
                                onChange={this.handleChange}
                            />          
                        </div>
                        {dropdown}
                    </div>
        return search      
  }
}    