import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Add from './pages/Add';
import Images from './pages/Images';
import './App.css';

function App() {
  return (
    <Router>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/images" component={Images}/>
        <Route exact path="/add" component={Add}/>
    </Router>
  );
}

export default App;
