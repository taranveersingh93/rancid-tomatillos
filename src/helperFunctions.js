const humanizeDate = (date) => {
  const inputDate = date.toString();
  const year = inputDate.slice(0,4);
  const month = inputDate.slice(5,7);
  const newDate = inputDate.slice(8);
  const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
  };
  return `${months[month]} ${newDate}, ${year}`;
}

const checkServerError = (response) => {
  if (response === 'serverError') {
    return true;
  };
  return false;
}

export {
  humanizeDate,
  checkServerError,
}