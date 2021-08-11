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
    .attr("width", 600)
    .attr("height", 300)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
    return svg;

}


function windSpeedJuly() {
    
    removeSVG();
    
    var svg = createSVG();
    
    d3.csv("data/CSV/07/2020-07-wind-speed-average.csv",
           function(d){
               return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(
        function(data) {
            
            const x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.date; }))
            .range([ 0, 500 ]);   //width
            
            svg.append("g")
            .attr("transform", `translate(0, 200)`)   //${height}
            .call(d3.axisBottom(x));
            

            const y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.value; })])
            .range([ (height1 - margin2), 0 ]);
            
            svg.append("g")
            .call(d3.axisLeft(y));
            
            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "green")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(d.value) })
            )
            
        })
}

function windSpeedAugust() {
    
    var svg = createSVG();
    
    d3.csv("data/CSV/08/2020-08-wind-speed-average.csv",
           function(d){
               return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(
        function(data) {
            
            const x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.date; }))
            .range([ 0, 500 ]);   //width
            
            svg.append("g")
            .attr("transform", `translate(0, 200)`)   //${height}
            .call(d3.axisBottom(x));
            

            const y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.value; })])
            .range([ (height1 - margin2), 0 ]);
            
            svg.append("g")
            .call(d3.axisLeft(y));
            
            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "green")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(d.value) })
            )
            
        })
}

function windSpeedSeptember() {

    
    var svg = createSVG();
    
    d3.csv("data/CSV/09/2020-09-wind-speed-average.csv",
           function(d){
               return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(
        function(data) {
            
            const x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.date; }))
            .range([ 0, 500 ]);   //width
            
            svg.append("g")
            .attr("transform", `translate(0, 200)`)   //${height}
            .call(d3.axisBottom(x));
            

            const y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.value; })])
            .range([ (height1 - margin2), 0 ]);
            
            svg.append("g")
            .call(d3.axisLeft(y));
            
            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "green")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(d.value) })
            )
            
        })
}

function windSpeedOctober() {

    
    var svg = createSVG();
    
    d3.csv("data/CSV/10/2020-10-wind-speed-average.csv",
           function(d){
               return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(
        function(data) {
            
            const x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.date; }))
            .range([ 0, 500 ]);   //width
            
            svg.append("g")
            .attr("transform", `translate(0, 200)`)   //${height}
            .call(d3.axisBottom(x));
            

            const y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.value; })])
            .range([ (height1 - margin2), 0 ]);
            
            svg.append("g")
            .call(d3.axisLeft(y));
            
            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "green")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(d.value) })
            )
            
        })
}

function windSpeedNovember() {

    
    var svg = createSVG();
    
    d3.csv("data/CSV/11/2020-11-wind-speed-average.csv",
           function(d){
               return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(
        function(data) {
            
            const x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.date; }))
            .range([ 0, 500 ]);   //width
            
            svg.append("g")
            .attr("transform", `translate(0, 200)`)   //${height}
            .call(d3.axisBottom(x));
            

            const y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.value; })])
            .range([ (height1 - margin2), 0 ]);
            
            svg.append("g")
            .call(d3.axisLeft(y));
            
            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "green")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(d.value) })
            )
            
        })
}

function windSpeedDecember() {
    
    var svg = createSVG();
    
    d3.csv("data/CSV/12/2020-12-wind-speed-average.csv",
           function(d){
               return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(
        function(data) {
            
            const x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.date; }))
            .range([ 0, 500 ]);   //width
            
            svg.append("g")
            .attr("transform", `translate(0, 200)`)   //${height}
            .call(d3.axisBottom(x));
            

            const y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.value; })])
            .range([ (height1 - margin2), 0 ]);
            
            svg.append("g")
            .call(d3.axisLeft(y));
            
            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "green")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(d.value) })
            )
            
        })
}
