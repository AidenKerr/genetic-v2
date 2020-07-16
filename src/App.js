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
            deathCutoff: 5, // determines min fitness to survive
            maxGens: 600, // prevent infinite loops (hopefully less necessary once convergence is written)
            niche: {    // "niche" need to be renamed - it's not accurate
                r: 20, // right now it's RGB, but later it will become LAB
                g: 200,
                b: 50,
            }
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
        generation: 1,
        individuals: [this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, ],
    }
    population2 = {
        generation: 2,
        individuals: [this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child, this.child2, this.child]
    }
    generations = [this.population];




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
                    deathCutoff={this.state.deathCutoff}
                    maxGens={this.state.maxGens}
                    niche={this.state.niche}
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
