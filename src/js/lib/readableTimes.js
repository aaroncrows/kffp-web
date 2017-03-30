import moment from 'moment';

const validInput = n => /^\d+$/.test(n);

const formatShowRange = (day, start, end) => {
    if (!validInput(day) || !validInput(start) || !validInput(end)) {
        return '';
    }

    const startRange = moment().weekday(day).hour(start).format('dddd ha');
    const endRange = moment().hour(end).format('ha');

    return `${startRange} - ${endRange}`;
};

const formatShowTime = (time) => {
    if (!validInput(time)) {
        return '';
    }

    return moment().hour(time).format('ha');
};

const formatShowDate = (date) => {
    if (!date) {
        return '';
    }

    return moment(date).format('MMMM Do, YYYY');
};

export { formatShowRange, formatShowTime, formatShowDate };
