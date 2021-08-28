/**
 This file contains a function to return the string version of any day of the week.
 Programmers: Rick Mercer and Jeff Wiederkehr
 */

// Precondition: day is always a valide integer in the range of 1 through 7 inclusive.
function dayOfWeek(day) {
    /**
     Return the string "Monday" if the argument passed to parameter day is 1.
     Return "Tuesday" if the argument is 2. Or return the string ""Wednesday", "Thursday",
     "Friday", "Saturday", or Sunday if day is 3, 4, 5, 6, or 7 respectively.
     */
    if (day === 1) {
        return "Monday";
    }
    else if (day === 2) {
        return "Tuesday";
    }
    else if (day ===3) {
        return "Wednesday";
    }
    else if (day === 4) {
        return "Thursday";
    }
    else if (day === 5) {
        return "Friday";
    }
    else if (day === 6) {
        return "Saturday";
    }
    else if (day === 7) {
        return "Sunday";
    }
    else {
        return "Not a valid day of the week";
    }

}
console.assert(dayOfWeek(1) === "Monday");
console.assert(dayOfWeek(2) === "Tuesday");
console.assert(dayOfWeek(3) === "Wednesday");
console.assert(dayOfWeek(4) === "Thursday");
console.assert(dayOfWeek(5) === "Friday");
console.assert(dayOfWeek(6) === "Saturday");
console.assert(dayOfWeek(7) === "Sunday");
console.assert(dayOfWeek(512) === "Not a valid day of the week");
console.assert(dayOfWeek("bad input") === "Not a valid day of the week");


