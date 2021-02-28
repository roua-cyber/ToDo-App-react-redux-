import {
  DELETE_TASK,
  ADD_TASK,
  TOGGLE_TASK,
  EDIT_TASK,
  UPDATE_TASK,
  TODO_NOT_DONE ,
  TODO_DONE ,
  ALL_TODO ,

} from '../constants/actions-types';



export const addTask = (newTask) => ({
  type: ADD_TASK,
  payload: newTask,
});
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});
export const toggleTask = (id ,etat) => ({
  type: TOGGLE_TASK,
  payload: {id ,etat},
});
export const editTask = (id) => ({
  type: EDIT_TASK,
  payload: id,
});
export const updateTask = (updatedTask) => ({
  type: UPDATE_TASK,
  payload: updatedTask,
});
export const isDone=()=>{
  return {
      type :TODO_DONE,
  }
}
export const notDone=()=>{
  return {
      type:TODO_NOT_DONE,
  }
}
export const allTodo=()=> {
  return {
      type:ALL_TODO ,
  }
}