import React, { useState } from 'react';

const CreateTask = () => {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [taskNameError, setTaskNameError] = useState('');
  const [dueDateError, setDueDateError] = useState('');

  const handleCreateTask = () => {
    let valid = true;
    // Task name validation
    if (!taskName.trim()) {
      setTaskNameError('Task name is required.');
      valid = false;
    } else {
      setTaskNameError('');
    }

    // Due date validation
    if (!dueDate) {
      setDueDateError('Due date is required.');
      valid = false;
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Set to midnight to compare dates only
      const selectedDate = new Date(dueDate);
      if (selectedDate < today) {
        setDueDateError('Due date cannot be in the past.');
        valid = false;
      } else {
        setDueDateError('');
      }
    }

    if (valid) {
      // Your task creation logic here
      console.log('Task created:', { taskName, dueDate });
    }
  };

  return (
    <div>
      <h2>Create Task</h2>
      <div>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        {taskNameError && <p style={{ color: 'red' }}>{taskNameError}</p>}
      </div>
      <div>
        <input
          type="date"
          placeholder="Due Date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        {dueDateError && <p style={{ color: 'red' }}>{dueDateError}</p>}
      </div>
      <button onClick={handleCreateTask}>Create</button>
    </div>
  );
};

export default CreateTask;