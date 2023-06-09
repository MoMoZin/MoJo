
export function formatDate(date) {

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentDate = date ? new Date(date) : new Date();
  const dd = currentDate.getDate() + 1;
  const MM = monthNames[currentDate.getMonth()];
  var yyyy = currentDate.getFullYear();

  const today = dd + ' ' + MM + ' ' + yyyy;
  return today;
};

export function getCurrentTime() {
  const d = new Date();
  const hr = d.getHours(); // => 9
  const min = d.getMinutes(); // =>  30
  const time = hr + " : " + min;
  return time;
};

module.export = {
  formatDate,
  getCurrentTime
};