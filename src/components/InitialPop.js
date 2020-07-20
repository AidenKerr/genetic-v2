import React from 'react';
import Spectra from 'spectra';

function Population(props) {
    const pop = props.population;
    const listPop = pop.individuals.map((individual) => {
        // convert to hex to use in CSS
        const color = Spectra(individual.value).hex();

        return (
            <div className="container" style={{backgroundColor: color}}>
                {individual.fitness}
            </div>
        );
    });

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
