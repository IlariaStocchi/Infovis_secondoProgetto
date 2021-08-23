# Infovis_secondProject

This project contains a data visualization system for data of the Pantheon project about precision agriculture. See [here](http://pantheon.inf.uniroma3.it/) for more information about it. <br/>
The data showed here refer to the second half of 2020 and are time series containing measurements of various type of real sensors placed in hazelnut orchards. <br/>
## Data source
There are two main types of sensors:
- weather station
- soil sensors <br/>

The first one collects data about the most relevant atmospheric factors (humidity, temperature, rain, solar radiation, wind, pressure).
The soil sensors instead measure some soil characteristics, such as water and temperature. There are nine different sensors of this type because the hazelnut field has been divided into nine areas, each one with its own measuring instrument. <br/> <br/>
All original measurement came with a time-stamp, the sensor id, the name of the measuring instrument, the unit of measure and the related value. See [here](https://github.com/Progetto-bigData/second_project_pantheon_precision_farming) for how we simulated the real time streaming of these data and the related collecting process, in the Big Data course project. <br/> <br/>
In order to plot the graph we used only the time-stamp, and the value, leaving to the graphics the remaining information. 
## Project notes
- This visualization system allows to compare two charts at a time, through a multiple choice mechanism.
- To display graph about solar radiation, atmospheric pressure and rain first click on the sensor type button, then to the month button. To display data aboul soil sensors, instead, first click on the sensor type button, then on the area button and finally on the month button. 
- You can zoom by selecting an area on the graph and you can restore the overall data visualization by double clicking on any point of the chart. 
