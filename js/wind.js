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
                buildGraph("windSpeed","07");
                break;
            
            case "08":
                buildGraph("windSpeed","08");
                break;
            
            case "09":
                buildGraph("windSpeed","09");
                break;
        
            case "10":
                buildGraph("windSpeed","10");
                break;
        
            case "11":
                buildGraph("windSpeed","11");
                break;
            
            case "12":
                buildGraph("windSpeed","12");
                break;
        }
    }
    
    if (sensor === "dir") {
        switch(month){
            case "07":
                buildGraph("windDir","07");
                break;
            
            case "08":
                buildGraph("windDir","08");
                break;
            
            case "09":
                buildGraph("windDir","09");
                break;
        
            case "10":
                buildGraph("windDir","10");
                break;
        
            case "11":
                buildGraph("windDir","11");
                break;
                
            case "12":
                buildGraph("windDir","12");
                break;
        }
    }
    
}
