var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

var date = new Date('Tue Jun 28 2016 11:37:40 GMT+0530 (India Standard Time)')

var hours = date.getHours();
var minutes = date.getMinutes();
var ampm = date.getHours() >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0' + minutes : minutes;
var strTime = hours + ':' + minutes + ' ' + ampm;

alert(monthNames[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear() + " " + strTime);
