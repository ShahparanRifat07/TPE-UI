//Sidebar dropdown
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');

allDropdown.forEach(item => {
  const a = item.parentElement.querySelector('a:first-child');
  a.addEventListener('click', function (e) {
    e.preventDefault();

    if (!this.classList.contains('active')) {
      allDropdown.forEach(i => {
        const aLink = i.parentElement.querySelector('a:first-child');


        aLink.classList.remove('active');
        i.classList.remove('show');
      })
    }

    this.classList.toggle('active');
    item.classList.toggle('show');
  });
})


//SIDEBAR COLLAPSE

const toggleSidebar = document.querySelector('nav .toggle-sidebar');


toggleSidebar.addEventListener('click', function () {
  sidebar.classList.toggle('hide');
})



sidebar.addEventListener('mouseleave', function(){
  if (this.classList.contains('hide')) {
    allDropdown.forEach(item => {
      const a = item.parentElement.querySelector('a:first-child');
      a.classList.remove('active');
      item.classList.remove('show');
    })
  }
})

sidebar.addEventListener('mouseenter', function(){
  if (this.classList.contains('hide')) {
    allDropdown.forEach(item => {
      const a = item.parentElement.querySelector('a:first-child');
      a.classList.remove('active');
      item.classList.remove('show');
    })
  }
})


//Profile dropdown

const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');


imgProfile.addEventListener('click', function () {
  dropdownProfile.classList.toggle('show');
});


window.addEventListener('click', function (e) {
  if (e.target !== imgProfile) {
    if (e.target != dropdownProfile) {
      if (dropdownProfile.classList.contains('show')) {
        dropdownProfile.classList.remove('show');
      }
    }
  }
})







//Chart Demos > Pie Charts > Simple Pie
var options = {
  series: [{
    data: [4.3, 4.2, 3.9, 4.7, 1.2, 2.4]
  }],
  chart: {
    type: 'bar',
    height: 380
  },
  plotOptions: {
    bar: {
      barHeight: '100%',
      distributed: true,
      horizontal: true,
      dataLabels: {
        position: 'bottom'
      },
    }
  },
  colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
    '#f48024', '#69d2e7'
  ],
  dataLabels: {
    enabled: true,
    textAnchor: 'start',
    style: {
      colors: ['#fff']
    },
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
    },
    offsetX: 0,
    dropShadow: {
      enabled: true
    }
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  xaxis: {
    categories: ['Classroom Interaction', 'Assessment', 'Counseling & Mentoring', 'Research & Development', 'Organizational Qualities', 'Administrative skills',
    ],
  },
  yaxis: {
    labels: {
      show: false
    }
  },
  title: {
    text: 'Rating Associate with Category',
    align: 'center',
    floating: true
  },
  subtitle: {
    text: 'Category Names as DataLabels inside bars',
    align: 'center',
  },
  tooltip: {
    theme: 'dark',
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return ''
        }
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();




var options = {
  series: [{
    name: "Desktops",
    data: [4.2, 3.1, 4.2, 4.4, 3.9]
  }],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Overall Rating Summary',
    align: 'center'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['2018', '2019', '2020', '2021', '2022'],
  }
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();




