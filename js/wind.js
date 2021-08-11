// var margin = {top: 200, right: 20, bottom: 20, left: 450},   
//     width = 1500 - margin.left - margin.right,  
//     height = 600 - margin.top - margin.bottom; 

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

function windGraph(){
    
    removeSVG();
    
    var svg = createSVG();
    
    d3.csv("data/CSV/07/2020-07-wind-speed-average.csv",
           function(d){
               return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(
        // Now I can use this dataset:
        function(data) {
            // Add X axis --> it is a date format
            const x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.date; }))
            .range([ 0, (width1 - margin1) ]);  //width
            
            svg.append("g")
            .attr("transform", `translate(0, 200)`)   //${height}
            .call(d3.axisBottom(x));
            
            // Add Y axis
            const y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.value; })])
            .range([ (height1 - margin2), 0 ]);
            
            svg.append("g")
            .call(d3.axisLeft(y));
            
            //Add the line
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
