import {add, formatISO, sub} from 'date-fns';

import {dateUtils} from '../dateUtils';

const MOCKED_NOW = 1698325645000;

function getDateISO(duration: Duration, op?: 'add' | 'sub'): string {
  op = op || 'sub';
  const time =
    op === 'sub' ? sub(Date.now(), duration) : add(Date.now(), duration);
  return dateUtils.formatRelative(formatISO(time));
}

describe('dateUtils', () => {
  beforeAll(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  beforeAll(() => {});
  it('Should be displayed in seconds if less than 1 minute ago', () => {
    expect(getDateISO({seconds: 30})).toBe('30 s');
  });
  it('Should be displayed in minutes if less than 60 minutes ago', () => {
    expect(getDateISO({minutes: 30})).toBe('30 m');
  });
  it('Should be displayed in hours if less than 24 hours ago', () => {
    expect(getDateISO({hours: 10})).toBe('10 h');
  });
  it('Should be displayed in days if less than 30 days ago', () => {
    expect(getDateISO({days: 10})).toBe('10 d');
  });
  it('Should be formate in dd-MM-yyyy if more than 30 days', () => {
    expect(getDateISO({days: 30})).toBe('26-09-2023');
  });
  it('Should be formate in dd-MM-yyyy if future', () => {
    expect(getDateISO({days: 30}, 'add')).toBe('25-11-2023');
  });
});
