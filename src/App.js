import './App.css';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';

function App() {
  return (
    <div className='container'>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
