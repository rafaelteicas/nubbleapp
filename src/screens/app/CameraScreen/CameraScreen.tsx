import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {Box, BoxProps, Icon, PermissionManager} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

const CAMERA_VIEW = Dimensions.get('window').width;
const CONTROL_HEIGHT = (Dimensions.get('window').height - CAMERA_VIEW) / 2;
const CONTROL_DIFF = 30;

export function CameraScreen({navigation}: AppScreenProps<'CameraScreen'>) {
  const {top} = useAppSafeArea();
  const [flashOn, setFlashOn] = useState(false);

  function toggleFlash() {
    setFlashOn(prev => !prev);
  }

  return (
    <PermissionManager
      permissionName="camera"
      description="Erro ao acessar a camera">
      <Box flex={1}>
        <Box backgroundColor="grayWhite" style={StyleSheet.absoluteFill} />
        <Box flex={1} justifyContent="space-between">
          <Box {...$controlAreaTop} style={{paddingTop: top}}>
            <Icon
              size={20}
              color="grayWhite"
              name="arrowLeft"
              onPress={navigation.goBack}
            />
            <Icon
              size={20}
              color="grayWhite"
              name={flashOn ? 'flashOn' : 'flashOff'}
              onPress={toggleFlash}
            />
            <Box width={20} />
          </Box>
          <Box {...$controlAreaBottom}>
            <Icon name="cameraClick" color="grayWhite" />
          </Box>
        </Box>
      </Box>
    </PermissionManager>
  );
}

const $controlAreaTop: BoxProps = {
  flexDirection: 'row',
  backgroundColor: 'grayBlack60',
  height: CONTROL_HEIGHT - CONTROL_DIFF,
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
};

const $controlAreaBottom: BoxProps = {
  backgroundColor: 'grayBlack60',
  height: CONTROL_HEIGHT + CONTROL_DIFF,
  alignItems: 'center',
  justifyContent: 'center',
};
