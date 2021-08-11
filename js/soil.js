var width1 = 1800 //1030 * 200
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

//Build multi line soil graph    
function soilWaterGraph(){
    
    removeSVG();
    
    var svg = createSVG(); 
    
    d3.csv("data/CSV/07/2020-07-soil-water.csv",
           function(d){
               return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(
     
        function(data) {
            const x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.date; }))
            .range([ 0, (width1 - margin1) ]);
            
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
            .attr("stroke", "red")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(d.value) })
            )

        })
}

function soilTemperatureGraph() {
    
    var svg = createSVG();
    
    d3.csv("data/CSV/07/2020-07-soil-temperature.csv",
           function(d){
               return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(
        
        function(data) {
     
            const x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.date; }))
            .range([ 0, (width1 - margin1) ]);
            
            svg.append("g")
           .attr("transform", `translate(0, 0)`)
           .call(d3.axisBottom(x));
        
            const y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.value; })])
            .range([ (height1 - margin2), 0 ]);
            
            svg.append("g")
            .attr("transform", `translate(0, -200)`)
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
