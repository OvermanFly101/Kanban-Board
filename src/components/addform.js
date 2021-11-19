import React, {useState} from 'react';

// import axios from 'axios';

const AddForm = props => {
  const { bridgeItems } = props;
  const [itemList, setItemList] = useState([]);
  const [task, setTask] = useState("");

  const submit = e => {
    e.preventDefault();
    bridgeItems([...itemList,task]);
    setItemList([...itemList, task]);
  }
  return(
    <div>
      {JSON.stringify(itemList)}
      <form onSubmit={submit}>
        <label>Task:</label>
        <input type='text' onChange={ e => setTask(e.target.value)} value={task}/>
        <input type='submit'/>
      </form>
    </div>
  )
}


export default AddForm;