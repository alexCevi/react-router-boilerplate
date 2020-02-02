import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';


function App() {
  return (
    <main>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </main>

  )
}

export default App;
