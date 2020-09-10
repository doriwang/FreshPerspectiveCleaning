// import dependencies
const axios = require("axios")

const Holidays = require('date-holidays');

const hd = new Holidays('US', 'CO');

const thisYear = (new Date()).getFullYear();
const nextYear = thisYear + 1;

// get holidays for this year and next year
const hdDatesThisYear = hd.getHolidays(thisYear).map(item => item.date);
const hdDatesNextYear = hd.getHolidays(nextYear).map(item => item.date);

// merge tow arrays together
const hdDates = hdDatesThisYear.concat(hdDatesNextYear)

hdDates.map(date => new Date(date));

console.log(hdDates);


const dataFromDB = [
    {
        date: new Date("2020-08/30"),
        section: "morning"
    },
    {
        date: new Date("2020-09/05"),
        section: "morning"
    },
    {
        date: new Date("2020-09/05"),
        section: "afternoon"
    },
    {
        date: new Date("2020-09/07"),
        section: "morning"
    },
    {
        date: new Date("2020-09/07"),
        section: "morning"
    },
    {
        date: new Date("2020-09/23"),
        section: "morning"
    },
    {
        date: new Date("2020-09/27"),
        section: "morning"
    },
    {
        date: new Date("2020-09/27"),
        section: "afternoon"
    },
]

const shouldBlock = [];

axios.get("/api/getjobs")
            .then(({data}) => {
                for(let i = 0; i < data.length - 1; i++) {
                            shouldBlock.push(data[i].selectedDate);
                }
                console.log("#############################")
                console.log(shouldBlock)

            })
            .catch(err => console.log(err))

// const shouldBlock = [];

// suppose that the date should be blocked if the date has its dupilcate in database. 
// didn't count on how many duplicates there are. it should be no more than 2 duplicates since there are no more than 2 sections per day
// for simplicity, we don't consider abnormal case that has more than 2 duplicates.
// for(let i = 0; i < dataFromDB.length - 1; i++) {
//     for(let j = i + 1; j < dataFromDB.length; j++) {
//         if(dataFromDB[j].date.getTime() === dataFromDB[i].date.getTime()) {
//             shouldBlock.push(new Date(dataFromDB[i].date));
//         }
//     }
// }

const blockDates = shouldBlock.concat(hdDates)
console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQ")
// console.log(blockDates);

console.log(new Date("2020-08/30"))

function checkIfdisable(selectedDate) {
    let disableSection = {
        morning: false,
        afternoon: false
    }
    dataFromDB.forEach(item => {
        if (item.date === selectedDate) {
            if (item.section === "morning") {
                disableSection.morning = true;
            } else if (item.section === "afternoon") {
                disableSection.morning = true;
            }
        }
    });
}


// MONGODB_URI=mongodb+srv://finalProject:project12345678@cluster0.k29do.mongodb.net/freshperspective?retryWrites=true&w=majority