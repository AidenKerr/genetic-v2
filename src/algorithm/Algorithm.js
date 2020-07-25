import DeltaE from 'delta-e';
import Spectra from 'spectra';

class Algorithm {

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // generates a colour in RGB colour space
    newColor() {
        let r = this.getRandomInt(0, 255);
        let g = this.getRandomInt(0, 255);
        let b = this.getRandomInt(0, 255);
        return {r: r, g: g, b: b};
    }

    // convert RGB to LAB
    convertToLab(color) {
        /*
            It seems like DeltaE doesn't like the LAB object provided by Spectra.
            So this function converts them so they work together nicely :D
         */
        const spectraLab = Spectra(color).labObject();
        const lab = {
            L: spectraLab.l,
            A: spectraLab.a,
            B: spectraLab.b,
        }
        return lab;
    }

    calculateFitness(value, optimal) {
        // convert to LAB for comparison
        const valueLAB = this.convertToLab(value);
        const optimalLAB = this.convertToLab(optimal);

        // DeltaE is 0 when there's no difference
        // I subtract from 100 so that 100 is the optimal fitness
        const fitness = 100 - DeltaE.getDeltaE00(valueLAB, optimalLAB);

        return fitness.toFixed(1);
    }

    generateStartingPop(popSize, optimal, deathCutoff) {
        // initialize population
        let population = {
            generation: 0,
            individuals: [],
        };

        // add individuals to population
        for (let i = 0; i < popSize; i++) {
            // create new color
            const value = this.newColor();

            population.individuals.push({
                value: value,
                fitness: this.calculateFitness(value, optimal),
            });
        }

        // remove the weaklings before returning
        return this.death(population, deathCutoff);
    }

    // compute the next generation
    nextGen(prevGen, popSize, optimal, deathCutoff) {

        // the population is grouped into pairs for breeding
        // I temporarily change the object for the selection
        let selectionPop = this.selection(prevGen, popSize);

        // the pairs will now breed
        let nextGen = this.crossover(selectionPop, optimal);

        // add mutations
        nextGen = this.mutation(nextGen);

        // update counter
        nextGen = this.updateCounter(nextGen);

        // remove the weaklings
        nextGen = this.death(nextGen, deathCutoff);

        return nextGen;
    }

    // remove individuals with fitness below cutoff
    death(pop, deathCutoff) {
        const newIndividuals = pop.individuals.filter(i => i.fitness >= deathCutoff);
        return {
            ...pop,
            individuals: newIndividuals,
        };
    }

    selection(pop, popSize) {
        // selectionPop object contains pairs for the crossover step later on
        const selectionPop = {
            generation: pop.generation,
            pairs: [],
        };

        /*
            Population breeds until popSize is full.
            The more fit, the more likely an individual is to breed.
         */
        const individuals = pop.individuals;
        for (let i = 0; i < popSize; i++) {

            // pair is two individuals who will mate
            let pair = []; //

            const individual = this.randWeightedInd(individuals);
            pair.push(individual); // push random individual to pair

            // ensure an individual is not paired with itself
            // this is really not ideal TODO figure out a better way
            let nextPair;
            do {
                nextPair = this.randWeightedInd(individuals); // next in pair
                pair[1] = nextPair; // assign random individual to next spot
            } while (nextPair === pair[0]) // do this until the pair has distinct members

            // once that's done, push it to pairs
            selectionPop.pairs.push(pair);
        }
        return selectionPop;
    }

    // returns an individual randomly based on their fitness
    randWeightedInd(individuals) {
        // sum of fitness
        const indFitness = individuals.map(x => parseInt(x.fitness));
        const weightSums = indFitness.reduce((acc, cur) => acc + cur);
        let randNum = this.getRandomInt(0, weightSums); // random value from 0 to weightSums

        for (let j = 0; j < individuals.length; j++) {
            if (randNum < individuals[j].fitness) {
                return individuals[j];
            }
            randNum -= individuals[j].fitness;
        }

        // if loop ends with no return, return last element
        // this introduces a bias, but it shouldn't be too bad
        console.log("reached end in weightedInd, defaulting to last element")
        return individuals[individuals.length - 1];
    }

    // combine color values
    crossover(sel, optimal) {
        // recreate population object
        let nextPop = {
            generation: sel.generation,
            individuals: [],
        };

        // combine each pair into one individual
        for (let i = 0; i < sel.pairs.length; i++) {
            let nextInd = this.mate(sel.pairs[i], optimal);
            nextPop.individuals.push(nextInd);
        }

        return nextPop;
    }

    // breed one pair
    mate(pair, optimal) {
        const mommy = pair[0]; // mommy and daddy have no meaning
        const daddy = pair[1]; // gender does not exist in this universe


        /*
            Convert all color values to string, and pad with 0s to reach 3 digits.
            CrossPnt chooses where to cross the parent's color info.
            --> from 1 to 8 to ensure baby is not the exact same as one of the parents
            Then the string will be split back into color info
        */
        const mommyGene = this.colorToGene(mommy.value);
        const daddyGene = this.colorToGene(daddy.value);

        const crossPnt = this.getRandomInt(1, 8);
        const babyGene = mommyGene.substring(0, crossPnt) + daddyGene.substring(crossPnt);

        const value = this.geneToColor(babyGene);

        const baby = {
            value: value,
            fitness: this.calculateFitness(value, optimal),
            mommy: {
                value: mommy.value,
                fitness: mommy.fitness,
            },
            daddy: {
                value: daddy.value,
                fitness: daddy.fitness,
            },
        }

        return baby;
    }

    // return string of all padded rgb values
    colorToGene(color) {
        const R = this.pad(color.r);
        const G = this.pad(color.g);
        const B = this.pad(color.b);
        return R + G + B;
    }

    // add 0s before number until it's 3 digits long and return as string
    pad(num) {
        let s = num.toString();

        for (let i = s.length; i < 3; i++) {
            s = "0" + s;
        }

        return s;
    }

    // takes gene string, converts to RGB color
    geneToColor(gene) {
        const color = {
            r: parseInt(gene.substring(0, 3)),
            g: parseInt(gene.substring(3, 6)),
            b: parseInt(gene.substring(6, 9)),
        };
        return color;
    }

    // occasionally add or subtract random amounts from the individual's RGB values
    mutation(pop) {

        for (let i = 0; i < pop.individuals.length; i++) {
            const ind = pop.individuals[i];

            const mutationProb = 0.01;
            if (Math.random() < mutationProb) {

                const sign = Math.random() < 0.5 ? -1 : 1; // adding or subtracting?

                const mutationVal = this.getRandomInt(0, 2); // which value will be modified? (R, G, or B)

                // a random integer that tends to be fairly small, but can be larger
                const delta = Math.round(this.rand_bm(0, 255, 5));

                switch(mutationVal) {
                    case 0:
                        ind.value.r = ind.value.r + (delta * sign);
                        break;
                    case 1:
                        ind.value.g = ind.value.b + (delta * sign);
                        break;
                    case 2:
                        ind.value.b = ind.value.b + (delta * sign);
                        break;
                }
            }
        }

        return pop;
    }

    // Box–Muller transform to give random numbers that tend to be in a specific range, but can be larger or smaller.
    // from https://stackoverflow.com/a/49434653
    rand_bm (min, max, skew) {
        let u = 0, v = 0;
        while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
        while(v === 0) v = Math.random();
        let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );

        num = num / 10.0 + 0.5; // Translate to 0 -> 1
        if (num > 1 || num < 0) num = this.rand_bm(min, max, skew); // re sample between 0 and 1 if out of range
        num = Math.pow(num, skew); // Skew
        num *= max - min; // Stretch to fill range
        num += min; // offset to min
        return num;
    }

    // this could have been done earlier, but I make it it's own step for clarity
    updateCounter(pop) {
        return {
            generation: pop.generation + 1,
            individuals: pop.individuals,
        };
    }
}

export default Algorithm;
