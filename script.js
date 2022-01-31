let timezone = "";
let elementId = "";

const setVariables = (zone, id) => {
    timezone = zone;
    elementId = id;
    getTime();
}

const addZero = (str) => {
    str = str.toString();
    if (str.length === 1) {
        str = '0' + str;
    };
    return str;
};

const getTime = () => {
    console.log(timezone);
    const date = new Date();
    let currentTimezone = new Date(Date.parse(date.toLocaleString("en", {timeZone: `${timezone}`})));
    let hour = addZero(currentTimezone.getHours());
    let minute = addZero(currentTimezone.getMinutes());
    document.getElementById(elementId).innerHTML = `${hour}:${minute}`;
    
    setTimeout(getTime, (1000));
}

//"Europe/London"
//"America/Toronto"