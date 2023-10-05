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
import {ArrowLeftIcon} from '../../assets/icons/ArrowLeftIcon';
import {ArrowRightIcon} from '../../assets/icons/ArrowRightIcon';
import {Pressable} from 'react-native';
import {CheckRoundIcon} from '../../assets/icons/CheckRoundIcon';
import {MessageRoundIcon} from '../../assets/icons/MessageRoundIcon';

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
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  checkRound: CheckRoundIcon,
  messageRound: MessageRoundIcon,
};

type IconName = keyof typeof iconRegistry;
