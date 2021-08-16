var margin = {top: 200, right: 20, bottom: 20, left: 40}, //200, 20, 20, 40
    width = 1100,  //1100
    height = 200,  //200
    screenWidth = 1800,
    screenHeight = 900,
    screenMargin1 = 770,
    screenMargin2 = 700;   //.method
    
    
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
    
function humidityGraph(month) {
        
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-humidity-average.csv";
    var file = path.concat(month).concat(sensor);
    
    d3.csv(file, function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(function(data) {
        const x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.date; }))
            .range([ 0, width ]);  //500
                    
        xAxis = svg.append("g")
            .attr("transform", `translate(0, 200)`)
            .call(d3.axisBottom(x));
                    
        const y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.value; })])
            .range([ (screenHeight - screenMargin2), 0 ]);
                    
        yAxis = svg.append("g")
            .call(d3.axisLeft(y));
        
        const clip = svg.append("defs").append("svg:clipPath")
            .attr("id", "clip")
            .append("svg:rect")
            .attr("width", width)   //width
            .attr("height", height)  //height  quanto vedo di grafico all'inizio
            .attr("x", 0)
            .attr("y", 0);
        
        const brush = d3.brushX() 
            .extent([[0,0], [width, height]])  //width, height   area selezione
            .on("end", updateChart)
        
        const line = svg.append("g")
            .attr("clip-path", "url(#clip)")
            
        line.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("d", d3.line()
                .x(function(d) {return x(d.date)})
                .y(function(d) {return y(d.value)})
             )
        line.append("g")
            .attr("class", "brush")
            .call(brush)
            
        let idleTimeout
        function idled() {idleTimeout = null; }
        
        function updateChart(event,d){
            extent = event.selection
            
            if(!extent){
                if (!idleTimeout) return idleTimeout = setTimeout(idled, 350);
                x.domain([ 4,8])
            } else {
                x.domain([ x.invert(extent[0]), x.invert(extent[1]) ])
                line.select(".brush").call(brush.move, null)
            }
            xAxis.transition().duration(1000).call(d3.axisBottom(x))
            line.select('.line')
                .transition()
                .duration(1000)
                .attr("d", d3.line()
                    .x(function(d) {return x(d.date) })
                    .y(function(d) {return y(d.value) }))
        }
        
        svg.on("dblclick", function(){
            x.domain(d3.extent(data, function(d) {return d.date; }))
            xAxis.transition().call(d3.axisBottom(x))
            line.select('.line')
                .transition()
                .attr("d", d3.line()
                    .x(function(d) {return x(d.date) })
                    .y(function(d) {return y(d.value) }))
        });
 })
}
    
    
function buildHumidityGraph() {
        
    var option = document.getElementById("humidity").value;
    
    switch(option){
        case "july":
            humidityGraph("07");
            break;
            
        case "august":
            humidityGraph("08");
            break;
            
        case "september":
            humidityGraph("09");
            break;
        
        case "october":
            humidityOctober("10");
            break;
        
        case "november":
            humidityGraph("11");
            break;
        
        case "november":
            humidityDecember("12");
            break;
    }
}
