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
                buildGraph("solar","07");
                break;
            
            case "august":
                buildGraph("solar","08");
                break;
            
            case "september":
                buildGraph("solar","09");
                break;
        
            case "october":
                buildGraph("solar","10");
                break;
        
            case "november":
                buildGraph("solar","11");
                break;
            
            case "december":
                buildGraph("solar","12");
                break;
        }
    }
    
    if (sensor === "rain") {
        switch(month){
            case "july":
                buildGraph("rain","07");
                break;
            
            case "august":
                buildGraph("rain","08");
                break;
            
            case "september":
                buildGraph("rain","09");
                break;
        
            case "october":
                buildGraph("rain","10");
                break;
        
            case "november":
                buildGraph("rain","11");
                break;
                
            case "december":
                buildGraph("rain","12");
                break;
        }
    }
    
    if (sensor === "pressure") {
        switch(month){
            case "july":
                buildGraph("pressure","07");
                break;
            
            case "august":
                buildGraph("pressure","08");
                break;
            
            case "september":
                buildGraph("pressure","09");
                break;
        
            case "october":
                buildGraph("pressure","10");
                break;
        
            case "november":
                buildGraph("pressure","11");
                break;
            
            case "december":
                buildGraph("pressure","12");
                break;
        }
    }
}

