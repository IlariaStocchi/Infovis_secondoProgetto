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


function soilWaterTN01July() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-soil-water-tn01.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN02July() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-soil-water-tn02.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN03July() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-soil-water-tn03.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN04July() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-soil-water-tn04.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN05July() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-soil-water-tn05.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN06July() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-soil-water-tn06.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN07July() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-soil-water-tn07.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN08July() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-soil-water-tn08.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN09July() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-soil-water-tn09.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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


function soilWaterTN01August() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-soil-water-tn01.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN02August() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-soil-water-tn02.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN03August() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-soil-water-tn03.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN04August() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-soil-water-tn04.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN05August() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-soil-water-tn05.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN06August() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-soil-water-tn06.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN07August() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-soil-water-tn07.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN08August() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-soil-water-tn08.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN09August() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-soil-water-tn09.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN01September() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-soil-water-tn01.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN02September() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-soil-water-tn02.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN03September() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-soil-water-tn03.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN04September() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-soil-water-tn04.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN05September() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-soil-water-tn05.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN06September() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-soil-water-tn06.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN07September() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-soil-water-tn07.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN08September() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-soil-water-tn08.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN09September() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-soil-water-tn09.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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


function soilWaterTN01October() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-soil-water-tn01.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN02October() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-soil-water-tn02.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN03October() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-soil-water-tn03.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN04October() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-soil-water-tn04.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN05October() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-soil-water-tn05.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN06October() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-soil-water-tn06.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN07October() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-soil-water-tn07.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN08October() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-soil-water-tn08.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN09October() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-soil-water-tn09.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN01November() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-soil-water-tn01.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN02November() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-soil-water-tn02.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN03November() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-soil-water-tn03.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN04November() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-soil-water-tn04.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN05November() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-soil-water-tn05.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN06November() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-soil-water-tn06.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN07November() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-soil-water-tn07.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN08November() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-soil-water-tn08.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN09November() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-soil-water-tn09.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN01December() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-soil-water-tn01.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN02December() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-soil-water-tn02.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN03December() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-soil-water-tn03.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN04December() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-soil-water-tn04.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN05December() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-soil-water-tn05.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN06December() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-soil-water-tn06.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN07December() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-soil-water-tn07.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN08December() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-soil-water-tn08.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilWaterTN09December() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-soil-water-tn09.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN01July() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-soil-temperature-tn01.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN02July() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-soil-temperature-tn02.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN03July() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-soil-temperature-tn03.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN04July() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-soil-temperature-tn04.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN05July() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-soil-temperature-tn05.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN06July() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-soil-temperature-tn06.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN07July() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-soil-temperature-tn07.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN08July() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-soil-temperature-tn08.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN09July() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/07/2020-07-soil-temperature-tn09.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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


function soilTemperatureTN01August() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-soil-temperature-tn01.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN02August() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-soil-temperature-tn02.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN03August() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-soil-temperature-tn03.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN04August() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-soil-temperature-tn04.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN05August() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-soil-temperature-tn05.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN06August() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-soil-temperature-tn06.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN07August() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-soil-temperature-tn07.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN08August() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-soil-temperature-tn08.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN09August() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/08/2020-08-soil-temperature-tn09.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN01September() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-soil-temperature-tn01.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN02September() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-soil-temperature-tn02.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN03September() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-soil-temperature-tn03.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN04September() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-soil-temperature-tn04.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN05September() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-soil-temperature-tn05.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN06September() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-soil-temperature-tn06.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soiTemperatureTN07September() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-soil-temperature-tn07.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN08September() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-soil-temperature-tn08.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN09September() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/09/2020-09-soil-temperature-tn09.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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


function soilTemperatureTN01October() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-soil-temperature-tn01.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soiTemperatureTN02October() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-soil-temperature-tn02.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN03October() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-soil-temperature-tn03.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN04October() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-soil-temperature-tn04.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN05October() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-soil-temperature-tn05.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN06October() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-soil-temperature-tn06.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN07October() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-soil-temperature-tn07.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN08October() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-soil-temperature-tn08.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN09October() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/10/2020-10-soil-temperature-tn09.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN01November() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-soil-temperature-tn01.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN02November() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-soil-temperature-tn02.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN03November() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-soil-temperature-tn03.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN04November() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-soil-temperature-tn04.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN05November() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-soil-temperature-tn05.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN06November() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-soil-temperature-tn06.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN07November() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-soil-temperature-tn07.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN08November() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-soil-temperature-tn08.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN09November() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/11/2020-11-soil-temperature-tn09.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN01December() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-soil-temperature-tn01.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN02December() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-soil-temperature-tn02.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN03December() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-soil-temperature-tn03.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN04December() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-soil-temperature-tn04.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN05December() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-soil-temperature-tn05.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN06December() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-soil-temperature-tn06.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN07December() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-soil-temperature-tn07.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN08December() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-soil-temperature-tn08.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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

function soilTemperatureTN09December() {
    
    var svg = createSVG();
                
    d3.csv("data/CSV/12/2020-12-soil-temperature-tn09.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
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
                        soilWaterTN01July();
                        break;
                    
                    case "august":
                        soilWaterTN01August();
                        break;
                        
                    case "september":
                        soilWaterTN01September();
                        break;
                    
                    case "october":
                        soilWaterTN01October();
                        break;
                        
                    case "november":
                        soilWaterTN01November();
                        break;
                        
                    case "december":
                        soilWaterTN01December();
                        break;
                }
                break;
            
            case "2":
                switch(month){
                    case "july":
                        soilWaterTN02July();
                        break;
                    
                    case "august":
                        soilWaterTN02August();
                        break;
                        
                    case "september":
                        soilWaterTN02September();
                        break;
                    
                    case "october":
                        soilWaterTN02October();
                        break;
                        
                    case "november":
                        soilWaterTN02November();
                        break;
                        
                    case "december":
                        soilWaterTN02December();
                        break;
                }
                break;
            
            case "3":
                switch(month){
                    case "july":
                        soilWaterTN03July();
                        break;
                    
                    case "august":
                        soilWaterTN03August();
                        break;
                        
                    case "september":
                        soilWaterTN03September();
                        break;
                    
                    case "october":
                        soilWaterTN03October();
                        break;
                        
                    case "november":
                        soilWaterTN03November();
                        break;
                        
                    case "december":
                        soilWaterTN03December();
                        break;
                }
                break;
        
            case "4":
                switch(month){
                    case "july":
                        soilWaterTN04July();
                        break;
                    
                    case "august":
                        soilWaterTN04August();
                        break;
                        
                    case "september":
                        soilWaterTN04September();
                        break;
                    
                    case "october":
                        soilWaterTN04October();
                        break;
                        
                    case "november":
                        soilWaterTN04November();
                        break;
                        
                    case "december":
                        soilWaterTN04December();
                        break;
                }
                break;
        
            case "5":
                switch(month){
                    case "july":
                        soilWaterTN05July();
                        break;
                    
                    case "august":
                        soilWaterTN05August();
                        break;
                        
                    case "september":
                        soilWaterTN05September();
                        break;
                    
                    case "october":
                        soilWaterTN05October();
                        break;
                        
                    case "november":
                        soilWaterTN05November();
                        break;
                        
                    case "december":
                        soilWaterTN05December();
                        break;
                }
                break;
            
            case "6":
                switch(month){
                    case "july":
                        soilWaterTN06July();
                        break;
                    
                    case "august":
                        soilWaterTN06August();
                        break;
                        
                    case "september":
                        soilWaterTN06September();
                        break;
                    
                    case "october":
                        soilWaterTN06October();
                        break;
                        
                    case "november":
                        soilWaterTN06November();
                        break;
                        
                    case "december":
                        soilWaterTN06December();
                        break;
                }
                break;
            
            case "7":
                switch(month){
                    case "july":
                        soilWaterTN07July();
                        break;
                    
                    case "august":
                        soilWaterTN07August();
                        break;
                        
                    case "september":
                        soilWaterTN07September();
                        break;
                    
                    case "october":
                        soilWaterTN07October();
                        break;
                        
                    case "november":
                        soilWaterTN07November();
                        break;
                        
                    case "december":
                        soilWaterTN07December();
                        break;
                }
                break;
                
            case "8":
                switch(month){
                    case "july":
                        soilWaterTN08July();
                        break;
                    
                    case "august":
                        soilWaterTN08August();
                        break;
                        
                    case "september":
                        soilWaterTN08September();
                        break;
                    
                    case "october":
                        soilWaterTN08October();
                        break;
                        
                    case "november":
                        soilWaterTN08November();
                        break;
                        
                    case "december":
                        soilWaterTN08December();
                        break;
                }
                break;
                
            case "9":
                switch(month){
                    case "july":
                        soilWaterTN09July();
                        break;
                    
                    case "august":
                        soilWaterTN09August();
                        break;
                        
                    case "september":
                        soilWaterTN09September();
                        break;
                    
                    case "october":
                        soilWaterTN09October();
                        break;
                        
                    case "november":
                        soilWaterTN09November();
                        break;
                        
                    case "december":
                        soilWaterTN09December();
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
                        soilTemperatureTN01July();
                        break;
                    
                    case "august":
                        soilTemperatureTN01August();
                        break;
                        
                    case "september":
                        soilTemperatureTN01September();
                        break;
                    
                    case "october":
                        soilTemperatureTN01October();
                        break;
                        
                    case "november":
                        soilTemperatureTN01November();
                        break;
                        
                    case "december":
                        soilTemperatureTN01December();
                        break;
                }
                break;
            
            case "2":
                switch(month){
                    case "july":
                        soilTemperatureTN02July();
                        break;
                    
                    case "august":
                        soilTemperatureTN02August();
                        break;
                        
                    case "september":
                        soilTemperatureTN02September();
                        break;
                    
                    case "october":
                        soilTemperatureTN02October();
                        break;
                        
                    case "november":
                        soilTemperatureTN02November();
                        break;
                        
                    case "december":
                        soilTemperatureTN02December();
                        break;
                }
                break;
            
            case "3":
                switch(month){
                    case "july":
                        soilTemperatureTN03July();
                        break;
                    
                    case "august":
                        soilTemperatureTN03August();
                        break;
                        
                    case "september":
                        soilTemperatureTN03September();
                        break;
                    
                    case "october":
                        soilWaterTN03October();
                        break;
                        
                    case "november":
                        soilTemperatureTN03November();
                        break;
                        
                    case "december":
                        soilTemperatureN03December();
                        break;
                }
                break;
        
            case "4":
                switch(month){
                    case "july":
                        soilTemperatureTN04July();
                        break;
                    
                    case "august":
                        soilTemperatureTN04August();
                        break;
                        
                    case "september":
                        soilTemperatureTN04September();
                        break;
                    
                    case "october":
                        soilTemperatureTN04October();
                        break;
                        
                    case "november":
                        soilTemperatureTN04November();
                        break;
                        
                    case "december":
                        soilTemperatureTN04December();
                        break;
                }
                break;
        
            case "5":
                switch(month){
                    case "july":
                        soilTemperatureTN05July();
                        break;
                    
                    case "august":
                        soilTemperatureTN05August();
                        break;
                        
                    case "september":
                        soilTemperatureTN05September();
                        break;
                    
                    case "october":
                        soilTemperatureTN05October();
                        break;
                        
                    case "november":
                        soilTemperatureTN05November();
                        break;
                        
                    case "december":
                        soilTemperatureTN05December();
                        break;
                }
                break;
            
            case "6":
                switch(month){
                    case "july":
                        soilTemperatureTN06July();
                        break;
                    
                    case "august":
                        soilTemperatureTN06August();
                        break;
                        
                    case "september":
                        soilTemperatureTN06September();
                        break;
                    
                    case "october":
                        soilTemperatureTN06October();
                        break;
                        
                    case "november":
                        soilTemperatureTN06November();
                        break;
                        
                    case "december":
                        soilTemperatureTN06December();
                        break;
                }
                break;
            
            case "7":
                switch(month){
                    case "july":
                        soilTemperatureTN07July();
                        break;
                    
                    case "august":
                        soilTemperatureTN07August();
                        break;
                        
                    case "september":
                        soilTemperatureTN07September();
                        break;
                    
                    case "october":
                        soilTemperatureTN07October();
                        break;
                        
                    case "november":
                        soilTemperatureTN07November();
                        break;
                        
                    case "december":
                        soilTemperatureTN07December();
                        break;
                }
                break;
                
            case "8":
                switch(month){
                    case "july":
                        soilTemperatureTN08July();
                        break;
                    
                    case "august":
                        soilTemperatureTN08August();
                        break;
                        
                    case "september":
                        soilTemperatureTN08September();
                        break;
                    
                    case "october":
                        soilTemperatureTN08October();
                        break;
                        
                    case "november":
                        soilTemperatureTN08November();
                        break;
                        
                    case "december":
                        soilTemperatureTN08December();
                        break;
                }
                break;
                
            case "9":
                switch(month){
                    case "july":
                        soilTemperatureTN09July();
                        break;
                    
                    case "august":
                        soilTemperatureTN09August();
                        break;
                        
                    case "september":
                        soilTemperatureTN09September();
                        break;
                    
                    case "october":
                        soilTemperatureTN09October();
                        break;
                        
                    case "november":
                        soilTemperatureTN09November();
                        break;
                        
                    case "december":
                        soilTemperatureTN09December();
                        break;
                }
                break;
        }
    }

}


 
