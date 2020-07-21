import React from 'react';
import Population from './Population.js';
import InitialPop from './InitialPop.js';
import '../components/Generations.css';

function Generations(props) {

    const genList = props.generations.filter((pop) => {
        // first, only show every nth generation
        return pop.generation % props.displayInterval === 0;
    }).map((pop) => {
        // then, render as components
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
