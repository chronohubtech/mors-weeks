import moment from "moment";

const birthDate = new Date("July 23, 2001");
const dateToday = new Date();

const birthDateMoment = moment(birthDate);
const dateTodayMoment = moment(dateToday);

const intervalTime = moment.duration(dateTodayMoment.diff(birthDateMoment));

const weeksAlive = intervalTime.asWeeks().toFixed(0);
const minWeeksOfLife = 4500;
const weeksLeftInYourLife = minWeeksOfLife - weeksAlive;

console.log("%s weeks left", weeksLeftInYourLife);
