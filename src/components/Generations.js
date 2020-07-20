import React from 'react';
import Population from './Population.js';
import InitialPop from './InitialPop.js';
import '../components/Generations.css';

function Generations(props) {

    const genList = props.generations.map((pop) => {
        // render the first generation differently
        if (pop.generation === 0) {
            return <InitialPop key={pop.generation.toString()} population={pop} />
        }
        return <Population key={pop.generation.toString()} population={pop}/>
    });

    return (
        <div className="Generations">
            {genList[0] ? genList : "Press Start!"}
        </div>
    );
}

export default Generations;
