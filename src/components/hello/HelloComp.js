import React from 'react';

export default class HelloComp extends React.Component {
    render() {
      //let name = this.props.name; //"React";
      let aJSX = <div>
                    <h2>Hello world, {this.props.name}!</h2>
                    <p>This react app is cloning from angular-heroe.</p>
                 </div>;
      return aJSX;
    }
}