import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

import {inMemoryStorage} from '../services/storage/implementation/jest/inMemoryStorage';
import {initializeStorage} from '../services/storage/storage';

jest.mock('react-native-safe-area-context', () => ({
  ...mockSafeAreaContext,
  useSafeAreaInsets: jest.fn(mockSafeAreaContext.useSafeAreaInsets),
}));

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

initializeStorage(inMemoryStorage);
