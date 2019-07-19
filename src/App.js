import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import {Provider} from "react-redux"
import store from './store/index'

const Homepage = Loadable({
  loader: () => import('./components/hompage/homepage'),
  loading: 'Loading'
})


function App() {
  return (
    <React.Fragment>
      <div className="App">
          <Provider store={store}>
            <Router>
                <Switch>
                  <Route exact path='/' component={Homepage} />
                </Switch>
            </Router>
          </Provider>
      </div>
    </React.Fragment>
  );
}

export default App;

