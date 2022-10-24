import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState } from 'react'
import Home from './components/HomeNavigation'
import MainNavigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation';
import Footer  from './components/Footer';

function App() {
  return (
    <div className="App">
        <Router>
          <Footer/>
            <Navigation />
            <Switch>
                <Route exact path='/' component={Home}/>
                {/* <Route path='/about' component={About}/>
                <Route path='/about' component={Contact}/> */}
            </Switch>
        </Router>
    </div>
  );
}

export default App;
