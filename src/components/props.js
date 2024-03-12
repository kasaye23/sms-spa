import React from 'react';
const Fullname = (props) => {
    return ( 
        <div>
  <h1>
        {props.name} siyum {props.Age}
        </h1>
        {props.children}
        </div>
  
         );
}
 
export default Fullname ;