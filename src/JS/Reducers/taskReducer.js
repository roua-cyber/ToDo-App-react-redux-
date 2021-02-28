import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  TOGGLE_TASK,
  UPDATE_TASK,
  TODO_NOT_DONE ,
  TODO_DONE ,
  ALL_TODO ,

} from '../constants/actions-types';

const initialState = {
  tasks: [
    {
      id: 1,
      desc: 'first todo',
      etat: "notDone",
      isEdited: false,
    },
    {
      id: 2,
      desc: 'second todo',
      etat: "isDone",
      isEdited: false,
    },
  ],
  filt:null ,
  save:null ,
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };
    case TODO_DONE :
        return {...state,filt:"isDone"} ; 
    case TODO_NOT_DONE:
          return {...state,filt:"notDone"} ;
    case ALL_TODO :
        return {...state,filt:null} ;
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };
      case TOGGLE_TASK:
        return {
          ...state, tasks: state.tasks.map((task) => task.id === payload.id ? (
            task.etat==="isDone" ? { ...task, etat: "notDone"} : { ...task, etat: "isDone"} 
          ) : task),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload ? { ...task, isEdited: !task.isEdited } : task
        ),
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.id ? payload : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
