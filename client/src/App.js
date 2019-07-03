import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Images from './pages/Images';
import './App.css';

function App() {
  return (
    <Router>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/images" component={Images}/>
    </Router>
  );
}

export default App;
