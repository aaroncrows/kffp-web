import moment from 'moment';

export function formatShowRange (day, start, end) {
    const startRange = moment().weekday(day).hour(start).format('dddd ha');
    const endRange = moment().hour(end).format('ha');

    return `${startRange} - ${endRange}`;
}

export function formatShowTime (time) {
    return moment().hour(time).format('ha');
}

export function formatShowDate (date) {
    return moment(date).format('MMMM Do, YYYY');
}
