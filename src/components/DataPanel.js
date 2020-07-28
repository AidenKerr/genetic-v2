import React from 'react';
import {HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, XYPlot, YAxis, MarkSeries} from "react-vis";
import '../../node_modules/react-vis/dist/style.css';
import '../components/DataPanel.css'

function DataPanel(props) {

    let currentFitness;
    let averageFitness

    if (props.prevGen) { // ensure the props exist
        currentFitness = props.prevGen.individuals.map((cur, i) => {
            return {
                x: i,
                y: cur.fitness,
            }
        });

       averageFitness = props.stats.fitnessOverTime[props.stats.fitnessOverTime.length - 1].y;
    }




    return (
        <div className="DataPanel">
            <div className="Data">
                <XYPlot height={300} width={300}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis title="Generation"/>
                    <YAxis title="Fitness"/>
                    <LineSeries data={props.stats.fitnessOverTime}/>
                </XYPlot>
            </div>
            <div className="Data">
                <XYPlot yDomain={[0, 100]}
                        height={300}
                        width={300}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis title="Individual"/>
                    <YAxis title="Fitness"/>
                    <MarkSeries data={currentFitness}/>
                </XYPlot>
            </div>
            <div className="Data">
                <XYPlot height={300} width={300}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis title="Generation"/>
                    <YAxis title="Standard Deviation of Fitness"/>
                    <LineSeries data={props.stats.stdDevOverTime}/>
                </XYPlot>
            </div>
            <div className="Info">
                <div>Lowest Fitness: {props.stats.lowestFitness}</div>
                <div>Highest Fitness: {props.stats.highestFitness}</div>
                <div>Average Fitness: {averageFitness}</div>
            </div>
        </div>
    );
}

export default DataPanel;
