let chart = document.getElementById('chart-container');

let num = ['one', 'two', 'three', 'four','five', 'six','seven', 'eight','nine','ten','eleven', 'twelve','thirteen','fourteen','fifteen','sixteen'];

let colorNum = -1;
let section = [];
for (let i = 0; i < 256; i++){
    let sixteenDiv = i % 16;
    // console.log("sixteenDiv:",sixteenDiv);
    
    if(sixteenDiv === 0){ 
     colorNum++;
        // console.log( colorNum" colorNum);
        section.push(`<section class = "big-boy ${num[colorNum]}">`);
    }    
    console.log('colorNum:', colorNum);
    section.push(`<div class='small-boy ${num[colorNum]}'></div>`)
    
    if(sixteenDiv === 15){   
    section.push('</section>'); 
    };
    
    // console.log(section);  
}

chart.innerHTML = section.join(' ');

