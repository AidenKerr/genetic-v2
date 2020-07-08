import React from 'react';
import './App.css';
import Family from './components/Family.js'
import ControlPanel from "./components/ControlPanel";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popSize: 50,
            generations: 100,
        }

        this.handleControlPanelChange = this.handleControlPanelChange.bind(this);
        this.handleControlPanelSubmit = this.handleControlPanelSubmit.bind(this);
    }

    // dummy data
    mommy = {
        value: "blue",
        fitness: 50,
    }
    daddy = {
        value: "red",
        fitness: 60,
    }
    child = {
        value: "purple",
        fitness: 80,
    }

    handleControlPanelChange(state) {
        this.setState(state);
    }

    handleControlPanelSubmit(event) {
        //TODO
    }

    render() {
        return (
            <div>
                <ControlPanel
                    popSize={this.state.popSize}
                    generations={this.state.generations}
                    onControlPanelChange={this.handleControlPanelChange}
                />
                <Family
                    mommy={this.mommy}
                    daddy={this.daddy}
                    child={this.child}
                />
            </div>

        );
    }
}

export default App;
