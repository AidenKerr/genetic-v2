import React from 'react';
import './App.css';
import ControlPanel from "./components/ControlPanel";
import Generations from "./components/Generations";
import DataPanel from "./components/DataPanel";
import Algorithm from "./algorithm/Algorithm";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.alg = new Algorithm();

        this.state = {
            popSize: 50,
            deathCutoff: 5, // determines min fitness to survive
            maxGens: 50, // prevent infinite loops (hopefully less necessary once convergence is written)
            displayInterval: 25, // show every n generations
            optimal: this.alg.newColor(), // Optimal individual in environment (in RGB, but converted to LAB for fitness calculation)
            generations: [],
            stats: {
                fitnessOverTime: [],
                stdDevOverTime: [],
                lowestFitness: 100,
                highestFitness: 0,
            },
        }

        this.handleControlPanelChange = this.handleControlPanelChange.bind(this);
        this.handleControlPanelSubmit = this.handleControlPanelSubmit.bind(this);
    }


    handleControlPanelChange(state) {
        this.setState(state);
    }

    handleControlPanelSubmit() {
        clearInterval(this.genInterval);

        const initialGen = this.alg.generateStartingPop(this.state.popSize, this.state.optimal, this.state.deathCutoff);

        this.setState({
            generations: [initialGen],
            stats: {
                fitnessOverTime: [this.calculateAverageFitness(initialGen)],
                stdDevOverTime: [this.calculateStdDevFitness(initialGen)],
                lowestFitness: this.findLowestFitness(100, initialGen),
                highestFitness: this.findHighestFitness(0, initialGen),
            }
        });

        this.genInterval = setInterval(
            () => this.nextGen(),
            0,
        );
    }

    nextGen() {
        const gens = this.state.generations;
        const prevGen = gens[gens.length - 1];

        // stop after max number of generations
        if (prevGen.generation >= this.state.maxGens) {
            clearInterval(this.genInterval);
            return;
        }

        const popSize = this.state.popSize;
        const optimal = this.state.optimal;
        const deathCutoff = this.state.deathCutoff;

        // create next generation
        const nextGen = this.alg.nextGen(prevGen, popSize, optimal, deathCutoff);
        gens.push(nextGen);

        // update stats
        const stats = this.state.stats;
        let fitnessOverTime = stats.fitnessOverTime;
        let stdDevOverTime = stats.stdDevOverTime;
        let lowestFitness = stats.lowestFitness;
        let highestFitness = stats.highestFitness;
        fitnessOverTime.push(this.calculateAverageFitness(nextGen));
        stdDevOverTime.push(this.calculateStdDevFitness(nextGen));
        lowestFitness = this.findLowestFitness(lowestFitness, nextGen);
        highestFitness = this.findHighestFitness(highestFitness, nextGen);

        // update state
        this.setState({
            generations: gens,
            stats: {
                fitnessOverTime: fitnessOverTime,
                stdDevOverTime: stdDevOverTime,
                lowestFitness: lowestFitness,
                highestFitness: highestFitness,
            },
        });
    }

    // calculates average fitness and returns as object for data visualization.
    calculateAverageFitness(gen) {
        const x = gen.generation;
        let pop = gen.individuals;
        const y = (pop.reduce((acc, cur) => acc + parseFloat(cur.fitness), 0) / pop.length).toFixed(1); // find average
        return {
            x: x,
            y: y,
        };
    }

    // calculates the standard deviation of the fitness and returns as object for data visualisation.
    calculateStdDevFitness(gen) {
        const x = gen.generation;
        const fitnessArr = gen.individuals.map((cur) => cur.fitness);
        const n = fitnessArr.length
        const mean = fitnessArr.reduce((a, b) => a + b) / n
        const y = Math.sqrt(fitnessArr.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n);
        return {
            x: x,
            y: y,
        }
    }

    findHighestFitness(highest, gen) {
        const fitnessArr = gen.individuals.map((cur) => cur.fitness);
        return Math.max(...fitnessArr, highest);
    }

    findLowestFitness(lowest, gen) {
        const fitnessArr = gen.individuals.map((cur) => cur.fitness);
        return Math.min(...fitnessArr, lowest);
    }


    render() {
        const gens = this.state.generations;
        const prevGen = this.state.generations[this.state.generations.length - 1];

        return (
            <div className="App">
                <h1>Genetic Algorithm</h1>
                <h5>By Aiden Kerr</h5>
                <a href="https://github.com/AidenKerr/genetic-v2/blob/master/README.md">What is this? Click Here!</a>
                <ControlPanel
                    popSize={this.state.popSize}
                    deathCutoff={this.state.deathCutoff}
                    maxGens={this.state.maxGens}
                    displayInterval={this.state.displayInterval}
                    optimal={this.state.optimal}
                    onControlPanelChange={this.handleControlPanelChange}
                    onControlPanelSubmit={this.handleControlPanelSubmit}
                />
                <DataPanel stats={this.state.stats} prevGen={prevGen}/>
                <Generations
                    generations={gens}
                    displayInterval={this.state.displayInterval}
                />
            </div>
        );
    }
}

export default App;
