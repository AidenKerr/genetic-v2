import React from 'react';
import Population from './Population.js'
import '../components/Generations.css';

function Generations(props) {

    const genList = props.generations.map((pop) =>
        <Population key={pop.generation.toString()} population={pop}/>
    );

    return (
        <div className="Generations">
            {genList}
        </div>
    );
}

export default Generations;