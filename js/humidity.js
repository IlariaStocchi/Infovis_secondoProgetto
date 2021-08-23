function buildHumidityGraph() {
        
    var option = document.getElementById("humidity").value;
    
    switch(option){
        case "july":
            buildGraph("humidity","07");
            break;
            
        case "august":
            buildGraph("humidity","08");
            break;
            
        case "september":
            buildGraph("humidity","09");
            break;
        
        case "october":
            buildGraph("humidity","10");
            break;
        
        case "november":
            buildGraph("humidity","11");
            break;
        
        case "december":
            buildGraph("humidity","12");
            break;
    }
}
