import './App.css';
import Template from './components/Template.js';
import Form from './components/Form.js';
import Search from './components/Search.js';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'; 

function App() {
  return (
    //Routing of 3 Pages
    <Router>
        <Switch>
              <Route exact path='/' component={Form}></Route>
              <Route  path='/show' component={Template}></Route>
              <Route  path='/search' component={Search}></Route>
        </Switch>
    </Router>
  );
}

export default App;

/* Default File from React */
