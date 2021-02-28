import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteTask,
  editTask,
  toggleTask,
  updateTask,
} from '../JS/Actions/actions';

const Task = ({ task }) => {
  const { desc, id, etat, isEdited } = task;
  const [field, setField] = useState(desc);
  const dispatch = useDispatch();
  return (
<div className="todo">
    {isEdited ? (
        <input
          type='text'
          value={field}
          onChange={(e) => setField(e.target.value)}
        />
      ) : (
        <span>{desc}</span>
      )}

      <button
        className='btn'
        onClick={() => dispatch(toggleTask(id , etat))}
      >
        {etat==="isDone" ? 'notDone' : 'Done'}
      </button>
      <button
        className='btn '
        onClick={() => dispatch(deleteTask(id))}
      >
        delete
      </button>
      <button
        className='btn'
        onClick={() =>
          isEdited
            ? dispatch(updateTask({ ...task, desc: field, isEdited: false }))
            : dispatch(editTask(id))
        }
      >
        {isEdited ? 'Save' : 'Edit'}
      </button>
    </div>
  );
};

export default Task;
