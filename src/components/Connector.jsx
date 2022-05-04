import React from "react";
import Xarrow from "react-xarrows";

function ConnectLines() {
    return(
     <Xarrow 
      start = "0"
      end = "1"
      strokeWidth={3}
      showHead = {false}
      color = {"#818181"}
     />
    );
}

export default ConnectLines;