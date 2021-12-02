import React from 'react'
import { Component } from 'react';
export const MContext = React.createContext();  //exporting context object
class MyProviderContext extends Component {
  state = { message: "Holaaaa" }
  render() {
    return (
      <MContext.Provider value={
        {
          state: this.state,
          setMessage: (value) => this.setState({
            message: value
          })
        }}>
        {this.props.children}
      </MContext.Provider>)
  }
}
export default MyProviderContext