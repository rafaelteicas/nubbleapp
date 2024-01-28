import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {renderHook} from 'test-utils';

import {theme} from '@theme';

import {useAppSafeArea} from '../useAppSafeArea';

jest.mock('react-native-safe-area-context');
const mockedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets);

describe('useAppSafeArea', () => {
  it('when the safe area is less than minimum requirement, returns the minimum requirement', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () => ({top: 5, bottom: 5}) as EdgeInsets,
    );
    const {result} = renderHook(() => useAppSafeArea());
    expect(result.current.top).toEqual(theme.spacing.s20);
    expect(result.current.bottom).toEqual(theme.spacing.s20);
  });
  it('when the safe area is greater than minimum requirement, returns the safe area', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () => ({top: 40, bottom: 40}) as EdgeInsets,
    );
    const {result} = renderHook(() => useAppSafeArea());
    expect(result.current.top).toEqual(40);
    expect(result.current.bottom).toEqual(40);
  });
});
