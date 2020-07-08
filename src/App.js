import React from 'react';
import './App.css';
import ControlPanel from "./components/ControlPanel";
import Generations from "./components/Generations";

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
        mommy: this.mommy,
        daddy: this.daddy,
    }
    child2 = {
        value: "orange",
        fitness: 99,
        mommy: this.child,
        daddy: this.child,
    }
    population = {
        generations: 1,
        individuals: [this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, ],
    }
    generations = [this.population, this.population];




    handleControlPanelChange(state) {
        this.setState(state);
    }

    handleControlPanelSubmit(event) {
        //TODO
    }

    render() {
        return (
            <div className="App">
                <ControlPanel
                    popSize={this.state.popSize}
                    generations={this.state.generations}
                    onControlPanelChange={this.handleControlPanelChange}
                />
                <Generations
                    generations={this.generations}
                />
            </div>

        );
    }
}

export default App;
