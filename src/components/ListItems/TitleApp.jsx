import React from "react";
import {ReactComponent as Dots} from "../../assets/icons/more_horiz.svg"
function TitleApp() {


  return (
    <div className="title d-flex align-items-center justify-content-between">
        <h3 className="mt-4 text-dark">Todo list</h3>
       <div className="icon text-info ">
          <Dots style={{fill: "#17a2b8", width: "30px", height: "30px"}}/>
       </div>
    </div>
     
  );
}

export default TitleApp;
