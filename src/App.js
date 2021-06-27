import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import Secret from './components/Secret';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
           <Route exact path='/' component={Home}/>
           {/*Had to use exact because it was loading all the 3 components in the same page one below another*/}
           <Route path='/about.html' component={About}/>
           <Route path='/secret.html' component={Secret}/>
           <Route path='/:postId' component={Post}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
