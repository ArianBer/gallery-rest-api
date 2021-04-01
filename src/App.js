import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './Componets/Header';
import Albums from './Componets/Albums';
import Photos from './Componets/Photos';
import SinglePhoto from './Componets/SinglePhoto';

function App() {
  return (
    <div className="App">
        <div className='container'>
            <Header/>
            <Switch>
                <Route exact path="/" >
                    <Albums />
                </Route>
                <Route path="/photos/:id" >
                    <Photos />
                </Route>
                <Route path="/photos/:id/:id" >
                    <SinglePhoto/>
                </Route>
            </Switch>
        </div>
    </div>
  );
}

export default App;
