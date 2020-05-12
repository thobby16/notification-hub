import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './Components/Layout/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path='/' component={Dashboard}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
