# Genetic Algorithm  
## What is this?  

This is a program I initially wrote for a BIOL 111 project. It visualizes the process of natural selection & evolution.

I must admit, I am not a biologist! This is a fun visualization, but I do not make any claims about realism.

This visualisation uses color to represent some arbitrary trait. When you click start, watch as the population's colors evolve!

## How do I use this?  

First, choose your settings:

* __Population Size:__ The max number of individuals in your population. 
* __Death Cutoff:__ Any individuals with a fitness below this cutoff will sadly pass away.
* __Max Generations:__ The maximum number of generations to run this for.
* __Display Every:__ Display every n generations.
* __Optimal Color:__ This represents the color the colour the fitness score will be based on. 

Next, click start.

The algorithm will then generate an initial population, followed by each consecutive generation.

## How does this work?  

This algorithm works by repeating a series of steps.

First, it must generate a random population. It does this by generating random colors for each individual in the population and then calculating fitness scores for them (described below).

Each following generation is created with these steps:

* Selection
* Crossover
* Mutation
* Death

### Fitness Function

The fitness function uses the [DeltaE](http://zschuessler.github.io/DeltaE/) library to quantify color differences.

I could have used Euclidean distance, but the DeltaE library quantifies color difference based on human vision. [Read more here.](http://zschuessler.github.io/DeltaE/learn/)

This means two very dark colours with wildly different hues would be considered similar. Using Euclidean distance, these colors would be considered different.

Was this a good choice? I initially chose to do it this way because I intended to make a visual demonstration, so it would make sense to quantify visual differences only.

However, now I realize it means populations have multiple valid colors they could "adapt to".

For example, if the optimal color is very dark, the final population could be potentially any hue.

This is similar to [fitness landscapes!](https://en.wikipedia.org/wiki/Fitness_landscape)

<img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Visualization_of_a_population_evolving_in_a_static_fitness_landscape.gif" width="300px">  

Once the color difference is calculated, I subtract it from 100 to create the fitness. 

### Selection

The selection function pairs individuals together to mate. They are paired randomly, but weighted by fitness.

This creates a mating bias for more fit individuals. This is the only desired bias in the webapp, and it is the bias that drives natural selection.

### Crossover

This step combines the color values together. It does this by concatenating the RGB values, choosing a random crossover point, switching the values at this point, and then turning it back into it's RGB values.

For example:

1) {R: 155, G: 42, B: 255} and {R:255, G:120, B: 33}
2) "155042255" and "255120033"
3) "1550 42255" and "2551 20033"
4) "155020033"
5) {R: 155, G: 020, B: 033}

### Mutation

Mutations will add or subtract a random amount from one of the RGB values. This amount is typically small, but can be larger.

Mutations do not always occur.

### Death

Death removes all who are not sufficiently fit. You can adjust this cutoff in the settings! 

## Is this realistic?  

No. This is a very simplified model.

Here are some ways this _isn't_ realistic:

* Fixed population size.
* Populations evolve towards a fixed goal.
* Lacks concepts of family or gender


This is a cool, working visualisation, but it is not true reality.  

## Known Bugs & future plans  

These are things I intend to fix or implement

* Setting the death cutoff too high may result in a crash
* Data analysis screens (eg fitness over time)
* Add mutation rate to Control Panel
