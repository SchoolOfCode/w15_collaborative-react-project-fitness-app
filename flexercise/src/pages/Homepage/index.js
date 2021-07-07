import React from "react";

const Homepage = ({onComplete}) => {
    return ( 
        <div>
          <h1>Home Page</h1>  
          <button onClick={onComplete}>Advance</button>
        </div>
     );
}
 
export default Homepage;