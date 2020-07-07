import React from 'react';

class ControlPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popSize: 50,
            generations: 100,
        }

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Population Size:
                    <input name="popSize" type="number" value={this.state.popSize} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Generations:
                    <input name="generations" type="number" value={this.state.generations} onChange={this.handleChange} />
                </label>
                <input type="submit" value="start" />
            </form>
        );
    }
}


export default ControlPanel;