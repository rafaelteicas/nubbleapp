import React from 'react';

import {Circle, Svg} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function CameraClickIcon({size = 80, color}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 80 80" fill={color}>
      <Circle cx="40" cy="40" r="34" fill="white" />
      <Circle cx="40" cy="40" r="39" stroke="white" stroke-width="2" />
    </Svg>
  );
}
