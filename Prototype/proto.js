let chartContainer = document.getElementById('chart-container');

let colorIndex = -1;

let color = ['one', 'two', 'three', 'four','five', 'six','seven', 'eight','nine','ten','eleven', 'twelve','thirteen','fourteen','fifteen','sixteen'];

let chart = '';

    for (let i = 0; i < 256; i++){
        
        let sixteenDiv = i % 16;
        
        if(sixteenDiv === 0){
            colorIndex++;
            console.log("colorIndex",colorIndex);
            chart += `\n\n<section class = 'big-boy ${color[colorIndex]}'>\n`;
        }; 
        
        chart += `\n\t\t<div class='small-boy ${color[colorIndex]}'></div>`;

        if(sixteenDiv === 15){
            chart += '</section>';
        }
    }
console.log("chart",chart);

chartContainer.innerHTML = chart;




