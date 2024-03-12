// import React from 'react';
// const Fullname = (props) => {
//     return ( 
//         <div>
//   <h1>
//         {props.name} siyum {props.Age}
//         </h1>
//         {props.children}
//         </div>
  
//          );
// }
 
// export default Fullname ;
  

//  This is chnage above code in class component 


import React, {Component} from 'react';
export default class props extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}  siyum {this.props.Age}</h1>
            {this.props.children}
            </div>
        )
    }
}