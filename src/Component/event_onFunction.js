import React from 'react'

function Event_Function() {
    function Handler(){
        // console.log("clicked")
        alert("clicked on function")
    }
  return (
    <div>
      <button onClick={Handler}>Click me</button>
    </div>
  )
}

export default Event_Function
