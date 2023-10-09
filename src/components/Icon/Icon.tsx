import React from 'react';
import {Pressable} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

import {ArrowLeftIcon} from '../../assets/icons/ArrowLeftIcon';
import {ArrowRightIcon} from '../../assets/icons/ArrowRightIcon';
import {BellIcon} from '../../assets/icons/BellIcon';
import {BellOnIcon} from '../../assets/icons/BellOnIcon';
import {BookMarkFillIcon} from '../../assets/icons/BookMarkFillIcon';
import {BookMarkIcon} from '../../assets/icons/BookMarkIcon';
import {CameraIcon} from '../../assets/icons/CameraIcon';
import {ChatIcon} from '../../assets/icons/ChatIcon';
import {ChatOnIcon} from '../../assets/icons/ChatOnIcon';
import {CheckRoundIcon} from '../../assets/icons/CheckRoundIcon';
import {CommentIcon} from '../../assets/icons/CommentIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {FlashOffIcon} from '../../assets/icons/FlashOffIcon';
import {FlashOnIcon} from '../../assets/icons/FlashOnIcon';
import {HeartFillIcon} from '../../assets/icons/HeartFillIcon';
import {HomeFillIcon} from '../../assets/icons/HomeFillIcon';
import {HomeIcon} from '../../assets/icons/HomeIcon';
import {MessageRoundIcon} from '../../assets/icons/MessageRoundIcon';
import {NewPostIcon} from '../../assets/icons/NewPostIcon';
import {ProfileFillIcon} from '../../assets/icons/ProfileFillIcon';
import {ProfileIcon} from '../../assets/icons/ProfileIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import {SettingsIcon} from '../../assets/icons/SettingsIcon';

export interface IconProps {
  name: IconName;
  size?: number;
  color?: ThemeColors;
  onPress?: () => void;
}

export interface IconBase {
  size?: number;
  color?: string;
}

export function Icon({
  name,
  size = 20,
  color = 'backgroundContrast',
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];
  if (onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={8}>
        <SVGIcon size={size} color={colors[color]} />
      </Pressable>
    );
  }
  return <SVGIcon size={size} color={colors[color]} />;
}

const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  bookMark: BookMarkIcon,
  bookMarkFill: BookMarkFillIcon,
  heartFill: HeartFillIcon,
  home: HomeIcon,
  homeFill: HomeFillIcon,
  profile: ProfileIcon,
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
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  checkRound: CheckRoundIcon,
  messageRound: MessageRoundIcon,
  newPost: NewPostIcon,
  search: SearchIcon,
};

export type IconName = keyof typeof iconRegistry;
