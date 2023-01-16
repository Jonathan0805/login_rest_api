import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/login.tsx';
import Signup from './components/signup.tsx';
import LandingPage from './components/landingPage.tsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index="/"
                    element={<Login/>}/>
                <Route path="/home"
                    element={<LandingPage/>}/>
                <Route path="/signup"
                    element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
