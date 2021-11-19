import React, { useState } from "react";
//import axios from 'axios';
import Addpop from "./addpop";
import AddForm from "./addform";


const TaskItems = (props) => {
  const{bridgeItems} = props;
  const [buttonAdd, setButtonAdd] = useState(false);
  return(
    <div>
      <button className="myButton" onClick={() => setButtonAdd(true)}>Add +</button>
      <Addpop trigger={buttonAdd} setTrigger={setButtonAdd}>
        <AddForm bridgeItems={bridgeItems}/>
      </Addpop>
    </div>
  )
}

export default TaskItems;