import React, { Component } from 'react'
 class Event_class extends Component {
     Click_handler() {
        // console.log("clicked!")
        alert("Clicked class component!")
    }
  render() {
    return (
      <div>
        <button onClick={this.Click_handler}>click</button>
      </div>
    )
  }
}

export default Event_class
