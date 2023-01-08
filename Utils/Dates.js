const moment = require("moment/moment");

class Dates {

    static getCurrentDate(format) {

        const now = moment();
        
        if (format === 'day') {
            return now.format('D');
        } else if (format === 'month') {
            return now.format('MMM');
        } else if (format === 'year') {
            return now.format('YYYY');
        } else if (format === 'Month') {
            return now.format('MMMM');
        } else {
            throw 'Invalid format';
        }
        
    }



}
module.exports = Dates;