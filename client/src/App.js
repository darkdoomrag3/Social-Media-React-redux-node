import React from 'react';
import './App.css'
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Provider } from 'react-redux'
import store from './store'
import Alert from './components/layout/Alert';


const App = () => {
  return (

    <Provider store={store}>

      <Router>

        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />

          <section className="container">

            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>

          </section>

        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;

////// 8   1 

