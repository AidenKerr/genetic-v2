import React from 'react';
import '../components/ControlPanel.css';

class ControlPanel extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        const state = {
            [name]: value,
        };

        this.props.onControlPanelChange(state);
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
                    <input type="submit" value="start" />
                </form>
            </div>

        );
    }
}


export default ControlPanel;