(this["webpackJsonpgenetic-v2"]=this["webpackJsonpgenetic-v2"]||[]).push([[0],{125:function(e,t,n){e.exports=n(324)},130:function(e,t,n){},131:function(e,t,n){},297:function(e,t,n){},298:function(e,t,n){},299:function(e,t,n){},300:function(e,t,n){},320:function(e,t,n){},324:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(119),r=n.n(s),l=(n(130),n(71)),o=n(21),u=n(22),c=n(9),h=n(46),d=n(45),v=(n(131),n(44)),m=n(120),p=(n(297),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(c.a)(a)),a.handleColorChange=a.handleColorChange.bind(Object(c.a)(a)),a.handleReset=a.handleReset.bind(Object(c.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(c.a)(a)),a}return Object(u.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=parseFloat(t.value),a=t.name,i=Object(v.a)({},a,n);this.props.onControlPanelChange(i)}},{key:"handleColorChange",value:function(e){var t={optimal:e.rgb};this.props.onControlPanelChange(t)}},{key:"handleReset",value:function(){this.props.stopInterval(),this.props.onControlPanelChange({generations:[],stats:{fitnessOverTime:[],stdDevOverTime:[],lowestFitness:100,highestFitness:0}})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onControlPanelSubmit()}},{key:"render",value:function(){return i.a.createElement("div",{className:"ControlPanel"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",null,"Population Size:",i.a.createElement("input",{name:"popSize",type:"number",value:this.props.popSize,onChange:this.handleChange,min:"2"})),i.a.createElement("br",null),i.a.createElement("label",null,"Death Cutoff:",i.a.createElement("input",{name:"deathCutoff",type:"number",value:this.props.deathCutoff,onChange:this.handleChange})),i.a.createElement("br",null),i.a.createElement("label",null,"Max Generations:",i.a.createElement("input",{name:"maxGens",type:"number",value:this.props.maxGens,onChange:this.handleChange})),i.a.createElement("br",null),i.a.createElement("label",null,"Display Every:",i.a.createElement("input",{name:"displayInterval",type:"number",value:this.props.displayInterval,onChange:this.handleChange,min:"1"})),i.a.createElement("br",null),i.a.createElement("label",null,"Mutation Rate:",i.a.createElement("input",{name:"mutationRate",type:"number",value:this.props.mutationRate,onChange:this.handleChange,min:"0",max:"100",step:"0.001"})),i.a.createElement("br",null),i.a.createElement("label",{className:"colorPicker"},"Optimal Color:",i.a.createElement(m.ChromePicker,{className:"chromePicker",color:this.props.optimal,onChange:this.handleColorChange,disableAlpha:!0})),i.a.createElement("br",null),i.a.createElement("input",{type:"submit",value:"Start"}),i.a.createElement("br",null),i.a.createElement("input",{type:"button",value:"Reset",onClick:this.handleReset})))}}]),n}(i.a.Component)),f=(n(298),n(299),n(15)),g=n.n(f);var b=function(e){var t=g()(e.mommy.value).hex(),n=g()(e.daddy.value).hex(),a=g()(e.child.value).hex();return i.a.createElement("div",{className:"container"},i.a.createElement("div",null,i.a.createElement("div",{className:"individual",style:{backgroundColor:t}},e.mommy.fitness),i.a.createElement("div",{className:"individual",style:{backgroundColor:n}},e.daddy.fitness)),i.a.createElement("div",{className:"arrow"},"\u2192"),i.a.createElement("div",null,i.a.createElement("div",{className:"individual",style:{backgroundColor:a}},e.child.fitness)))};var E=function(e){var t=e.population,n=t.individuals.map((function(e){return i.a.createElement(b,{mommy:e.mommy,daddy:e.daddy,child:e})}));return i.a.createElement("div",{className:"Population"},"Generation: ",t.generation,i.a.createElement("div",{className:"PopulationList"},n))};var y=function(e){var t=e.population.individuals.map((function(e){var t=g()(e.value).hex();return i.a.createElement("div",{className:"container",style:{backgroundColor:t}},e.fitness)}));return i.a.createElement("div",{className:"Population"},"Initial Population",i.a.createElement("div",{className:"PopulationList"},t))};n(300);var C=function(e){var t=e.generations.filter((function(t){return t.generation%e.displayInterval===0})).map((function(e){return 0===e.generation?i.a.createElement(y,{key:e.generation.toString(),population:e}):i.a.createElement(E,{key:e.generation.toString(),population:e})}));return t[0]?i.a.createElement("div",null,i.a.createElement("hr",null),i.a.createElement("div",{className:"Generations"},t)):null},k=n(4);n(319),n(320);var I=function(e){var t,n,a;return e.prevGen&&(t=e.prevGen.individuals.map((function(e,t){return{x:t,y:e.fitness}})),n=e.stats.fitnessOverTime[e.stats.fitnessOverTime.length-1].y,a=e.prevGen.generation),i.a.createElement("div",{className:"DataPanel"},i.a.createElement("div",{className:"Data"},i.a.createElement(k.f,{height:300,width:300},i.a.createElement(k.d,null),i.a.createElement(k.a,null),i.a.createElement(k.e,{title:"Generation"}),i.a.createElement(k.g,{title:"Fitness"}),i.a.createElement(k.b,{data:e.stats.fitnessOverTime}))),i.a.createElement("div",{className:"Data"},i.a.createElement(k.f,{yDomain:[0,100],height:300,width:300},i.a.createElement(k.d,null),i.a.createElement(k.a,null),i.a.createElement(k.e,{title:"Individual"}),i.a.createElement(k.g,{title:"Fitness"}),i.a.createElement(k.c,{data:t}))),i.a.createElement("div",{className:"Data"},i.a.createElement(k.f,{height:300,width:300},i.a.createElement(k.d,null),i.a.createElement(k.a,null),i.a.createElement(k.e,{title:"Generation"}),i.a.createElement(k.g,{title:"Standard Deviation of Fitness"}),i.a.createElement(k.b,{data:e.stats.stdDevOverTime}))),i.a.createElement("div",{className:"Info"},i.a.createElement("div",null,"Generation: ",a),i.a.createElement("div",null,"Lowest Fitness: ",e.stats.lowestFitness),i.a.createElement("div",null,"Highest Fitness: ",e.stats.highestFitness),i.a.createElement("div",null,"Average Fitness: ",n)))},F=n(70),O=n(122),S=n.n(O),w=function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,[{key:"getRandomInt",value:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},{key:"newColor",value:function(){return{r:this.getRandomInt(0,255),g:this.getRandomInt(0,255),b:this.getRandomInt(0,255)}}},{key:"convertToLab",value:function(e){var t=g()(e).labObject();return{L:t.l,A:t.a,B:t.b}}},{key:"calculateFitness",value:function(e,t){var n=this.convertToLab(e),a=this.convertToLab(t),i=100-S.a.getDeltaE00(n,a);return parseFloat(i.toFixed(1))}},{key:"generateStartingPop",value:function(e,t,n){for(var a={generation:0,individuals:[]},i=0;i<e;i++){var s=this.newColor();a.individuals.push({value:s,fitness:this.calculateFitness(s,t)})}return this.death(a,n)}},{key:"nextGen",value:function(e,t,n,a,i){var s=this.selection(e,t),r=this.crossover(s);return r=this.mutation(r,i),r=this.assignFitness(r,n),r=this.updateCounter(r),r=this.death(r,a),r}},{key:"death",value:function(e,t){var n=e.individuals.filter((function(e){return e.fitness>=t}));return Object(F.a)(Object(F.a)({},e),{},{individuals:n})}},{key:"selection",value:function(e,t){for(var n={generation:e.generation,pairs:[]},a=e.individuals,i=0;i<t;i++){var s=[],r=this.randWeightedInd(a);s.push(r);var l=void 0;do{l=this.randWeightedInd(a),s[1]=l}while(l===s[0]);n.pairs.push(s)}return n}},{key:"randWeightedInd",value:function(e){for(var t=e.map((function(e){return e.fitness})).reduce((function(e,t){return e+t})),n=this.getRandomInt(0,t),a=0;a<e.length;a++){if(n<e[a].fitness)return e[a];n-=e[a].fitness}return e[e.length-1]}},{key:"crossover",value:function(e){for(var t={generation:e.generation,individuals:[]},n=0;n<e.pairs.length;n++){var a=this.mate(e.pairs[n]);t.individuals.push(a)}return t}},{key:"mate",value:function(e){var t=e[0],n=e[1],a=this.colorToGene(t.value),i=this.colorToGene(n.value),s=this.getRandomInt(1,8),r=a.substring(0,s)+i.substring(s);return{value:this.geneToColor(r),fitness:0,mommy:{value:t.value,fitness:t.fitness},daddy:{value:n.value,fitness:n.fitness}}}},{key:"colorToGene",value:function(e){return this.pad(e.r)+this.pad(e.g)+this.pad(e.b)}},{key:"pad",value:function(e){for(var t=e.toString(),n=t.length;n<3;n++)t="0"+t;return t}},{key:"geneToColor",value:function(e){return{r:parseInt(e.substring(0,3)),g:parseInt(e.substring(3,6)),b:parseInt(e.substring(6,9))}}},{key:"mutation",value:function(e,t){for(var n=0;n<e.individuals.length;n++){var a=e.individuals[n];if(Math.random()<t){var i=Math.random()<.5?-1:1,s=this.getRandomInt(0,2),r=Math.round(this.rand_bm(0,255,5)),l=void 0;switch(s){case 0:l=a.value.r+r*i,e.individuals[n].value.r=Math.min(l,255);break;case 1:l=a.value.g+r*i,e.individuals[n].value.g=Math.min(l,255);break;case 2:l=a.value.b+r*i,e.individuals[n].value.b=Math.min(l,255)}}}return e}},{key:"rand_bm",value:function(e,t,n){for(var a=0,i=0;0===a;)a=Math.random();for(;0===i;)i=Math.random();var s=Math.sqrt(-2*Math.log(a))*Math.cos(2*Math.PI*i);return((s=s/10+.5)>1||s<0)&&(s=this.rand_bm(e,t,n)),s=Math.pow(s,n),s*=t-e,s+=e}},{key:"assignFitness",value:function(e,t){for(var n=0;n<e.individuals.length;n++){var a=e.individuals[n].value;e.individuals[n].fitness=this.calculateFitness(a,t)}return e}},{key:"updateCounter",value:function(e){return{generation:e.generation+1,individuals:e.individuals}}}]),e}(),P=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).alg=new w,a.state={popSize:50,deathCutoff:5,maxGens:50,mutationRate:.01,displayInterval:25,optimal:a.alg.newColor(),generations:[],stats:{fitnessOverTime:[],stdDevOverTime:[],lowestFitness:100,highestFitness:0}},a.handleControlPanelChange=a.handleControlPanelChange.bind(Object(c.a)(a)),a.handleControlPanelSubmit=a.handleControlPanelSubmit.bind(Object(c.a)(a)),a.stopInterval=a.stopInterval.bind(Object(c.a)(a)),a}return Object(u.a)(n,[{key:"handleControlPanelChange",value:function(e){this.setState(e)}},{key:"handleControlPanelSubmit",value:function(){var e=this;clearInterval(this.genInterval);var t=this.alg.generateStartingPop(this.state.popSize,this.state.optimal,this.state.deathCutoff);this.setState({generations:[t],stats:{fitnessOverTime:[this.calculateAverageFitness(t)],stdDevOverTime:[this.calculateStdDevFitness(t)],lowestFitness:this.findLowestFitness(100,t),highestFitness:this.findHighestFitness(0,t)}}),this.genInterval=setInterval((function(){return e.nextGen()}),0)}},{key:"nextGen",value:function(){var e=this.state.generations,t=e[e.length-1];if(t.generation>=this.state.maxGens)clearInterval(this.genInterval);else{var n=this.state.popSize,a=this.state.optimal,i=this.state.deathCutoff,s=this.state.mutationRate,r=this.alg.nextGen(t,n,a,i,s);if(r.individuals.length>1){e.push(r);var l=this.state.stats,o=l.fitnessOverTime,u=l.stdDevOverTime,c=l.lowestFitness,h=l.highestFitness;o.push(this.calculateAverageFitness(r)),u.push(this.calculateStdDevFitness(r)),c=this.findLowestFitness(c,r),h=this.findHighestFitness(h,r),this.setState({generations:e,stats:{fitnessOverTime:o,stdDevOverTime:u,lowestFitness:c,highestFitness:h}})}else clearInterval(this.genInterval)}}},{key:"stopInterval",value:function(){clearInterval(this.genInterval)}},{key:"calculateAverageFitness",value:function(e){var t=e.generation,n=e.individuals;return{x:t,y:(n.reduce((function(e,t){return e+parseFloat(t.fitness)}),0)/n.length).toFixed(1)}}},{key:"calculateStdDevFitness",value:function(e){var t=e.generation,n=e.individuals.map((function(e){return e.fitness})),a=n.length,i=n.reduce((function(e,t){return e+t}))/a;return{x:t,y:Math.sqrt(n.map((function(e){return Math.pow(e-i,2)})).reduce((function(e,t){return e+t}))/a)}}},{key:"findHighestFitness",value:function(e,t){var n=t.individuals.map((function(e){return e.fitness}));return Math.max.apply(Math,Object(l.a)(n).concat([e]))}},{key:"findLowestFitness",value:function(e,t){var n=t.individuals.map((function(e){return e.fitness}));return Math.min.apply(Math,Object(l.a)(n).concat([e]))}},{key:"render",value:function(){var e=this.state.generations,t=this.state.generations[this.state.generations.length-1];return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Genetic Algorithm"),i.a.createElement("h5",null,"By Aiden Kerr"),i.a.createElement("a",{href:"https://github.com/AidenKerr/genetic-v2/blob/master/README.md"},"What is this? Click Here!"),i.a.createElement(p,{popSize:this.state.popSize,deathCutoff:this.state.deathCutoff,maxGens:this.state.maxGens,mutationRate:this.state.mutationRate,displayInterval:this.state.displayInterval,optimal:this.state.optimal,onControlPanelChange:this.handleControlPanelChange,onControlPanelSubmit:this.handleControlPanelSubmit,stopInterval:this.stopInterval}),i.a.createElement(I,{stats:this.state.stats,prevGen:t}),i.a.createElement(C,{generations:e,displayInterval:this.state.displayInterval}))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[125,1,2]]]);
//# sourceMappingURL=main.17f13447.chunk.js.map