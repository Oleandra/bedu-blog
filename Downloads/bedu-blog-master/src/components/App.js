import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Add from './Add';
import Menu from './Menu'

class App extends Component {

  
   

  render() {
    return (      
      <Router>
        <div>          
          <Menu />          
          <div className="container my-5">
            <div className="row">
              <div className="col">
                <h1 className="text-center">Blog</h1>                
              </div>
            </div>
            <Route path='/home' component={Home} />
            <Route path='/Add' component={Add} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
