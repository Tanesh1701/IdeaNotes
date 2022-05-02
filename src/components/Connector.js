import React from "react";
import Xarrow from "react-xarrows";

function ConnectLines() {
    return(
     <Xarrow 
      start = "5"
      end = "1"
      strokeWidth={2}
      showHead = {false}
      color = {"black"}
     />
    );
}

export default ConnectLines;