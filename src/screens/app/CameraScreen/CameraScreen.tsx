import React, {useRef, useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
import {
  Camera,
  Templates,
  useCameraDevice,
  useCameraFormat,
} from 'react-native-vision-camera';

import {Box, BoxProps, Icon, PermissionManager} from '@components';
import {useAppSafeArea, useAppState} from '@hooks';
import {AppScreenProps} from '@routes';

const CAMERA_VIEW = Dimensions.get('window').width;
const CONTROL_HEIGHT = (Dimensions.get('window').height - CAMERA_VIEW) / 2;
const CONTROL_DIFF = 30;

export function CameraScreen({navigation}: AppScreenProps<'CameraScreen'>) {
  const [isReady, setIsReady] = useState(false);
  const [flashOn, setFlashOn] = useState(false);
  const camera = useRef<Camera>(null);

  const device = useCameraDevice('back', {
    physicalDevices: [
      'telephoto-camera',
      'ultra-wide-angle-camera',
      'wide-angle-camera',
    ],
  });
  const format = useCameraFormat(device, Templates.Instagram);
  const {top} = useAppSafeArea();
  const isFocused = useIsFocused();
  const {appState} = useAppState();

  const isActive = isFocused && appState === 'active';

  async function takePhoto() {
    const photoFile = await camera.current?.takePhoto({
      flash: flashOn ? 'on' : 'off',
      qualityPrioritization: 'quality',
    });

    navigation.navigate('PublishPostScreen', {
      imageUri: `file://${photoFile?.path}`,
    });
  }

  function toggleFlash() {
    setFlashOn(prev => !prev);
  }

  return (
    <PermissionManager
      permissionName="camera"
      description="Erro ao acessar a camera">
      <Box flex={1}>
        {!!device && (
          <Camera
            ref={camera}
            format={format}
            isActive={isActive}
            device={device}
            photo={true}
            style={StyleSheet.absoluteFill}
            onInitialized={() => setIsReady(true)}
            enableHighQualityPhotos={true}
          />
        )}
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
            {isReady && (
              <Icon name="cameraClick" color="grayWhite" onPress={takePhoto} />
            )}
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
