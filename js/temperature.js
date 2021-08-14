var margin = {top: 200, right: 20, bottom: 20, left: 450},
    width = 1100,
    height = 200,
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
    
function temperatureJuly() {
        
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-temperature-average.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.date), value : d.value }})
    .then(function(data) {
        const x = d3.scaleTime()
        .domain(d3.extent(data, function(d) { return d.date; }))
        .range([ 0, 500 ]);
                    
        svg.append("g")
        .attr("transform", `translate(0, 200)`)
        .call(d3.axisBottom(x));
                    
        const y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) { return +d.value; })])
        .range([ (screenHeight - screenMargin2), 0 ]);
                    
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
    
    
function temperatureAugust() {
        
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-temperature-average.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(function(data) {
        const x = d3.scaleTime()
        .domain(d3.extent(data, function(d) { return d.date; }))
        .range([ 0, 500 ]);
                    
        svg.append("g")
        .attr("transform", `translate(0, 200)`)
        .call(d3.axisBottom(x));
                    
        const y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) { return +d.value; })])
        .range([ (screenHeight - screenMargin2), 0 ]);
                    
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

function temperatureSeptember() {
        
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-temperature-average.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(function(data) {
        const x = d3.scaleTime()
        .domain(d3.extent(data, function(d) { return d.date; }))
        .range([ 0, 500 ]);
                    
        svg.append("g")
        .attr("transform", `translate(0, 200)`)
        .call(d3.axisBottom(x));
                    
        const y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) { return +d.value; })])
        .range([ (screenHeight - screenMargin2), 0 ]);
                    
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

function temperatureOctober() {
    var svg = createSVG();
    d3.csv("data/CSV/10/2020-10-temperature-average.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(function(data) {
        const x = d3.scaleTime()
        .domain(d3.extent(data, function(d) { return d.date; }))
        .range([ 0, 500 ]);
            
        svg.append("g")
        .attr("transform", `translate(0, 200)`)
        .call(d3.axisBottom(x));
            
        const y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) { return +d.value; })])
        .range([ (screenHeight - screenMargin2), 0 ]);
            
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


function temperatureNovember() {
    var svg = createSVG();
    d3.csv("data/CSV/11/2020-11-temperature-average.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(function(data) {
        const x = d3.scaleTime()
        .domain(d3.extent(data, function(d) { return d.date; }))
        .range([ 0, 500 ]);
            
            svg.append("g")
            .attr("transform", `translate(0, 200)`)
            .call(d3.axisBottom(x));
            
            const y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.value; })])
            .range([ (screenHeight - screenMargin2), 0 ]);
            
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

function temperatureDecember() {
    var svg = createSVG();
    d3.csv("data/CSV/12/2020-12-temperature-average.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
    .then(function(data) {
        const x = d3.scaleTime()
        .domain(d3.extent(data, function(d) { return d.date; }))
        .range([ 0, 500 ]);
            
        svg.append("g")
        .attr("transform", `translate(0, 200)`)
        .call(d3.axisBottom(x));
            
        const y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) { return +d.value; })])
        .range([ (screenHeight - screenMargin2), 0 ]);
            
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
    
function buildTemperatureGraph() {
        
    var option = document.getElementById("temperature").value;
    
    switch(option){
        case "july":
            temperatureJuly();
            break;
            
        case "august":
            temperatureAugust();
            break;
            
        case "september":
            temperatureSeptember();
            break;
        
        case "october":
            temperatureOctober();
            break;
        
        case "november":
            temperatureDecember();
            break;
    }
}
