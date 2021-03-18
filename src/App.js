import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Navigation, Footer, Main, Products, About, Contact} from './Components';
import './App.scss';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <div className='wrapper'>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route exact path='/Products'>
              <Products />
            </Route>
            <Route exact path='/About'>
              <About />
            </Route>
            <Route exact path='/Contact'>
              <Contact />
            </Route>
          </Switch>
          <div className='push'></div>
        </div>
        <div className='sticky-footer'>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
