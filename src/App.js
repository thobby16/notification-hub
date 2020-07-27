import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './Components/Layout/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import ProjectDetails from './Components/Projects/ProjectDetails';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import CreateProject from './Components/Projects/CreateProject';


class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/project/:id' component={ProjectDetails}/>
          <Route path='/SignIn' component={SignIn}/>
          <Route path='/SignUp' component={SignUp}/>
          <Route path='/Create' component={CreateProject}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
