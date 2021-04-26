import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, HashRouter} from 'react-router-dom';
import {Navigation, Footer, Main, Products, About, Contact} from './Components';
import './App.scss';

function App() {
  const initialOrders = JSON.parse(localStorage.getItem('Order'));
  const [orders, setOrders] = useState(initialOrders);

  function updateOrders(newOrders) {
    setOrders(newOrders);
  }

  return (
    <div>
      <HashRouter>
        <Navigation updateOrders={updateOrders} orders={orders} />
        <div className='wrapper'>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route exact path='/Products'>
              <Products updateOrders={updateOrders} />
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
      </HashRouter>
    </div>
  );
}

export default App;
