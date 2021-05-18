import "../../../node_modules/chart.js/dist/Chart.min.js";
(function() {
    const chartCanvas = document.getElementById("example-chart");
    const data = JSON.parse(chartCanvas.parentElement.dataset.values);
    const brandColor = (window.getComputedStyle(chartCanvas)).getPropertyValue('--color-brand') || "#2541b2";

    const chart = new Chart(chartCanvas, {
        type: "line",
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [{
                label: "Sales of the month",
                data: data,
                borderColor: brandColor,
                backgroundColor: "transparent",
                lineTension: 0.2
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    position: "top"
                }]
            }
        }
    });

    const navigation = document.querySelector(".c-table__navigation");
    const randomArray = (mylength, max) => Array.from({ length: mylength }, () => Math.round(Math.random() * max));
    navigation.addEventListener("click", () => {
        chart.data.datasets[0].data = randomArray(12, 1200);
        chart.update();
    })

})();