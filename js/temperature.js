function buildTemperatureGraph() {
        
    var option = document.getElementById("temperature").value;
    
    switch(option){
        case "july":
            buildGraph("temperature","07");
            break;
            
        case "august":
            buildGraph("temperature","08");
            break;
            
        case "september":
            buildGraph("temperature","09");
            break;
        
        case "october":
            buildGraph("temperature","10");
            break;
        
        case "november":
            buildGraph("temperature","11");
            break;
        
        case "december":
            buildGraph("temperature","12");
            break;
    }
}
