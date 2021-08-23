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
            var area = "7";
            return area;
            break;
            
        case "f8":
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
                        buildGraph("soilWater","07","01");
                        break;
                    
                    case "august":
                        buildGraph("soilWater","08","01");
                        break;
                        
                    case "september":
                        buildGraph("soilWater","09","01");
                        break;
                    
                    case "october":
                        buildGraph("soilWater","10","01");
                        break;
                        
                    case "november":
                        buildGraph("soilWater","11","01");
                        break;
                        
                    case "december":
                        buildGraph("soilWater","12","01");
                        break;
                }
                break;
            
            case "2":
                switch(month){
                    case "july":
                        buildGraph("soilWater","07","02");
                        break;
                    
                    case "august":
                        buildGraph("soilWater","08","02");
                        break;
                        
                    case "september":
                        buildGraph("soilWater","09","02");
                        break;
                    
                    case "october":
                        buildGraph("soilWater","10","02");
                        break;
                        
                    case "november":
                        buildGraph("soilWater","11","02");
                        break;
                        
                    case "december":
                        buildGraph("soilWater","12","02");
                        break;
                }
                break;
            
            case "3":
                switch(month){
                    case "july":
                        buildGraph("soilWater","07","03");
                        break;
                    
                    case "august":
                        buildGraph("soilWater","08","03");
                        break;
                        
                    case "september":
                        buildGraph("soilWater","09","03");
                        break;
                    
                    case "october":
                        buildGraph("soilWater","10","03");
                        break;
                        
                    case "november":
                        buildGraph("soilWater","11","03");
                        break;
                        
                    case "december":
                        buildGraph("soilWater","12","03");
                        break;
                }
                break;
        
            case "4":
                switch(month){
                    case "july":
                        buildGraph("soilWater","07","04");
                        break;
                    
                    case "august":
                        buildGraph("soilWater","08","04");
                        break;
                        
                    case "september":
                        buildGraph("soilWater","09","04");
                        break;
                    
                    case "october":
                        buildGraph("soilWater","10","04");
                        break;
                        
                    case "november":
                        buildGraph("soilWater","11","04");
                        break;
                        
                    case "december":
                        buildGraph("soilWater","12","04");
                        break;
                }
                break;
        
            case "5":
                 switch(month){
                    case "july":
                        buildGraph("soilWater","07","05");
                        break;
                    
                    case "august":
                        buildGraph("soilWater","08","05");
                        break;
                        
                    case "september":
                        buildGraph("soilWater","09","05");
                        break;
                    
                    case "october":
                        buildGraph("soilWater","10","05");
                        break;
                        
                    case "november":
                        buildGraph("soilWater","11","05");
                        break;
                        
                    case "december":
                        buildGraph("soilWater","12","05");
                        break;
                }
                break;
            
            case "6":
                switch(month){
                    case "july":
                        buildGraph("soilWater","07","06");
                        break;
                    
                    case "august":
                        buildGraph("soilWater","08","06");
                        break;
                        
                    case "september":
                        buildGraph("soilWater","09","06");
                        break;
                    
                    case "october":
                        buildGraph("soilWater","10","06");
                        break;
                        
                    case "november":
                        buildGraph("soilWater","11","06");
                        break;
                        
                    case "december":
                        buildGraph("soilWater","12","06");
                        break;
                }
                break;
            
            case "7":
                switch(month){
                    case "july":
                        buildGraph("soilWater","07","07");
                        break;
                    
                    case "august":
                        buildGraph("soilWater","08","07");
                        break;
                        
                    case "september":
                        buildGraph("soilWater","09","07");
                        break;
                    
                    case "october":
                        buildGraph("soilWater","10","07");
                        break;
                        
                    case "november":
                        buildGraph("soilWater","11","07");
                        break;
                        
                    case "december":
                        buildGraph("soilWater","12","07");
                        break;
                }
                break;
                
            case "8":
                switch(month){
                    case "july":
                        buildGraph("soilWater","07","08");
                        break;
                    
                    case "august":
                        buildGraph("soilWater","08","08");
                        break;
                        
                    case "september":
                        buildGraph("soilWater","09","08");
                        break;
                    
                    case "october":
                        buildGraph("soilWater","10","08");
                        break;
                        
                    case "november":
                        buildGraph("soilWater","11","08");
                        break;
                        
                    case "december":
                        buildGraph("soilWater","12","08");
                        break;
                }
                break;
                
            case "9":
                switch(month){
                    case "july":
                        buildGraph("soilWater","07","09");
                        break;
                    
                    case "august":
                        buildGraph("soilWater","08","09");
                        break;
                        
                    case "september":
                        buildGraph("soilWater","09","09");
                        break;
                    
                    case "october":
                        buildGraph("soilWater","10","09");
                        break;
                        
                    case "november":
                        buildGraph("soilWater","11","09");
                        break;
                        
                    case "december":
                        buildGraph("soilWater","12","09");
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
                        buildGraph("soilTemperature","07","01");
                        break;
                    
                    case "august":
                        buildGraph("soilTemperature","08","01");
                        break;
                        
                    case "september":
                        buildGraph("soilTemperature","09","01");
                        break;
                    
                    case "october":
                        buildGraph("soilTemperature","10","01");
                        break;
                        
                    case "november":
                        buildGraph("soilTemperature","11","01");
                        break;
                        
                    case "december":
                        buildGraph("soilTemperature","12","01");
                        break;
                }
                break;
            
            case "2":
                switch(month){
                    case "july":
                        buildGraph("soilTemperature","07","02");
                        break;
                    
                    case "august":
                        buildGraph("soilTemperature","08","02");
                        break;
                        
                    case "september":
                        buildGraph("soilTemperature","09","02");
                        break;
                    
                    case "october":
                        buildGraph("soilTemperature","10","02");
                        break;
                        
                    case "november":
                        buildGraph("soilTemperature","11","02");
                        break;
                        
                    case "december":
                        buildGraph("soilTemperature","12","02");
                        break;
                }
                break;
            
            case "3":
                switch(month){
                    case "july":
                        buildGraph("soilTemperature","07","03");
                        break;
                    
                    case "august":
                        buildGraph("soilTemperature","08","03");
                        break;
                        
                    case "september":
                        buildGraph("soilTemperature","09","03");
                        break;
                    
                    case "october":
                        buildGraph("soilTemperature","10","03");
                        break;
                        
                    case "november":
                        buildGraph("soilTemperature","11","03");
                        break;
                        
                    case "december":
                        buildGraph("soilTemperature","12","03");
                        break;
                }
                break;
        
            case "4":
                switch(month){
                    case "july":
                        buildGraph("soilTemperature","07","04");
                        break;
                    
                    case "august":
                        buildGraph("soilTemperature","08","04");
                        break;
                        
                    case "september":
                        buildGraph("soilTemperature","09","04");
                        break;
                    
                    case "october":
                        buildGraph("soilTemperature","10","04");
                        break;
                        
                    case "november":
                        buildGraph("soilTemperature","11","04");
                        break;
                        
                    case "december":
                        buildGraph("soilTemperature","12","04");
                        break;
                }
                break;
        
            case "5":
                switch(month){
                    case "july":
                        buildGraph("soilTemperature","07","05");
                        break;
                    
                    case "august":
                        buildGraph("soilTemperature","08","05");
                        break;
                        
                    case "september":
                        buildGraph("soilTemperature","09","05");
                        break;
                    
                    case "october":
                        buildGraph("soilTemperature","10","05");
                        break;
                        
                    case "november":
                        buildGraph("soilTemperature","11","05");
                        break;
                        
                    case "december":
                        buildGraph("soilTemperature","12","05");
                        break;
                }
                break;
            
            case "6":
                switch(month){
                    case "july":
                        buildGraph("soilTemperature","07","06");
                        break;
                    
                    case "august":
                        buildGraph("soilTemperature","08","06");
                        break;
                        
                    case "september":
                        buildGraph("soilTemperature","09","06");
                        break;
                    
                    case "october":
                        buildGraph("soilTemperature","10","06");
                        break;
                        
                    case "november":
                        buildGraph("soilTemperature","11","06");
                        break;
                        
                    case "december":
                        buildGraph("soilTemperature","12","06");
                        break;
                }
                break;
            
            case "7":
                 switch(month){
                    case "july":
                        buildGraph("soilTemperature","07","07");
                        break;
                    
                    case "august":
                        buildGraph("soilTemperature","08","07");
                        break;
                        
                    case "september":
                        buildGraph("soilTemperature","09","07");
                        break;
                    
                    case "october":
                        buildGraph("soilTemperature","10","07");
                        break;
                        
                    case "november":
                        buildGraph("soilTemperature","11","07");
                        break;
                        
                    case "december":
                        buildGraph("soilTemperature","12","07");
                        break;
                }
                break;
                
            case "8":
                 switch(month){
                    case "july":
                        buildGraph("soilTemperature","07","08");
                        break;
                    
                    case "august":
                        buildGraph("soilTemperature","08","08");
                        break;
                        
                    case "september":
                        buildGraph("soilTemperature","09","08");
                        break;
                    
                    case "october":
                        buildGraph("soilTemperature","10","08");
                        break;
                        
                    case "november":
                        buildGraph("soilTemperature","11","08");
                        break;
                        
                    case "december":
                        buildGraph("soilTemperature","12","08");
                        break;
                }
                break;
                
            case "9":
                switch(month){
                    case "july":
                        buildGraph("soilTemperature","07","09");
                        break;
                    
                    case "august":
                        buildGraph("soilTemperature","08","09");
                        break;
                        
                    case "september":
                        buildGraph("soilTemperature","09","09");
                        break;
                    
                    case "october":
                        buildGraph("soilTemperature","10","09");
                        break;
                        
                    case "november":
                        buildGraph("soilTemperature","11","09");
                        break;
                        
                    case "december":
                        buildGraph("soilTemperature","12","09");
                        break;
                }
                break;
        }
    }

}


 
