import React from 'react';
import './App.css';
import Family from './components/Family.js'
import ControlPanel from "./components/ControlPanel";

function App() {

    // dummy data
    const mommy = {
        value: "blue",
        fitness: 50,
    }
    const daddy = {
        value: "red",
        fitness: 60,
    }
    const child = {
        value: "purple",
        fitness: 80,
    }

    return (
        <div>
            <ControlPanel />
            <Family
                mommy={mommy}
                daddy={daddy}
                child={child}
            />
        </div>

    );
}

export default App;
