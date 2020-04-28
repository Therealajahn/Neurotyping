let chart = document.getElementById('chart-container');

let num = ['one', 'two', 'three', 'four','five', 'six','seven', 'eight','nine','ten','eleven', 'twelve','thirteen','fourteen','fifteen','sixteen'];

let section = [];

for (let i = 0; i < 16; i++){
    section.push(`<section class = "big-boy ${num[i]}">`);
        for (let j = 0; j < 16; j++) {
           section.push(`<div class='small-boy ${num[j]}'></div>`)
        } 
    section.push('</section>');   
}

chart.innerHTML = section.join(' ');

