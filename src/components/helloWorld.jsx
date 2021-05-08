
// Importamos la libreria React
import React, { Component } from 'react';

export class HelloWorld extends Component {

    render() {
        return (
            <>
                <h1>Hola mundo con {this.props.name}</h1>
                <img className="icon" src={this.props.logo} alt={this.props.name} />
                <nav className="menu">
                    {
                        this.props.menu.map((el) => (
                            <a key={el[0]} href={el[1]}>
                                {el[0]}
                            </a>
                        ))
                    }
                </nav>
                {console.log(this.props)}
            </>
        )
    }

}