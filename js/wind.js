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
    
function windSpeedJuly() {
        
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-wind-speed-average.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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
    
    
function windSpeedAugust() {
        
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-wind-speed-average.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function windSpeedSeptember() {
        
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-wind-speed-average.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function windSpeedOctober() {
    var svg = createSVG();
    d3.csv("data/CSV/10/2020-10-wind-speed-average.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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


function windSpeedNovember() {
    var svg = createSVG();
    d3.csv("data/CSV/11/2020-11-wind-speed-average.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function windSpeedDecember() {
    var svg = createSVG();
    d3.csv("data/CSV/12/2020-12-wind-speed-average.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function windDirJuly() {
    var svg = createSVG();
    d3.csv("data/CSV/12/2020-12-wind-dir.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function windDirAugust() {
    var svg = createSVG();
    d3.csv("data/CSV/08/2020-08-wind-dir.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function windDirSeptember() {
    var svg = createSVG();
    d3.csv("data/CSV/09/2020-09-wind-dir.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function windDirOctober() {
    var svg = createSVG();
    d3.csv("data/CSV/10/2020-10-wind-dir.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function windDirNovember() {
    var svg = createSVG();
    d3.csv("data/CSV/11/2020-11-wind-dir.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function windDirDecember() {
    var svg = createSVG();
    d3.csv("data/CSV/12/2020-12-wind-dir.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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
                windSpeedJuly();
                break;
            
            case "08":
                windSpeedAugust();
                break;
            
            case "09":
                windSpeedSeptember();
                break;
        
            case "10":
                windSpeedOctober();
                break;
        
            case "11":
                windSpeedNovember();
                break;
            
            case "12":
                windSpeedDecember();
                break;
        }
    }
    
    if (sensor === "dir") {
        switch(month){
            case "07":
                windDirJuly();
                break;
            
            case "08":
                windDirAugust();
                break;
            
            case "09":
                windDirSeptember();
                break;
        
            case "10":
                windDirOctober();
                break;
        
            case "11":
                windDirNovember();
                break;
                
            case "12":
                windDirDecember();
                break;
        }
    }
    
}



