import React from 'react';
import { Provider } from 'react-redux';

import Header from './containers/Header';
import Dashboard from './containers/Dashboard';
import Footer from './containers/Footer';

import style from './style.scss';

import store from '../store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className={style.app}>
          <Header />
          <Dashboard />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
