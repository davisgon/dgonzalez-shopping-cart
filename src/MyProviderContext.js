import React from 'react'
import { Component } from 'react';
export const MContext = React.createContext();  //exporting context object
  class MyProviderContext extends Component {
    state = {message: "Holaaaa"}
     render() {
        return (
            <MContext.Provider value={
            {   state: this.state,
                setMessage: (value) => this.setState({
                            message: value })}}>
            {this.props.children}   //this indicates that all the child tags with MyProviderContext as Parent can access the global store.
            </MContext.Provider>)
    }
}
export default MyProviderContext