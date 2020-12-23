import React, { Component } from 'react'

const Context = React.createContext()

export class ContextProvider  extends Component {

    state={
        tracks:[{name:'123'},{name:'abc'}],
        heading:'default'
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer
