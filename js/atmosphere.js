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


function solarJuly() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-solar.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function solarAugust() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-solar.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function solarSeptember() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-solar.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function solarOctober() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-solar.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function solarNovember() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-solar.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function solarDecember() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-solar.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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


function pressureJuly() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-pressure.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function pressureAugust() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-pressure.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function pressureSeptember() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-pressure.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function pressureOctober() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-pressure.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function pressureNovember() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-pressure.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function pressureDecember() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-pressure.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function rainJuly() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-rain.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function rainAugust() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-rain.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function rainSeptember() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-rain.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function rainOctober() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-rain.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function rainNovember() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-rain.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function rainDecember() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-rain.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function getAtmosphereSensor() {
        
    var option = document.getElementById("atmosphereSensor").value;
    
    switch(option){
        case "solarSensor":
            var sensor = "solar";
            return sensor;
            break;
            
        case "pressureSensor":
            var sensor = "pressure"
            return sensor;
            break;
            
        case "rainSensor":
            var sensor = "rain";
            return sensor;
            break;
    }
}

function buildAtmosphereGraph() {
    
    var sensor = getAtmosphereSensor();
    
    var month = document.getElementById("atmosphereMonth").value;
    
    if (sensor === "solar") {
        switch(month){
            case "july":
                solarJuly();
                break;
            
            case "august":
                solarAugust();
                break;
            
            case "september":
                solarSeptember();
                break;
        
            case "october":
                solarOctober();
                break;
        
            case "november":
                solarNovember();
                break;
            
            case "december":
                solarDecember();
                break;
        }
    }
    
    if (sensor === "rain") {
        switch(month){
            case "july":
                rainJuly();
                break;
            
            case "august":
                rainAugust();
                break;
            
            case "september":
                rainSeptember();
                break;
        
            case "october":
                rainOctober();
                break;
        
            case "november":
                rainNovember();
                break;
                
            case "december":
                rainDecember();
                break;
        }
    }
    
    if (sensor === "pressure") {
        switch(month){
            case "july":
                pressureJuly();
                break;
            
            case "august":
                pressureAugust();
                break;
            
            case "september":
                pressureSeptember();
                break;
        
            case "october":
                pressureOctober();
                break;
        
            case "november":
                pressureNovember();
                break;
            
            case "december":
                pressureDecember();
                break;
        }
    }
}

