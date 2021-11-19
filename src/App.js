import React, { useState } from 'react';
import TaskBoard from './components/mainTask';
import TaskItems from './components/taskItems';

function App() {
  const [itemsList, setItemsList] = useState([]);
  const bridgeItems = (items) => {
    console.log('bridgeItems: ' + items);
    setItemsList(items);
  }
  console.log(itemsList);
  return (
    <div className="App">
      <div style={{display: 'flex', alignItems: 'center'}}>
        <h1 style={{padding: '15px'}}>KanBan Flow</h1>
        <TaskItems bridgeItems={bridgeItems}/>
      </div>
      <div>
        <TaskBoard itemsList={itemsList}/>
      </div>
    </div>
  )
}

export default App;
