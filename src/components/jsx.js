import React from 'react';
const Wellcome = () => {
    // return(
    //     <div>
    //         <h1>Welcome kassaye website world</h1>;
    //     </div>
    // );
    return React.createElement('div', 
    {id :"wellcome" , className:"kasu"}, 
React.createElement("h1",null,'Welcome kassaye website world ' )  )
    };

 
export default Wellcome ;