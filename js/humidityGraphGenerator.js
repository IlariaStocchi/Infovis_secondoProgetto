class humidityGraphGenerator {
    
    
    static margin = {top: 200, right: 20, bottom: 20, left: 450};
    static width = 1100;
    static height = 200;
    
    static screenWidth = 1800;
    static screenHeight = 900;
    static screenMargin1 = 770;
    static screenMargin2 = 700;   //humidityGraphGenerator.method
    
    
    static removeSVG(){
        var v1 = document.getElementsByTagName('svg');
        if(v1.length >= 0 ){
            d3.select("svg").remove();
        }
    }
    
    
    static createSVG(){
        var svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", humidityGraphGenerator.width + humidityGraphGenerator.margin.left + humidityGraphGenerator.margin.right)
        .attr("height", humidityGraphGenerator.height + humidityGraphGenerator.margin.top + humidityGraphGenerator.margin.bottom)
        .append("g")
        .attr("transform", `translate(${humidityGraphGenerator.margin.left},${humidityGraphGenerator.margin.top})`);
        return svg;
    }
    
    
    constructor(graphType) {
        this.graphType = graphType;
    }
    
    
    humidityGraph() {
        
        switch (this.graphType) {
            case 'humidityJuly':   
                
                var svg = humidityGraphGenerator.createSVG();
                
                d3.csv("data/CSV/07/2020-07-humidity-average.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.date), value : d.value }})
                .then(function(data) {
                    const x = d3.scaleTime()
                    .domain(d3.extent(data, function(d) { return d.date; }))
                    .range([ 0, 500 ]);
                    
                    svg.append("g")
                    .attr("transform", `translate(0, 200)`)
                    .call(d3.axisBottom(x));
                    
                    const y = d3.scaleLinear()
                    .domain([0, d3.max(data, function(d) { return +d.value; })])
                    .range([ (humidityGraphGenerator.screenHeight - humidityGraphGenerator.screenMargin2), 0 ]);
                    
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
                break;
            
            case 'humidityAugust':   
                
                var svg = humidityGraphGenerator.createSVG();
                
                d3.csv("data/CSV/08/2020-08-humidity-average.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
                .then(function(data) {
                    const x = d3.scaleTime()
                    .domain(d3.extent(data, function(d) { return d.date; }))
                    .range([ 0, 500 ]);
                    
                    svg.append("g")
                    .attr("transform", `translate(0, 200)`)
                    .call(d3.axisBottom(x));
                    
                    const y = d3.scaleLinear()
                    .domain([0, d3.max(data, function(d) { return +d.value; })])
                    .range([ (humidityGraphGenerator.screenHeight - humidityGraphGenerator.screenMargin2), 0 ]);
                    
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
                break;
            
            case 'humiditySeptember':   
                
                var svg = humidityGraphGenerator.createSVG();
                
                d3.csv("data/CSV/09/2020-09-humidity-average.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
                .then(function(data) {
                    const x = d3.scaleTime()
                    .domain(d3.extent(data, function(d) { return d.date; }))
                    .range([ 0, 500 ]);
                    
                    svg.append("g")
                    .attr("transform", `translate(0, 200)`)
                    .call(d3.axisBottom(x));
                    
                    const y = d3.scaleLinear()
                    .domain([0, d3.max(data, function(d) { return +d.value; })])
                    .range([ (humidityGraphGenerator.screenHeight - humidityGraphGenerator.screenMargin2), 0 ]);
                    
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
                break;
            
            case 'humidityOctober':   
                
                var svg = humidityGraphGenerator.createSVG();
                
                d3.csv("data/CSV/10/2020-10-humidity-average.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
                .then(function(data) {
                    const x = d3.scaleTime()
                    .domain(d3.extent(data, function(d) { return d.date; }))
                    .range([ 0, 500 ]);
                    
                    svg.append("g")
                    .attr("transform", `translate(0, 200)`)
                    .call(d3.axisBottom(x));
                    
                    const y = d3.scaleLinear()
                    .domain([0, d3.max(data, function(d) { return +d.value; })])
                    .range([ (humidityGraphGenerator.screenHeight - humidityGraphGenerator.screenMargin2), 0 ]);
                    
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
                break;
            
            case 'humidityNovember':   
                
                var svg = humidityGraphGenerator.createSVG();
                
                d3.csv("data/CSV/11/2020-11-humidity-average.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
                .then(function(data) {
                    const x = d3.scaleTime()
                    .domain(d3.extent(data, function(d) { return d.date; }))
                    .range([ 0, 500 ]);
                    
                    svg.append("g")
                    .attr("transform", `translate(0, 200)`)
                    .call(d3.axisBottom(x));
                    
                    const y = d3.scaleLinear()
                    .domain([0, d3.max(data, function(d) { return +d.value; })])
                    .range([ (humidityGraphGenerator.screenHeight - humidityGraphGenerator.screenMargin2), 0 ]);
                    
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
                break;
            
            case 'humidityDecember':   
                
                var svg = humidityGraphGenerator.createSVG();
                
                d3.csv("data/CSV/12/2020-12-humidity-average.csv", function(d){ return { date : d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.created), value : d.value }})
                .then(function(data) {
                    const x = d3.scaleTime()
                    .domain(d3.extent(data, function(d) { return d.date; }))
                    .range([ 0, 500 ]);
                    
                    svg.append("g")
                    .attr("transform", `translate(0, 200)`)
                    .call(d3.axisBottom(x));
                    
                    const y = d3.scaleLinear()
                    .domain([0, d3.max(data, function(d) { return +d.value; })])
                    .range([ (humidityGraphGenerator.screenHeight - humidityGraphGenerator.screenMargin2), 0 ]);
                    
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
                break;
                
                
        } //end of switch
    }
} 


