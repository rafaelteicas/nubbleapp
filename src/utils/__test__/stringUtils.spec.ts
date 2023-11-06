import {stringUtils} from '../stringUtils';

describe('stringUtils', () => {
  it('Should capitalize the first letter of each word', () => {
    expect(stringUtils.capitalizeFirstLetter('ANA MARIA')).toBe('Ana Maria');
    expect(stringUtils.capitalizeFirstLetter('Ana maria')).toBe('Ana Maria');
    expect(stringUtils.capitalizeFirstLetter('mARiA')).toBe('Maria');
  });
  it('Should remove white leadingtraling spaces', () => {
    expect(stringUtils.capitalizeFirstLetter(' ANA MARIA ')).toBe('Ana Maria');
  });
});
