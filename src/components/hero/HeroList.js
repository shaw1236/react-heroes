import React from 'react';
import { Link } from 'react-router-dom';

import HeroApiService from '../../services/HeroApiService';
import './style.css';

export default class HeroList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { heroName:"", heroes: []};
    }

    async componentDidMount() {
        this.setState({"heroes": [] });
        let heroes = await HeroApiService.list();
        this.setState({ "heroes": heroes });
    }

    handleClick = index => {
        alert("select: " + index);
    }

    handleChange= (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    handleAdd = async () => {
        //alert(this.state.heroName)
        if (!this.state.heroName)
            return;
        let hero = await HeroApiService.post({name: this.state.heroName});
        this.state.heroes.push(hero);
        this.setState({ "heroes": this.state.heroes });
    }

    handleDelete = async index => {
        //alert("delete: " + "(" + hero.id + ", " + hero.name + ")");
        let hero = this.state.heroes[index];

        let result = await HeroApiService.delete(hero.id);
        console.log("Delete: ", result)
        let heroes = this.state.heroes.filter((_, idx) => index !== idx);
        this.setState({ "heroes": heroes });
    }

    render() {
        let aJSX = <div>
                    <h2>My Heroes</h2>
                    <ul class="heroes">
                        {this.state.heroes.map((hero, index) => (
                            <li key={index}>
                                <Link to={`/hero/${hero.id}`} activeClassName="active">
                                    <span class="badge">{hero.id}</span> {hero.name}    
                                </Link>
                                <button class="delete" onClick={() => this.handleDelete(index)}>x</button>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <strong>Hero name:</strong>
                        <input
                            type='text'
                            name='heroName'
                            onChange={this.handleChange}
                        />
                        <button onClick={() => this.handleAdd()}>Add</button>
                    </div>
                </div>;
      return aJSX;
    }
}