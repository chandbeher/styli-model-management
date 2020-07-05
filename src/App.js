import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Models from './Containers/Models/Models';
import AddModel from './Components/AddModel/AddModel';
import Toolbar from './Components/Toolbar/Toolbar';
import Container from '@material-ui/core/Container';

class App extends Component {
  
  render (){
      return (
        <div className="App">
          <Container maxWidth="lg">
            <Toolbar/>
            <Switch>
                  <Route path="/build" exact component={AddModel} />
                  <Route path="/" exact component={ Models } />
              </Switch>
           </Container>
        </div>
      );
  }
}

export default App;
