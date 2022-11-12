import React from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import {Footer} from '../Components';
import ClosedMain from './ClosedMain';
import ClosedNavigation from './ClosedNavigation';
import '../App.scss';

function App() {
  return (
    <div>
      <HashRouter>
        <ClosedNavigation />
        <div className='wrapper'>
          <Switch>
            <Route exact path='/'>
              <ClosedMain />
            </Route>
            <Route exact path='/Products'>
              <ClosedMain />
            </Route>
            <Route exact path='/About'>
              <ClosedMain />
            </Route>
            <Route exact path='/Contact'>
              <ClosedMain />
            </Route>
          </Switch>
          <div className='push'></div>
        </div>
        <div className='sticky-footer'>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
