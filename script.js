console.log("working ")


var options = {
  series: [{
    name: 'Employer: K73,500 ',
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11 ,12 ,13]
  }, {
    name: 'Employee: K52,500 ',
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11 ,12 ,13]
  }, {
    name: 'Total interest: K244,313',
    data:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11 ,12 ,13]
  },],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: false
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'top',
        offsetX: -10,
        offsetY: 0
      }
    }

  }],
 
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      dataLabels: {

        total: {

          enabled: false,
          style: {

            fontSize: '12px',
            fontWeight: 900
          }
        }
      }
    },
  },
  xaxis: {
    type: 'number',
    categories: [20, 25, 30, 35, 40, 60, 70],

  },
 
  // xaxis: {
  //     labels: {
  //       show: false
  //     },

  colors: ['#08009D', '#4737F2', '#8FADF8'],
  fill: {

    colors: ['#08009D', '#4737F2', '#8FADF8']


  },
  legend: {
    
    position: 'top',
    offsetX: 10,
    offsetY: 10
  },
  dataLabels: {
    style: {
      colors: ['#08009D', '#4737F2', '#8FADF8']
    }
  },
  markers: {
    colors: ['#08009D', '#4737F2', '#8FADF8']
  }

}

// legend: {
//   show: false
// }
//   labels: ["Apple", "Mango", "Banana", "Papaya", "Orange"]



// ApexCharts.exec('mychart', 'updateOptions', {
//     xaxis: {
//       labels: {
//         show: false
//       }
//     }
//   }, false, true);



var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();