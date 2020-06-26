import React from 'react';
import "../src/Component/Header/index.css";
/*import ReactTooltip from "react-tooltip";

const ToolTip= ()=>{
return(
            <div>See the Tooltip</div>
 );

}export default ToolTip; */

const DropDown=() =>{

return(
<div className="fformm">
        <select>
                        
            <option>Long Term Course</option>
            <option>Short Term Course</option>
            <option>Monthly Course</option>
            <option>Quaterly Course</option>
            <option>Daily Course</option>
            </select>

            </div>);
};

export default DropDown;