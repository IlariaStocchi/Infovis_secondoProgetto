var margin = {top: 200, right: 20, bottom: 20, left: 450},
    width = 1100,
    height = 200,
    screenWidth = 1800,
    screenHeight = 900,
    screenMargin1 = 770,
    screenMargin2 = 700;   //.method
    
    

function windSpeedGraph(month) {
        
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-wind-speed-average.csv";
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
        
        var key = ["Wind speed"];
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", "mediumorchid")
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
            .text("Km//h")
        
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
            .attr("stroke", "mediumorchid")
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
    
    


function windDirGraph(month) {
    
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-wind-dir.csv";
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
        
        var key = ["Wind direction"];
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", "crimson")
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
            .text("Degrees")
        
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
            .attr("stroke", "crimson")
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


function getWindSensor() {
        
    var option = document.getElementById("windSensor").value;
    
    switch(option){
        case "speedSensor":
            var sensor = "speed";
            return sensor;
            break;
            
        case "dirSensor":
            var sensor = "dir"
            return sensor;
            break;
    }
}

function getMonth() {
        
    var option = document.getElementById("windMonth").value;
    
    switch(option){
        case "july":
            var month = "07";
            return month;
            break;
            
        case "august":
            var month = "08";
            return month;
            break;
            
        case "september":
            var month = "09";
            return month;
            break;
            
        case "october":
            var month = "10";
            return month;
            break;
            
        case "november":
            var month = "07";
            return month;
            break;
            
        case "december":
            var month = "07";
            return month;
            break;
    }
}

function buildWindGraph() {
    
    var sensor = getWindSensor();
    
    var month = getMonth();
    
    if (sensor === "speed") {
        switch(month){
            case "07":
                windSpeedGraph("07");
                break;
            
            case "08":
                windSpeedGraph("08");
                break;
            
            case "09":
                windSpeedGraph("09");
                break;
        
            case "10":
                windSpeedGraph("10");
                break;
        
            case "11":
                windSpeedGraph("11");
                break;
            
            case "12":
                windSpeedGraph("12");
                break;
        }
    }
    
    if (sensor === "dir") {
        switch(month){
            case "07":
                windDirGraph("07");
                break;
            
            case "08":
                windDirGraph("08");
                break;
            
            case "09":
                windDirGraph("09");
                break;
        
            case "10":
                windDirGraph("10");
                break;
        
            case "11":
                windDirGraph("11");
                break;
                
            case "12":
                windDirGraphs("12");
                break;
        }
    }
    
}



