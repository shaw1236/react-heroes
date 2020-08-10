import React from 'react';
import ReactDOM from 'react-dom';

//import HelloComp from './components/hello/HelloComp';
//import HeroList from './components/hero/HeroList';
//import HeroDetail from './components/herodetail/HeroDetail';
//import DashBoard from './components/dashboard/DashBoard';
//import HeroSearch from './components/hero-search/HeroSearch';
//ReactDOM.render(<HelloComp name="James" />, document.getElementById('root'));
//ReactDOM.render(<HeroList />, document.getElementById('root'))
//ReactDOM.render(<HeroDetail id="9"/>, document.getElementById('root'))
//ReactDOM.render(<DashBoard />, document.getElementById('root'))
//ReactDOM.render(<HeroSearch />, document.getElementById('root'))



import Router from './Router';

const App = () => <Router />;

ReactDOM.render(<App />, document.getElementById('root'));