import React from 'react';

function Population(props) {
    const pop = props.population;

    const listPop = pop.individuals.map((individual) =>
        <div className="container" style={{backgroundColor: individual.value}}>
            {individual.fitness}
        </div>
    );

    return (
        <div className="Population">
            Initial Population
            <div className="PopulationList">
                {listPop}
            </div>
        </div>
    );
}

export default Population;