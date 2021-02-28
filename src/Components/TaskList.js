import React from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import Task from './Task';
import {
  isDone,
  notDone,
  allTodo,
} from '../JS/Actions/actions';

const TaskList = () => {
  const taskList = useSelector((state) => state.taskReducer.tasks);
  const todos = useSelector((state) => state.taskReducer);
  const dispatch = useDispatch()

  return ( <>
   <div className="list">
      { 
      todos.filt===null ? taskList.map((task) => <Task task={task} key={task.id} /> )
      : taskList.filter(el=>el.etat===todos.filt).map((task) => <Task task={task} key={task.id} />)
      
       }
    </div>

    <div className="filter">
    <button className='btn-test' onClick={()=>dispatch(isDone())}>todos Done !</button>
    <button className='btn-test' onClick={()=>dispatch(notDone())}>todos not Done !!</button>
    <button className='btn-test' onClick={()=>dispatch(allTodo())}>Remover filter</button> 
    </div>
    </>
  );
};

export default TaskList;
