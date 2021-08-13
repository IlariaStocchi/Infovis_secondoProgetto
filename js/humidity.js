// var margin = {top: 200, right: 20, bottom: 20, left: 450},   //10 30 30 60
//     width = 1500 - margin.left - margin.right,  //460
//     height = 600 - margin.top - margin.bottom; //400

var   width1 = 1800 //1030 * 200
      height1 = 900,
      margin1 = 770,  
      margin2 = 700; 
      
function removeSVG(){
    var v1 = document.getElementsByTagName('svg');
    if(v1.length >= 0 ){
        d3.select("svg").remove();
    }
}

function createSVG(){
    var svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
    return svg;
}



function humidityJuly() {
    
    var svg = createSVG();
    
    d3.csv("data/CSV/07/2020-07-humidity-average.csv",
           function(d){
               return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.date), value : d.value }})
    .then(
        
        function(data) {
     
            const x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.date; }))
            .range([ 0, 500 ]);
            
            svg.append("g")
           .attr("transform", `translate(0, 200)`)
           .call(d3.axisBottom(x));
        
            const y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.value; })])
            .range([ (height1 - margin2), 0 ]);
            
            svg.append("g")
            .call(d3.axisLeft(y));
           
            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "blue")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(d.value) })
            )
        })
}

function humidityAugust() {
    
    var svg = createSVG();
    
    d3.csv("data/CSV/08/2020-08-humidity-average.csv",
           function(d){
               return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(
        
        function(data) {
     
            const x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.date; }))
            .range([ 0, 500 ]);
            
            svg.append("g")
           .attr("transform", `translate(0, 200)`)
           .call(d3.axisBottom(x));
        
            const y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.value; })])
            .range([ (height1 - margin2), 0 ]);
            
            svg.append("g")
            .call(d3.axisLeft(y));
           
            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "blue")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(d.value) })
            )
        })
}

function humiditySeptember() {
    
    var svg = createSVG();
    
    d3.csv("data/CSV/09/2020-09-humidity-average.csv",
           function(d){
               return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(
        
        function(data) {
     
            const x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.date; }))
            .range([ 0, 500 ]);
            
            svg.append("g")
           .attr("transform", `translate(0, 200)`)
           .call(d3.axisBottom(x));
        
            const y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.value; })])
            .range([ (height1 - margin2), 0 ]);
            
            svg.append("g")
            .call(d3.axisLeft(y));
           
            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "blue")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(d.value) })
            )
        })
}

function humidityOctober() {
    
    var svg = createSVG();
    
    d3.csv("data/CSV/10/2020-10-humidity-average.csv",
           function(d){
               return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(
        
        function(data) {
     
            const x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.date; }))
            .range([ 0, 500 ]);
            
            svg.append("g")
           .attr("transform", `translate(0, 200)`)
           .call(d3.axisBottom(x));
        
            const y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.value; })])
            .range([ (height1 - margin2), 0 ]);
            
            svg.append("g")
            .call(d3.axisLeft(y));
           
            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "blue")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(d.value) })
            )
        })
}

function humidityNovember() {
    
    var svg = createSVG();
    
    d3.csv("data/CSV/11/2020-11-humidity-average.csv",
           function(d){
               return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(
        
        function(data) {
     
            const x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.date; }))
            .range([ 0, 500 ]);
            
            svg.append("g")
           .attr("transform", `translate(0, 200)`)
           .call(d3.axisBottom(x));
        
            const y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.value; })])
            .range([ (height1 - margin2), 0 ]);
            
            svg.append("g")
            .call(d3.axisLeft(y));
           
            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "blue")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(d.value) })
            )
        })
}

function humidityDecember() {
    
    var svg = createSVG();
    
    d3.csv("data/CSV/11/2020-11-humidity-average.csv",
           function(d){
               return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(
        
        function(data) {
     
            const x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.date; }))
            .range([ 0, 500 ]);
            
            svg.append("g")
           .attr("transform", `translate(0, 200)`)
           .call(d3.axisBottom(x));
        
            const y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.value; })])
            .range([ (height1 - margin2), 0 ]);
            
            svg.append("g")
            .call(d3.axisLeft(y));
           
            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "blue")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(d.value) })
            )
        })
}
