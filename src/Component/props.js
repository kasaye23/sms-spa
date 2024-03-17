// import React from 'react';
// const Full_name = (props) => {
//     return ( 
//         <div>
//         <h2> 
//            {props.name} tekle {props.age} 
//         </h2> 
//         {props.children}
        
//         </div>
//         );
// }
 
// export default Full_name ;



import React , { Component} from "react";
export default class props extends Component {
    render(){
        return(
            <div>
                <h1> {this.props.name}  tekle {this.props.age}</h1>
            {this.props.children}

            
            </div>
        )
    }
}

