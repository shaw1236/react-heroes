import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import HeroSearch from '../hero-search/HeroSearch';
import Message from '../message/Message';

// Custom Services
import HeroApiService from '../../services/HeroApiService';

// Private style
import './style.css';

export default class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { heroes: [] };
    }

    async componentDidMount() {
        this.setState({ heroes: [] });
        let heroes = await HeroApiService.list();
        heroes = heroes.slice(0, heroes.length >= 4? 4 : heroes.length);
        this.setState({ heroes });
    }

    render() {
      let title = 'Tour of Heroes';      
      let top = <div>
                    <h1>{title}</h1>
                    <nav>
                      <Link to={`/dashboard`}> <p className="link">Dash Board</p></Link>
                      <Link to={`/heroes`}> <p className="link">Hero List</p></Link>
                      </nav>
                </div>

      let body = <div>
                    <hr/>
                    <h3>Top Heroes</h3>
                    <div className="grid grid-pad">
                    {this.state.heroes.map((hero, index) => (
                      <Link to={`/hero/${hero.id}`} key={index} className="col-1-4">              
                            <div className="module hero">
                              <h4>{hero.name}</h4>
                            </div>    
                      </Link>
                    ))}
                  </div>
                  <HeroSearch /> {/* HeroSearch component */}
                  <br/>
                  <Message />    {/* Message component */}
                </div>

      return <div>
                  {top}
                  {body}
             </div>
      
  }
}    