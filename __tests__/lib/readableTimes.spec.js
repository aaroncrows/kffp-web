import {
    formatShowRange,
    formatShowTime,
    formatShowDate
} from '../../src/js/lib/readableTimes';

describe('Readable Times Helpers', () => {
    it('formatShowRange should convert a weekday and two hours to a range', () => {
        const result = formatShowRange(1, 10, 20);

        expect(result).toBe('Monday 10am - 8pm');
    });

    it('formatShowTime should convert an hour number to 12 hour format', () => {
        const result = formatShowTime(15);

        expect(result).toBe('3pm');
    });

    it('formatShowDate should convert a date string', () => {
        const testDate = new Date('Tue Mar 28 2017 15:28:00 GMT-0700 (PDT)');
        const result = formatShowDate(testDate);

        expect(result).toBe('March 28th, 2017');
    });
});
