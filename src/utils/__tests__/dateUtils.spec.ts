import {add, formatISO, sub} from 'date-fns';

import {dateUtils} from '../dateUtils';

const MOCKED_NOW = 1705954373;

function getDateISO(duration: Duration, op?: 'sub' | 'add'): string {
  op = op || 'sub';
  const time =
    op === 'sub' ? sub(Date.now(), duration) : add(Date.now(), duration);
  const timeISO = formatISO(time);

  return dateUtils.formatRelative(timeISO);
}

describe('dateUtils', () => {
  beforeAll(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
  });
  describe('formatRelative', () => {
    it('should displayed in seconds if less than 1 minutes ago', () => {
      expect(getDateISO({seconds: 30})).toBe('30 s');
    });
    it('should displayed in minutes if less than 1 hour ago', () => {
      expect(getDateISO({minutes: 30})).toBe('30 m');
    });
    it('should displayed in hours if less than 1 day ago', () => {
      expect(getDateISO({hours: 20})).toBe('20 h');
    });
    it('should displayed in days if less than 7 day ago', () => {
      expect(getDateISO({days: 3})).toBe('3 d');
    });
    it('should displayed in weeks if less than 4 weeks ago', () => {
      expect(getDateISO({weeks: 3})).toBe('3 sem');
    });
    it('should displayed in months if less than 12 months ago', () => {
      expect(getDateISO({months: 3})).toBe('3 mes');
    });
    it('should displayed in dd/MM/yyyy if more than 12 months ago', () => {
      expect(getDateISO({months: 13})).toBe('20/12/1968');
    });
    it('should displayed in dd/MM/yyyy if future date', () => {
      expect(getDateISO({days: 2}, 'add')).toBe('22/01/1970');
    });
  });
});
