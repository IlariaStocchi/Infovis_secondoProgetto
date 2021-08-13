class windGraphGenerator {
    
    
    static margin = {top: 200, right: 20, bottom: 20, left: 450};
    static width = 1100;
    static height = 200;
    
    static screenWidth = 1800;
    static screenHeight = 900;
    static screenMargin1 = 770;
    static screenMargin2 = 700;   //windGraphGenerator.method
    
    
    static removeSVG(){
        var v1 = document.getElementsByTagName('svg');
        if(v1.length >= 0 ){
            d3.select("svg").remove();
        }
    }
    
    
    static createSVG(){
        var svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", windGraphGenerator.width + windGraphGenerator.margin.left + windGraphGenerator.margin.right)
        .attr("height", windGraphGenerator.height + windGraphGenerator.margin.top + windGraphGenerator.margin.bottom)
        .append("g")
        .attr("transform", `translate(${windGraphGenerator.margin.left},${windGraphGenerator.margin.top})`);
        return svg;
    }
    
    
    constructor(graphType) {
        this.graphType = graphType;
    }
    
    
    windGraph() {
        
        switch (this.graphType) {
            case 'windJuly':   
                
                var svg = windGraphGenerator.createSVG();
                
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
                    .range([ (windGraphGenerator.screenHeight - windGraphGenerator.screenMargin2), 0 ]);
                    
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
            
            case 'windAugust':   
                
                var svg = windGraphGenerator.createSVG();
                
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
                    .range([ (windGraphGenerator.screenHeight - windGraphGenerator.screenMargin2), 0 ]);
                    
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
            
            case 'windSeptember':   
                
                var svg = windGraphGenerator.createSVG();
                
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
                    .range([ (windGraphGenerator.screenHeight - windGraphGenerator.screenMargin2), 0 ]);
                    
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
            
            case 'windOctober':   
                
                var svg = windGraphGenerator.createSVG();
                
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
                    .range([ (windGraphGenerator.screenHeight - windGraphGenerator.screenMargin2), 0 ]);
                    
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
            
            case 'windNovember':   
                
                var svg = windGraphGenerator.createSVG();
                
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
                    .range([ (windGraphGenerator.screenHeight - windGraphGenerator.screenMargin2), 0 ]);
                    
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
            
            case 'windDecember':   
                
                var svg = windGraphGenerator.createSVG();
                
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
                    .range([ (windGraphGenerator.screenHeight - windGraphGenerator.screenMargin2), 0 ]);
                    
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


 
 
