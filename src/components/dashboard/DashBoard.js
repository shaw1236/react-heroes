import React from 'react';
import { Link } from 'react-router-dom';

import HeroApiService from '../../services/HeroApiService';
import './style.css';

import MessageService from '../../services/MessageService';

export default class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { heroes: [], nMsg: 0 };
    }

    async componentDidMount() {
        this.setState({ heroes: [] });
        let heroes = await HeroApiService.list();
        MessageService.add("Load the data from api");
        heroes = heroes.slice(0, 4);
        this.setState({ heroes });
        this.setState({ nMsg: MessageService.size() });
    }

    handleClear = async () => {
        MessageService.clear();
        this.setState({ nMsg: MessageService.size() });
    }

    render() {
      let title = 'Tour of Heroes';      
      let top = <div>
                    <h1>{title}</h1>
                    <nav>
                      <Link to={`/dashboard`}> <p class="link">Dash Board</p></Link>
                      <Link to={`/heroes`}> <p class="link">Hero List</p></Link>
                      </nav>
                </div>

      let part1 = <div>
                    <hr/>
                    <h3>Top Heroes</h3>
                    <div class="grid grid-pad">
                    {this.state.heroes.map((hero, index) => (              
                      <Link to={`/hero/${hero.id}`} class="col-1-4" activeClassName="active">
                            <div class="module hero">
                              <h4>{hero.name}</h4>
                            </div>    
                      </Link>
                    ))}
                  </div> 
                </div>
      let part2 = <div>
                    <hr/>
                    <h2>Messages</h2>
                    <button class="clear" onClick={() => this.handleClear()}>Clear</button>
                    <div>
                      {MessageService.get().map(message => ( 
                        <p>{message}</p>
                      ))}
                    </div>
                  </div>

      if (MessageService.size() > 0) {
          return <div>
                  {top}
                  {part1}
                  {part2}
                </div>
      }
      else {
          return <div>
                    {top}
                    {part1}
                  </div>
      }
  }
}    