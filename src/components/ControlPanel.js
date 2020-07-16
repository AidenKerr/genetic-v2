import React from 'react';
import { ChromePicker } from 'react-color';
import '../components/ControlPanel.css';

class ControlPanel extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const target = event.target;
        const value = parseInt(target.value);
        const name = target.name;

        const state = {
            [name]: value,
        };

        this.props.onControlPanelChange(state);
    }

    handleColorChange(color) {
        const tempState = {
            niche: color.rgb,
        };
        this.props.onControlPanelChange(tempState);
    }

    handleSubmit(event) {
        event.preventDefault();
        //TODO
    }

    render() {
        return (
            <div className="ControlPanel">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Population Size:
                        <input name="popSize" type="number" value={this.props.popSize} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Generations:
                        <input name="generations" type="number" value={this.props.generations} onChange={this.handleChange} />
                    </label>
                    <label>
                        Death Cutoff:
                        <input name="deathCutoff" type="number" value={this.props.deathCutoff} onChange={this.handleChange} />
                    </label>
                    <label>
                        Max Generations:
                        <input name="maxGens" type="number" value={this.props.maxGens} onChange={this.handleChange} />
                    </label>
                    <label>
                        Niche (to be renamed):
                        <ChromePicker
                            color={this.props.niche}
                            onChange={this.handleColorChange}
                            disableAlpha={true}
                        />
                    </label>
                    <br/>
                    <input type="submit" value="start" />
                </form>

            </div>

        );
    }
}


export default ControlPanel;