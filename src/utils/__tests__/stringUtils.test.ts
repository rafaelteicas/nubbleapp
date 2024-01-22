import {stringUtils} from '../stringUtils';

describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter off first word', () => {
      expect(stringUtils.capitalizeFirstLetter('Ana maria')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('ANA MARIA')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('aNa MaRia')).toBe('Ana Maria');
    });
    it('should remove leading/trealign spaces', () => {
      expect(stringUtils.capitalizeFirstLetter('ANA MARIA ')).toBe('Ana Maria');
    });
  });
});
