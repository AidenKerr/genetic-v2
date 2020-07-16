import React from 'react';
import Population from './Population.js'
import InitialPop from './InitialPop.js'
import '../components/Generations.css';

function Generations(props) {

    const genList = props.generations.map((pop) => {
        if (pop.generation === 1) {
            return <InitialPop key={pop.generation.toString()} population={pop} />
        }
        return <Population key={pop.generation.toString()} population={pop}/>
    });

    return (
        <div className="Generations">
            {genList}
        </div>
    );
}

export default Generations;