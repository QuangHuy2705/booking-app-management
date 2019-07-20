import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import {Provider} from "react-redux"
import store from './store/index'
import Loader from './components/loading/loading'

const Homepage = Loadable({
  loader: () => import('./components/hompage/homepage'),
  loading: Loader
})

const History = Loadable({
  loader: () => import('./components/history/history'),
  loading: Loader
})


function App() {
  return (
    <React.Fragment>
      <div className="App">
          <Provider store={store}>
            <Router>
                <Switch>
                  <Route exact path='/' component={Homepage} />
                  <Route  exact path='/history' component={History}/>
                </Switch>
            </Router>
          </Provider>
      </div>
    </React.Fragment>
  );
}

export default App;

