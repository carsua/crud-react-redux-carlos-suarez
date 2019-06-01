import React from 'react';
import "semantic-ui-css/semantic.min.css";
import {Provider} from "react-redux";
import Router from "./components/Router";
import store from "./store.js";


class App extends React.Component {
  
  
  render(){
    
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
