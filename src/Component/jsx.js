import React from 'react';
const Welcome = () => {
    // return (  
    // <div>
    //     <h2>welcome to minjar</h2>
    // </div>
    //  );

    return React.createElement(
    "div",
    {id:"welcome" , className:"wel_class"} ,
    React.createElement("h1",null,'welcome to minjar')
    );
}
 // with out jsx extenstion

 

export default Welcome;