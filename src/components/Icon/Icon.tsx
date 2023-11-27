import React from 'react';
import {ThemeColors} from '../../theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BellIcon,
  BellOnIcon,
  CameraIcon,
  ChatIcon,
  ChatOnIcon,
  CheckIcon,
  CommentIcon,
  ChevronRightIcon,
  FlashOnIcon,
  FlashOffIcon,
  HeartFillIcon,
  HomeIcon,
  HomeFillIcon,
  EyeOffIcon,
  EyeOnIcon,
  MessageIcon,
  TrashIcon,
  NewPostIcon,
  ProfileIcon,
  ProfileFillIcon,
  HeartIcon,
  SettingsIcon,
  SearchIcon,
  BookMarkFillIcon,
  BookMarkIcon,
  CheckRoundIcon,
  MessageRoundIcon,
} from '../../assets/icons';
import {Pressable} from 'react-native';

export interface IconBase {
  color?: string;
  size?: number;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({name, color = 'primary', size = 24, onPress}: IconProps) {
  const SVGIcon = iconRegistry[name];
  const {colors} = useAppTheme();
  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }
  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  bell: BellIcon,
  bellOn: BellOnIcon,
  bookmark: BookMarkIcon,
  bookmarkFill: BookMarkFillIcon,
  camera: CameraIcon,
  chat: ChatIcon,
  chatOn: ChatOnIcon,
  check: CheckIcon,
  checkRound: CheckRoundIcon,
  comment: CommentIcon,
  chevronRight: ChevronRightIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  flashOn: FlashOnIcon,
  flashOff: FlashOffIcon,
  heart: HeartIcon,
  heartFill: HeartFillIcon,
  home: HomeIcon,
  homeFill: HomeFillIcon,
  message: MessageIcon,
  messageRound: MessageRoundIcon,
  newPost: NewPostIcon,
  profile: ProfileIcon,
  profileFill: ProfileFillIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
