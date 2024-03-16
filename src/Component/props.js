import React from 'react';
const Full_name = (props) => {
    return ( 
        <div>
        <h2> 
           {props.name} tekle {props.age} 
        </h2> 
        {props.children}
        
        </div>
        );
}
 
export default Full_name ;