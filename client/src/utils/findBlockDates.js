export function findBlockDates(jobs) {
    // *** find holidays this year and next year
    // import dependencies
    const Holidays = require('date-holidays');

    // holidays
    const hd = new Holidays('US', 'CO');

    const thisYear = (new Date()).getFullYear();
    const nextYear = thisYear + 1;

    // get holidays for this year and next year
    const hdDatesThisYear = hd.getHolidays(thisYear).map(item => item.date);
    const hdDatesNextYear = hd.getHolidays(nextYear).map(item => item.date);

    // merge tow arrays together
    const hdDates = hdDatesThisYear.concat(hdDatesNextYear)

    
    // *** find customer booked dates
    const bookedDates = [];

    // creates a function to determine if twa dates are the same day
    function sameDay(d1, d2) {
        return (
            d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate()
        )
    }
    

    // suppose that the date should be blocked if the date has its dupilcate in database. 
    // didn't count on how many duplicates there are. it should be no more than 2 duplicates since there are no more than 2 sections per day
    // for simplicity, we don't consider abnormal case that has more than 2 duplicates.
    for(let i = 0; i < jobs.length - 1; i++) {
        for(let j = i + 1; j < jobs.length; j++) {
            let datej = new Date(jobs[j].selectedDate);
            let datei = new Date(jobs[i].selectedDate);
            
            if(sameDay(datej, datei)) {
                bookedDates.push(datej);
            }
        }
    }
    
    // join holidays and booked dates together
    const blockDates = bookedDates.concat(hdDates);

    for (let i=0; i < blockDates.length; i++) {
        blockDates[i] = new Date(blockDates[i]);
    }


    return blockDates;

}


