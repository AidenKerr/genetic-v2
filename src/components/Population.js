import React from 'react';
import '../components/Population.css';
import Family from "./Family";

function Population(props) {
    const listPop = props.population.individuals.map((individual) =>
        <Family
            mommy={individual.mommy}
            daddy={individual.daddy}
            child={individual}
        />
    );

    return (
        <div className="Population">
            {props.population.generations}
            <div className="PopulationList">
                {listPop}
            </div>
        </div>
    );
}

export default Population;