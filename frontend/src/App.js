import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './components/Signup';
import CreateTask from './components/CreateTask';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/create-task">Create Task</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/" element={
            <header className="App-header">
              <h1>Welcome to the App</h1>
              <p>Use the navigation to go to the Signup or Create Task page.</p>
            </header>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;