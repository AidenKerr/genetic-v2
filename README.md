# Genetic Algorithm  
### What is this?  

This is a program I initially wrote for a BIOL 111 project. It visualizes the process of natural selection & evolution.

I must admit, I am not a biologist! This is a fun visualization, but I do not make any claims about realism.

This visualisation uses color to represent some arbitrary trait. When you click start, watch as the population's colors evolve!

### How do I use this?  

First, choose your settings:

* __Population Size:__ The max number of individuals in your population. 
* __Death Cutoff:__ Any individuals with a fitness below this cutoff will sadly pass away.
* __Max Generations:__ The maximum number of generations to run this for.
* __Display Every:__ Display every n generations.
* __Optimal Color:__ This represents the color the colour the fitness score will be based on. 

Next, click start.

The algorithm will then generate an initial population, followed by each consecutive generation.

### How does this work?  

This algorithm works by repeating a series of steps.

First, it must generate a random population. It does this by generating random numbers and then calculating a fitness score (described below).

Each following generation is created with these steps:

* Death
* Selection
* Crossover
* Mutation

### Is this realistic?  

Short answer: no.

Long answer: this is a very simplified model.

In reality, populations do not evolve towards a fixed goal.

In reality, They do not have a fixed population size (before deaths).

In reality, family & gender exists.

This is a cool, working visualisation, but it is not true reality.  

### Known Bugs & future plans  

These are things I intend to fix or implement

* Fitness is calculated before mutations
* Data analysis screens (eg fitness over time)
