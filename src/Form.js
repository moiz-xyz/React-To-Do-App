import React, { useState } from 'react';
import { CalendarOutlined } from '@ant-design/icons';

const Form = () => {
  const [task, insert_task] = useState('');
  const [allTasks, getAllTask] = useState([]);
  const [editIndex , setEditIndex] = useState(null)

  const styling = {
    main: {
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '10px',
      padding: '20px',
      width: '90%',
      maxWidth: '400px',
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
      textAlign: 'center',
    },
    h2: {
      fontSize: '1.8rem',
      marginBottom: '20px',
      color: '#fff',
    },
    form: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
    },
    input: {
      flex: 1,
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
      outline: 'none',
    },
    button: {
      background: '#4e085f',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 15px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background 0.3s',
    },
    buttonHover: {
      background: '#153677',
    },
    task: {
      textAlign: 'left',
      maxHeight: '300px',
      overflowY: 'auto',
      padding: 0,
    },
    ul: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    li: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '5px',
      padding: '10px',
      marginBottom: '5px',
      color: '#fff',
    },
    iconContainer: {
      display: 'flex',
      gap: '10px',
    },
    icon: {
      cursor: 'pointer',
      color: 'black',
      fontSize: '1.2rem',
      transition: 'color 0.3s, transform 0.2s',
      padding: '5px',
    },
    iconHover: {
      color: 'white',
      transform: 'scale(1.2)',
    },
  };

  const saveTodo = (e) => {
    e.preventDefault(); 
      getAllTask([...allTasks, { task }]);
      insert_task('');
      if (editIndex === !null){

      }
   
  };
  const deleteFunction = (index)=>{
  const copyTasks = [...allTasks];
  copyTasks.splice(index , 1)
  getAllTask(copyTasks)
  }
  
  return (
    <div style={styling.main}>
      <h2 style={styling.h2}>
        React TO-DO APP <CalendarOutlined />
      </h2>
      <form style={styling.form}>
        <input
          type="text"
          placeholder="Enter your task here"
          style={styling.input}
          value={task}
          onChange={(e) => insert_task(e.target.value)}
        />
        <button type="submit" style={styling.button} onClick={saveTodo}>
          Add
        </button>
      </form>

      <div style={styling.task}>
        <ul style={styling.ul}>
          {allTasks.map((t, i) => (
            <li key={i} style={styling.li}>
              {t.task}
              <div style={styling.iconContainer}>
                {/* <button onClick={ ()=>{

                }}>Edit</button> */}
                <button onClick={ ()=> deleteFunction(i)}>Delete</button>
              </div>
            </li>
          ))}
        </ul> 
      </div>
    </div>
  );
};

export default Form;
