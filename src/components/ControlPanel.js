import React from 'react';
import { ChromePicker } from 'react-color';
import '../components/ControlPanel.css';

class ControlPanel extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    // handles changes to the control panel except color changes
    handleChange(event) {
        const target = event.target;
        const value = parseInt(target.value);
        const name = target.name;

        const state = {
            [name]: value,
        };

        this.props.onControlPanelChange(state);
    }

    // handles color changes on control panel
    handleColorChange(color) {
        const state = {
            optimal: color.rgb,
        };
        this.props.onControlPanelChange(state);
    }

    handleReset() {
        const state = {
            generations: [],
            stats: {
                fitnessOverTime: [],
                stdDevOverTime: [],
                lowestFitness: 100,
                highestFitness: 0,
            },
        };
        this.props.stopInterval();
        this.props.onControlPanelChange(state);
    }

    // begins the algorithm
    handleSubmit(event) {
        event.preventDefault();
        this.props.onControlPanelSubmit();
    }

    render() {
        return (
            <div className="ControlPanel">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Population Size:
                        <input name="popSize" type="number" value={this.props.popSize} onChange={this.handleChange} min="2"/>
                    </label>
                    <br />
                    <label>
                        Death Cutoff:
                        <input name="deathCutoff" type="number" value={this.props.deathCutoff} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Max Generations:
                        <input name="maxGens" type="number" value={this.props.maxGens} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Display Every:
                        <input name="displayInterval" type="number" value={this.props.displayInterval} onChange={this.handleChange} min="1"/>
                    </label>
                    <br />
                    <label className={'colorPicker'}>
                        Optimal Color:
                        <ChromePicker
                            className={'chromePicker'}
                            color={this.props.optimal}
                            onChange={this.handleColorChange}
                            disableAlpha={true}
                        />
                    </label>
                    <br/>
                    <input type="submit" value="Start" />
                    <br/>
                    <input type="button" value="Reset" onClick={this.handleReset}/>
                </form>

            </div>

        );
    }
}


export default ControlPanel;
