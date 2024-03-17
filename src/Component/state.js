import React, { Component } from 'react'

 class Subscribe extends Component {
    constructor() {
      super()
    
      this.state = {
         channel:"KS Tech",
      }
    }
    // function
    changeMessage(){
        this.setState({
            channel:"10 ሚስጥሮች በአጭር ጊዜ ብዙ ሺህ ሰብስክራይብ የምናገኝበት መንገድ"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.channel}</h1>
        <button onClick={() => this.changeMessage()}>ሰብስክራይብ</button>
      </div>
    );
  }
}

export default Subscribe 
