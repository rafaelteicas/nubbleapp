import React from 'react';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {ThemeColors} from '../../theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';
import {BookMarkFillIcon} from '../../assets/icons/BookMarkFillIcon';
import {HeartFillIcon} from '../../assets/icons/HeartFillIcon';
import {HomeFillIcon} from '../../assets/icons/HomeFillIcon';
import {ProfileFillIcon} from '../../assets/icons/ProfileFillIcon';
import {BellOnIcon} from '../../assets/icons/BellOnIcon';
import {BellIcon} from '../../assets/icons/BellIcon';
import {ChatIcon} from '../../assets/icons/ChatIcon';
import {ChatOnIcon} from '../../assets/icons/ChatOnIcon';
import {CommentIcon} from '../../assets/icons/CommentIcon';
import {SettingsIcon} from '../../assets/icons/SettingsIcon';
import {CameraIcon} from '../../assets/icons/CameraIcon';
import {FlashOffIcon} from '../../assets/icons/FlashOffIcon';
import {FlashOnIcon} from '../../assets/icons/FlashOnIcon';

export interface IconBase {
  size?: number;
  color: string;
}

interface Props {
  name: IconName;
  size?: number;
  color?: ThemeColors;
}

export function Icon({name, size = 20, color = 'backgroundContrast'}: Props) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];
  return <SVGIcon size={size} color={colors[color]} />;
}

const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  bookMarkFill: BookMarkFillIcon,
  heartFill: HeartFillIcon,
  homeFill: HomeFillIcon,
  profileFill: ProfileFillIcon,
  bell: BellIcon,
  bellOn: BellOnIcon,
  chat: ChatIcon,
  chatOn: ChatOnIcon,
  comment: CommentIcon,
  settings: SettingsIcon,
  camera: CameraIcon,
  flashOff: FlashOffIcon,
  flashOn: FlashOnIcon,
};

type IconName = keyof typeof iconRegistry;
