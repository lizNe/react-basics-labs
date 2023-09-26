import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';


function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", done: false },
      { id: 3, title: "Tidy up", description: "Hoover and Dust",deadline: "Today", done: false },
      { id: 4, title: "Pets", description: "Clean pens",deadline: "Next Weekend" ,done: false},
      { id: 5, title: "Notes", description: "Write College Notes",deadline: "Now",done: false }

    ]
  });

   const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }
    return (
      
      <div className="container">
        <h1>Tasky</h1>

        {taskState.tasks.map((task, index) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      key={task.id}
      done={task.done}
      markDone={() => doneHandler(index)}
    />
  ))}
      </div>
    );
}

export default App;
