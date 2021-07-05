import React from "react";

const Explanation = ({onComplete}) => {
    return ( 
        <div>
            <h1>Explanation</h1>  
            <button onClick={onComplete}>Advance</button>
        </div>
     );
}
 
export default Explanation;