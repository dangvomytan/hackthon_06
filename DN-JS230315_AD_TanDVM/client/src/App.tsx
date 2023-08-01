import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListStudent from './components/ListStudent';
import FormAdd from './components/FormAdd';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='body_content'>
      <h1>Student Manege</h1>
      <FormAdd/>
      <hr/>
      <ListStudent></ListStudent>
    </div>
  );
}

export default App;
