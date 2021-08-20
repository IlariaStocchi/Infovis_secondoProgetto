var margin = {top: 200, right: 20, bottom: 20, left: 450},
    width = 1100,
    height = 200,
    screenWidth = 1800,
    screenHeight = 900,
    screenMargin1 = 770,
    screenMargin2 = 700;   //.method


function soilWaterTN01(month) {
    
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-soil-water-tn01.csv";
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
        
        var key = ["Soil Water Area 1"];
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", "brown")
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
            .text("m3")
        
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
            .attr("stroke", "brown")
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

function soilWaterTN02(month) {
    
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-soil-water-tn02.csv";
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
        
        var key = ["Soil Water Area 2"];
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", "brown")
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
            .text("m3")
        
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
            .attr("stroke", "brown")
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

function soilWaterTN03(month) {
    
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-soil-water-tn03.csv";
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
        
        var key = ["Soil Water Area 3"];
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", "brown")
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
            .text("m3")
        
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
            .attr("stroke", "brown")
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

function soilWaterTN04(month) {
    
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-soil-water-tn04.csv";
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
        
        var key = ["Soil Water Area 4"];
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", "brown")
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
            .text("m3")
        
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
            .attr("stroke", "brown")
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

function soilWaterTN05(month) {
    
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-soil-water-tn05.csv";
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
        
        var key = ["Soil Water Area 5"];
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", "brown")
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
            .text("m3")
        
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
            .attr("stroke", "brown")
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

function soilWaterTN06(month) {
    
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-soil-water-tn02.csv";
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
        
        var key = ["Soil Water Area 6"];
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", "brown")
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
            .text("m3")
        
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
            .attr("stroke", "brown")
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

function soilWaterTN07(month) {
    
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-soil-water-tn07.csv";
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
        
        var key = ["Soil Water Area 7"];
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", "brown")
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
            .text("m3")
        
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
            .attr("stroke", "brown")
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

function soilWaterTN08(month) {
    
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-soil-water-tn08.csv";
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
        
        var key = ["Soil Water Area 8"];
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", "brown")
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
            .text("m3")
        
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
            .attr("stroke", "brown")
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

function soilWaterTN09(month) {
    
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-soil-water-tn09.csv";
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
        
        var key = ["Soil Water Area 9"];
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", "brown")
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
            .text("m3")
        
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
            .attr("stroke", "brown")
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



function soilTemperatureTN01(month) {
    
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-soil-temperature-tn01.csv";
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
        
        var key = ["Soil Temperature Area 1"];
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", "darkorange")
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
            .text("°C")
        
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
            .attr("stroke", "darkorange")
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

function soilTemperatureTN02(month) {
    
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-soil-temperature-tn02.csv";
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
        
        var key = ["Soil Temperature Area 2"];
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", "darkorange")
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
            .text("°C")
        
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
            .attr("stroke", "darkorange")
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

function soilTemperatureTN03(month) {
    
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-soil-temperature-tn03.csv";
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
        
        var key = ["Soil Temperature Area 3"];
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", "darkorange")
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
            .text("°C")
        
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
            .attr("stroke", "darkorange")
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

function soilTemperatureTN04July(mont) {
    
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-soil-temperature-tn04.csv";
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
        
        var key = ["Soil Temperature Area 4"];
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", "darkorange")
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
            .text("°C")
        
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
            .attr("stroke", "darkorange")
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

function soilTemperatureTN05(month) {
    
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-soil-temperature-tn05.csv";
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
        
        var key = ["Soil Temperature Area 5"];
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", "darkorange")
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
            .text("°C")
        
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
            .attr("stroke", "darkorange")
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

function soilTemperatureTN06(month) {
    
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-soil-temperature-tn06.csv";
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
        
        var key = ["Soil Temperature Area 6"];
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", "darkorange")
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
            .text("°C")
        
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
            .attr("stroke", "darkorange")
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

function soilTemperatureTN07(month) {
    
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-soil-temperature-tn07.csv";
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
        
        var key = ["Soil Temperature Area 7"];
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", "darkorange")
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
            .text("°C")
        
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
            .attr("stroke", "darkorange")
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

function soilTemperatureTN08(month) {
    
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-soil-temperature-tn08.csv";
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
        
        var key = ["Soil Temperature Area 8"];
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", "darkorange")
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
            .text("°C")
        
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
            .attr("stroke", "darkorange")
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

function soilTemperatureTN09(month) {
    
    var svg = createSVG();
    var path = "data/CSV/";
    var month = month.concat("/2020-").concat(month);
    var sensor = "-soil-temperature-tn09.csv";
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
        
        var key = ["Soil Temperature Area 9"];
            
        svg.selectAll("mylabels")
            .data(key)
            .enter()
            .append("text")
            .attr("x", 420)
            .attr("y", -40) 
            .style("fill", "darkorange")
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
            .text("°C")
        
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
            .attr("stroke", "darkorange")
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






function getSoilSensor() {
        
    var option = document.getElementById("soilSensor").value;
    
    switch(option){
        case "temperatureSensor":
            var sensor = "temperature";
            return sensor;
            break;
            
        case "waterSensor":
            var sensor = "water"
            return sensor;
            break;
    }
}

function getArea() {
        
    var area = document.getElementById("area").value;
    
    switch(area){
        case "f1":
            var area = "1";
            return area;
            break;
            
        case "f2":
            var area = "2";
            return area;
            break;
            
        case "f3":
            var area = "3";
            return area;
            break;
            
        case "f4":
            var area = "4";
            return area;
            break;
        
        case "f5":
            var area = "5";
            return area;
            break;
        
        case "f6":
            var area = "6";
            return area;
            break;
        
        case "f7":
            var area = "7";
            return area;
            break;
            
        case "f8":
            var area = "8";
            return area;
            break;
        
        case "f9":
            var area = "9";
            return area;
            break;
    }
}

function buildSoilGraph() {
    
    var sensor = getSoilSensor();
    
    var area = getArea();
    
    var month = document.getElementById("soilMonth").value;
    
    if (sensor === "water") {
        switch(area){
            case "1":
                switch(month){
                    case "july":
                        soilWaterTN01("07");
                        break;
                    
                    case "august":
                        soilWaterTN01("08");
                        break;
                        
                    case "september":
                        soilWaterTN01("09");
                        break;
                    
                    case "october":
                        soilWaterTN01("10");
                        break;
                        
                    case "november":
                        soilWaterTN01("11");
                        break;
                        
                    case "december":
                        soilWaterTN01("12");
                        break;
                }
                break;
            
            case "2":
                switch(month){
                    case "july":
                        soilWaterTN02("07");
                        break;
                    
                    case "august":
                        soilWaterTN02("08");
                        break;
                        
                    case "september":
                        soilWaterTN02("09");
                        break;
                    
                    case "october":
                        soilWaterTN02("10");
                        break;
                        
                    case "november":
                        soilWaterTN02("11");
                        break;
                        
                    case "december":
                        soilWaterTN02("12");
                        break;
                }
                break;
            
            case "3":
                switch(month){
                    case "july":
                        soilWaterTN03("07");
                        break;
                    
                    case "august":
                        soilWaterTN03("08");
                        break;
                        
                    case "september":
                        soilWaterTN03("09");
                        break;
                    
                    case "october":
                        soilWaterTN03("10");
                        break;
                        
                    case "november":
                        soilWaterTN03("11");
                        break;
                        
                    case "december":
                        soilWaterTN03("12");
                        break;
                }
                break;
        
            case "4":
                switch(month){
                    case "july":
                        soilWaterTN04("07");
                        break;
                    
                    case "august":
                        soilWaterTN04("08");
                        break;
                        
                    case "september":
                        soilWaterTN04("09");
                        break;
                    
                    case "october":
                        soilWaterTN04("10");
                        break;
                        
                    case "november":
                        soilWaterTN04("11");
                        break;
                        
                    case "december":
                        soilWaterTN04("12");
                        break;
                }
                break;
        
            case "5":
                switch(month){
                    case "july":
                        soilWaterTN05("07");
                        break;
                    
                    case "august":
                        soilWaterTN05("08");
                        break;
                        
                    case "september":
                        soilWaterTN05("09");
                        break;
                    
                    case "october":
                        soilWaterTN05("10");
                        break;
                        
                    case "november":
                        soilWaterTN05("11");
                        break;
                        
                    case "december":
                        soilWaterTN05("12");
                        break;
                }
                break;
            
            case "6":
                switch(month){
                    case "july":
                        soilWaterTN06("07");
                        break;
                    
                    case "august":
                        soilWaterTN06("08");
                        break;
                        
                    case "september":
                        soilWaterTN06("09");
                        break;
                    
                    case "october":
                        soilWaterTN06("10");
                        break;
                        
                    case "november":
                        soilWaterTN06("11");
                        break;
                        
                    case "december":
                        soilWaterTN06("12");
                        break;
                }
                break;
            
            case "7":
                switch(month){
                    case "july":
                        soilWaterTN07("07");
                        break;
                    
                    case "august":
                        soilWaterTN07("08");
                        break;
                        
                    case "september":
                        soilWaterTN07("09");
                        break;
                    
                    case "october":
                        soilWaterTN07("10");
                        break;
                        
                    case "november":
                        soilWaterTN07("11");
                        break;
                        
                    case "december":
                        soilWaterTN07("12");
                        break;
                }
                break;
                
            case "8":
                switch(month){
                    case "july":
                        soilWaterTN08("07");
                        break;
                    
                    case "august":
                        soilWaterTN08("08");
                        break;
                        
                    case "september":
                        soilWaterTN08("09");
                        break;
                    
                    case "october":
                        soilWaterTN08("10");
                        break;
                        
                    case "november":
                        soilWaterTN08("11");
                        break;
                        
                    case "december":
                        soilWaterTN08("12");
                        break;
                }
                break;
                
            case "9":
                switch(month){
                    case "july":
                        soilWaterTN09("07");
                        break;
                    
                    case "august":
                        soilWaterTN09("08");
                        break;
                        
                    case "september":
                        soilWaterTN09("09");
                        break;
                    
                    case "october":
                        soilWaterTN09("10");
                        break;
                        
                    case "november":
                        soilWaterTN09("11");
                        break;
                        
                    case "december":
                        soilWaterTN09("12");
                        break;
                }
                break;
        }
    }
    
    if (sensor === "temperature") {
        switch(area){
            case "1":
                switch(month){
                    case "july":
                        soilTemperatureTN01("07");
                        break;
                    
                    case "august":
                        soilTemperatureTN01("08");
                        break;
                        
                    case "september":
                        soilTemperatureTN01("09");
                        break;
                    
                    case "october":
                        soilTemperatureTN01("10");
                        break;
                        
                    case "november":
                        soilTemperatureTN01("11");
                        break;
                        
                    case "december":
                        soilTemperatureTN01("12");
                        break;
                }
                break;
            
            case "2":
                switch(month){
                    case "july":
                        soilTemperatureTN02("07");
                        break;
                    
                    case "august":
                        soilTemperatureTN02("08");
                        break;
                        
                    case "september":
                        soilTemperatureTN02("09");
                        break;
                    
                    case "october":
                        soilTemperatureTN02("10");
                        break;
                        
                    case "november":
                        soilTemperatureTN02("11");
                        break;
                        
                    case "december":
                        soilTemperatureTN02("12");
                        break;
                }
                break;
            
            case "3":
                switch(month){
                    case "july":
                        soilTemperatureTN03("07");
                        break;
                    
                    case "august":
                        soilTemperatureTN03("08");
                        break;
                        
                    case "september":
                        soilTemperatureTN03("09");
                        break;
                    
                    case "october":
                        soilWaterTN03("10");
                        break;
                        
                    case "november":
                        soilTemperatureTN03("11");
                        break;
                        
                    case "december":
                        soilTemperatureN03("12");
                        break;
                }
                break;
        
            case "4":
                switch(month){
                    case "july":
                        soilTemperatureTN04("07");
                        break;
                    
                    case "august":
                        soilTemperatureTN04("08");
                        break;
                        
                    case "september":
                        soilTemperatureTN04("09");
                        break;
                    
                    case "october":
                        soilTemperatureTN04("10");
                        break;
                        
                    case "november":
                        soilTemperatureTN04("11");
                        break;
                        
                    case "december":
                        soilTemperatureTN04("12");
                        break;
                }
                break;
        
            case "5":
                switch(month){
                    case "july":
                        soilTemperatureTN05("07");
                        break;
                    
                    case "august":
                        soilTemperatureTN05("08");
                        break;
                        
                    case "september":
                        soilTemperatureTN05("09");
                        break;
                    
                    case "october":
                        soilTemperatureTN05("10");
                        break;
                        
                    case "november":
                        soilTemperatureTN05("11");
                        break;
                        
                    case "december":
                        soilTemperatureTN05("12");
                        break;
                }
                break;
            
            case "6":
                switch(month){
                    case "july":
                        soilTemperatureTN06("07");
                        break;
                    
                    case "august":
                        soilTemperatureT06("08");
                        break;
                        
                    case "september":
                        soilTemperatureTN06("09");
                        break;
                    
                    case "october":
                        soilTemperatureTN06("10");
                        break;
                        
                    case "november":
                        soilTemperatureTN06("11");
                        break;
                        
                    case "december":
                        soilTemperatureTN06("12");
                        break;
                }
                break;
            
            case "7":
                switch(month){
                    case "july":
                        soilTemperatureTN07("07");
                        break;
                    
                    case "august":
                        soilTemperatureTN07("08");
                        break;
                        
                    case "september":
                        soilTemperatureTN07("09");
                        break;
                    
                    case "october":
                        soilTemperatureTN07("10");
                        break;
                        
                    case "november":
                        soilTemperatureTN07("11");
                        break;
                        
                    case "december":
                        soilTemperatureTN07("12");
                        break;
                }
                break;
                
            case "8":
                switch(month){
                    case "july":
                        soilTemperatureTN08("07");
                        break;
                    
                    case "august":
                        soilTemperatureTN08("08");
                        break;
                        
                    case "september":
                        soilTemperatureTN08("09");
                        break;
                    
                    case "october":
                        soilTemperatureTN08("10");
                        break;
                        
                    case "november":
                        soilTemperatureTN08("11");
                        break;
                        
                    case "december":
                        soilTemperatureTN08("12");
                        break;
                }
                break;
                
            case "9":
                switch(month){
                    case "july":
                        soilTemperatureTN09("07");
                        break;
                    
                    case "august":
                        soilTemperatureTN09("08");
                        break;
                        
                    case "september":
                        soilTemperatureTN09("09");
                        break;
                    
                    case "october":
                        soilTemperatureTN09("10");
                        break;
                        
                    case "november":
                        soilTemperatureTN09("11");
                        break;
                        
                    case "december":
                        soilTemperatureTN09("12");
                        break;
                }
                break;
        }
    }

}


 
