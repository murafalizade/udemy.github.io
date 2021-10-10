var moon = document.getElementById('moon');
var sun = document.getElementById('sun');
var mood = window.localStorage.getItem("MOOD");




if (mood == null || mood == "light") {
    var moon = document.getElementById('moon');
    var sun = document.getElementById('sun');
    var html = document.getElementsByTagName("html")[0];
    var footer = document.getElementsByClassName("footer")[0];
    var copy = document.getElementsByClassName("copyrights")[0];
    html.style.filter = "invert(1)";
    moon.style.display = 'none'
    footer.style.filter = "invert(1)";
    var img = document.getElementsByTagName('img');
    for (let i = 0; i < img.length; i++) {
      img[i].style.filter = 'invert(1)'
    }
    var carouseling = document.getElementsByClassName('carousel-img-div');
    for(let j =0;j<carouseling.length;j++){
        carouseling[j].style.filter = 'invert(1)'
    }

}
else {
    var html = document.getElementsByTagName("html")[0];
    var moon = document.getElementById('moon');
    var sun = document.getElementById('sun');
    html.style.filter = "invert(0)";
    moon.style.display = 'inline-flex';
    var img = document.getElementsByTagName('img');
    for (let i = 0; i < img.length; i++) {
        img[i].style.filter = 'invert(0)'
    }
    var carouseling = document.getElementsByClassName('carousel-img-div');
    for (let j = 0; j < carouseling.length; j++) {
        carouseling[j].style.filter = 'invert(0)'
    }

}
function toogle() {
    if (mood == null || mood == "light") {
        window.location.reload();
        window.localStorage.setItem("MOOD", "dark")
    }
    else {
        window.location.reload();

        window.localStorage.setItem("MOOD", "light")
    }
}

document.getElementById("mood").addEventListener("click", toogle);

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}



// function closeModal(){
//     const modal = document.getElementsByClassName('modal fade in');
//     const bg = document.getElementsByClassName('modal-backdrop')[0];
//     bg.style.display = 'none';
//     modal[0].style.display = 'none';
// }
function createCircleChart(percent, color, size, stroke) {
    let svg = `<svg class="mkc_circle-chart" viewbox="0 0 36 36" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
        <path class="mkc_circle-bg" stroke="#eeeeee" stroke-width="${stroke * 0.5}" fill="none" d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"/>
        <path class="mkc_circle" stroke="${color}" stroke-width="${stroke}" stroke-dasharray="${percent},100" stroke-linecap="round" fill="none"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831" />
        <text class="mkc_info" x="50%" y="50%" alignment-baseline="central" text-anchor="middle" font-size="8">${percent}%</text>
    </svg>`;
    return svg;
}

let charts = document.getElementsByClassName('mkCharts');

for (let i = 0; i < charts.length; i++) {
    let chart = charts[i];
    let percent = chart.dataset.percent;
    let color = ('color' in chart.dataset) ? chart.dataset.color : "#2F4F4F";
    let size = ('size' in chart.dataset) ? chart.dataset.size : "100";
    let stroke = ('stroke' in chart.dataset) ? chart.dataset.stroke : "1";
    charts[i].innerHTML = createCircleChart(percent, color, size, stroke);
}
