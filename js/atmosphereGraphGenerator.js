class atmosphereGraphGenerator {
    
    
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
        .attr("width", atmosphereGraphGenerator.width + atmosphereGraphGenerator.margin.left + atmosphereGraphGenerator.margin.right)
        .attr("height", atmosphereGraphGenerator.height + atmosphereGraphGenerator.margin.top + atmosphereGraphGenerator.margin.bottom)
        .append("g")
        .attr("transform", `translate(${atmosphereGraphGenerator.margin.left},${atmosphereGraphGenerator.margin.top})`);
        return svg;
    }
    
    
    constructor(graphType) {
        this.graphType = graphType;
    }
    
    
    pressureGraph() {
        
        switch (this.graphType) {
            case 'pressureJuly':   
                
                var svg = windGraphGenerator.createSVG();
                
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
            
            case 'pressureAugust':   
                
                var svg = windGraphGenerator.createSVG();
                
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
            
            case 'pressureSeptember':   
                
                var svg = windGraphGenerator.createSVG();
                
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
            
            case 'pressureOctober':   
                
                var svg = windGraphGenerator.createSVG();
                
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
            
            case 'pressureNovember':   
                
                var svg = windGraphGenerator.createSVG();
                
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
            
            case 'pressureDecember':   
                
                var svg = windGraphGenerator.createSVG();
                
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
    
    
    rainGraph() {
        
        switch (this.graphType) {
            case 'rainJuly':   
                
                var svg = windGraphGenerator.createSVG();
                
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
            
            case 'rainAugust':   
                
                var svg = windGraphGenerator.createSVG();
                
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
            
            case 'rainSeptember':   
                
                var svg = windGraphGenerator.createSVG();
                
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
            
            case 'rainOctober':   
                
                var svg = windGraphGenerator.createSVG();
                
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
            
            case 'rainNovember':   
                
                var svg = windGraphGenerator.createSVG();
                
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
            
            case 'rainDecember':   
                
                var svg = windGraphGenerator.createSVG();
                
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
    
        solarGraph() {
        
        switch (this.graphType) {
            case 'solarJuly':   
                
                var svg = windGraphGenerator.createSVG();
                
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
            
            case 'solarAugust':   
                
                var svg = windGraphGenerator.createSVG();
                
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
            
            case 'solarSeptember':   
                
                var svg = windGraphGenerator.createSVG();
                
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
            
            case 'solarOctober':   
                
                var svg = windGraphGenerator.createSVG();
                
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
            
            case 'solarNovember':   
                
                var svg = windGraphGenerator.createSVG();
                
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
            
            case 'solarDecember':   
                
                var svg = windGraphGenerator.createSVG();
                
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


 
 
 
