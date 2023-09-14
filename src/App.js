import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" desc="Clean mouldy dishes in sink"/>
      <Task title="Laundry" deadline="Tomorrow" desc="Fold Laundry and put away"/>
      <Task title="Tidy" deadline="Today" desc="Hoover and dust rooms"/>
    </div>
  );
}

export default App;
