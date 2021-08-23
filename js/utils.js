var margin = {top: 200, right: 20, bottom: 20, left: 450}, 
    width = 1100,  //1100
    height = 200,  //200
    screenWidth = 1800,
    screenHeight = 900,
    screenMargin1 = 770,
    screenMargin2 = 700;  

function createSVG(){
    var first_graph = document.getElementById("first_line_graph");   
    var second_graph = document.getElementById("second_line_graph"); 
    var svg;
    if(first_graph.hasChildNodes() && second_graph.hasChildNodes()){
        // remove all SVG
        var v1 = document.getElementsByTagName('svg');
        if(v1.length > 0 ){
            d3.selectAll('svg').remove();
        }
    }
    if(first_graph.hasChildNodes()){
        svg = createSecondSVG();
    }
    else{
        svg = createFirstSVG();
    }
    return svg;
}
    
function createFirstSVG(){
    var svg = d3.select("#first_line_graph")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
    return svg;
} 

function createSecondSVG(){
    var svg = d3.select("#second_line_graph")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
    return svg;
}  

function removeSVG(){
    
    var v1 = document.getElementsByTagName('svg');
    if(v1.length >= 0 ){
        d3.select("svg").remove();
    }
}


function buildGraph(sensorOption, month, fieldNumber) {
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor;
    var key;
    var color;
    var unitMeasure;
    
    switch(sensorOption){
        case "humidity":
            var sensor = "-humidity-average.csv";
            var key = ["Humidity average"];
            var color = "steelblue";
            var unitMeasure = "%";
            break;
            
        case "temperature":
            var sensor = "-temperature-average.csv";
            var key = ["Temperature average"];
            var color = "salmon";
            var unitMeasure = "°C";
            break;
            
        case "windSpeed":
            var sensor = "-wind-speed-average.csv";
            var key = ["Wind speed"];
            var color = "mediumorchid";
            var unitMeasure = "Km//h";
            break;
        
        case "windDir":
            var sensor = "-wind-dir.csv";
            var key = ["Wind direction"];
            var color = "crimson";
            var unitMeasure = "Degrees";
            break;
        
        case "solar":
            var sensor = "-solar.csv";
            var key = ["Solar radiation"];
            var color = "seagreen";
            var unitMeasure = "V";
            break;
        
        case "rain":
            var sensor = "-rain.csv";
            var key = ["Rain"];
            var color = "lightskyblue";
            var unitMeasure = "mm";
            break;
            
        case "pressure":
            var sensor = "-pressure.csv";
            var key = ["Air pressure"];
            var color = "peru";
            var unitMeasure = "bit";
            break;
            
        case "soilWater":
            switch (fieldNumber){
                case "01":
                    var sensor = "-soil-water-tn01.csv";
                    var key = ["Soil Water Area 1"];
                    break;
                    
                case "02":
                    var sensor = "-soil-water-tn02.csv";
                    var key = ["Soil Water Area 2"];
                    break;
                    
                case "03":
                    var sensor = "-soil-water-tn03.csv";
                    var key = ["Soil Water Area 3"];
                    break;
                    
                case "04":
                    var sensor = "-soil-water-tn04.csv";
                    var key = ["Soil Water Area 4"];
                    break;
                    
                case "05":
                    var sensor = "-soil-water-tn05.csv";
                    var key = ["Soil Water Area 5"];
                    break;
                    
                case "06":
                    var sensor = "-soil-water-tn06.csv";
                    var key = ["Soil Water Area 6"];
                    break;
                    
                case "07":
                    var sensor = "-soil-water-tn07.csv";
                    var key = ["Soil Water Area 7"];
                    break;
                    
                case "08":
                    var sensor = "-soil-water-tn08.csv";
                    var key = ["Soil Water Area 8"];
                    break;
                    
                case "09":
                    var sensor = "-soil-water-tn09.csv";
                    var key = ["Soil Water Area 9"];
                    break;
            }
            var color = "brown";
            var unitMeasure = "m^3";
            break;
            
        case "soilTemperature":
            switch (fieldNumber){
                case "01":
                    var sensor = "-soil-temperature-tn01.csv";
                    var key = ["Soil Temperature Area 1"];
                    break;
                    
                case "02":
                    var sensor = "-soil-temperature-tn02.csv";
                    var key = ["Soil Temperature Area 2"];
                    break;
                    
                case "03":
                    var sensor = "-soil-temperature-tn03.csv";
                    var key = ["Soil Temperature Area 3"];
                    break;
                    
                case "04":
                    var sensor = "-soil-temperature-tn04.csv";
                    var key = ["Soil Temperature Area 4"];
                    break;
                    
                case "05":
                    var sensor = "-soil-temperature-tn05.csv";
                    var key = ["Soil Temperature Area 5"];
                    break;
                    
                case "06":
                    var sensor = "-soil-temperature-tn06.csv";
                    var key = ["Soil Temperature Area 6"];
                    break;
                    
                case "07":
                    var sensor = "-soil-temperature-tn07.csv";
                    var key = ["Soil Temperature Area 7"];
                    break;
                    
                case "08":
                    var sensor = "-soil-temperature-tn08.csv";
                    var key = ["Soil Temperature Area 8"];
                    break;
                    
                case "09":
                    var sensor = "-soil-temperature-tn09.csv";
                    var key = ["Soil Temperature Area 9"];
                    break;
            }
            var color = "darkorange";
            var unitMeasure = "°C";
            break;
        
    }
    
    var file = path.concat(month).concat(sensor);
    
    d3.csv(file, function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(function(data) {
        var x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.date; }))
            .range([ 0, width ]); 
                    
        var xAxis = svg.append("g")
            .attr("transform", `translate(0, 200)`)
            .call(d3.axisBottom(x));
                    
        var y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.value; })])
            .range([ (screenHeight - screenMargin2), 0 ]);
                    
        var yAxis = svg.append("g")
            .call(d3.axisLeft(y));
            
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", color)
            .text(function(d){ return d})
            .attr("text-anchor", "left")
            .style("alignment-baseline", "middle")
            .style("font-weight", "bold");
    
        svg.append("text")
            .attr("text-anchor", "end")
            .attr("x", 1100)
            .attr("y", 240)
            .text("Month");
        
        svg.append("text")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-90)")
            .attr("y", -30)
            .attr("x", -20)
            .text(unitMeasure)
        
        var clip = svg.append("defs").append("svg:clipPath")
            .attr("id", "clip")
            .append("svg:rect")
            .attr("width", width)   
            .attr("height", height)  
            .attr("x", 0)
            .attr("y", 0);
        
        var brush = d3.brushX() 
            .extent([[0,0], [width, height]])  
            .on("end", updateChart)
        
        var line = svg.append("g")
            .attr("clip-path", "url(#clip)")
            
        line.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("fill", "none")
            .attr("stroke", color)
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
