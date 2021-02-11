import React from 'react';
import {Route} from "react-router-dom";

import './App.css';

import EmployeeList from "./components/EmployeeList/EmployeeList";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";


function App() {
    return (
        <div className='pageWrap'>
            <Header />
            <div className=''>
                <Route exact path='/'
                       render={() => <HomePage />} />
                <Route exact path='/employees'
                       render={() => <EmployeeList />} />
            </div>
        </div>
    );
}

export default App;
