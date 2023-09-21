let date  = new Date();

let dateInString = date.toString();
console.log(`Date in string is ${dateInString}`);

let getYear = date.getFullYear();
console.log(`Year is ${getYear}`);

//It gives one month behind
let getMonth = date.getMonth();
getMonth = getMonth+1;
console.log(`Month is ${getMonth}`);

const getDate = date.getDate();
console.log(`Date is ${getDate}`);

const getDay = date.getDay();
console.log(`Day is ${getDay}`);

const getHours = date.getHours();
console.log(`Hours  is ${getHours}`);

const getMinutes = date.getMinutes();
console.log(`Minute  is ${getMinutes}`);

const todayDate = `${getYear}-${getMonth}-${getDate}`;
console.log(`Date is ${todayDate}`);

// INTL.DATE-TIME FORMAT API 
//Default format is US
const dateTimeUS = Intl.DateTimeFormat('en-US').format(date);
const dateTimeUk = Intl.DateTimeFormat('en-GB').format(date);
const defaultMethodTime = Intl.DateTimeFormat('default').format(date);
const getMonthFromDateFormatAPI = Intl.DateTimeFormat('en-US',{month:'long'}).format(date);
const getMonthInAnotherWay = date.toLocaleString('default',{
    month:'short'
});
const getTimeAndDate = date.toLocaleString('default',{
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric',
    hour:'numeric',
    minute:'numeric',
    second:'numeric',
    timeZone:'IST'
})
console.log(`Date time format in US from API is ${dateTimeUS}`);
console.log(`Date time format in UK from API is ${dateTimeUk}`)
console.log(`Default time format is US and it is ${defaultMethodTime}`);
console.log(`Getting month from date time format API is ${getMonthFromDateFormatAPI}`);
console.log(`Getting month in short format is ${getMonthInAnotherWay}`);
console.log(getTimeAndDate);