import React from 'react';

import HeroApiService from '../../services/HeroApiService';
import './style.css';

export default class HeroDetail extends React.Component {
    constructor(props) {
        super(props);
        // Get the id from the route
        const { id } = this.props.match.params;
        this.state = { id: Number(id), name: "" };
    }

    async componentDidMount() {
        let hero = await HeroApiService.get(this.state.id);
        this.setState({ "name": hero.name });
        console.log("hero id: ", this.state.id, ", name: ", this.state.name);
    }

    handleSubmit = async event => {
        event.preventDefault();
        let hero = {id: this.state.id, name: this.state.name};
        let result = await HeroApiService.put(hero);
        console.log("Change: ", result)
    }

    handleChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    
    render() {
        let upperCaseName = this.state.name.toUpperCase();
        let aJSX = <form onSubmit={this.handleSubmit}>
                        <h2>Hero {upperCaseName} - Details</h2>
                        <span>Id: </span>{this.state.id}
                        <div>
                            <label>name:
                                <input type='text' 
                                       name='name'
                                       value={this.state.name} 
                                       placeholder="name" 
                                       onChange={this.handleChange}
                                />
                            </label>
                        </div>
                        <br/>
                        <input id="submit" value ="Submit Change" type='submit' />
                    </form>    
      return aJSX;
    }
}