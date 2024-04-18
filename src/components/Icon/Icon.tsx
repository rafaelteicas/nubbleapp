import React from 'react';
import {Pressable} from 'react-native';

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
  ErrorRoundIcon,
  CameraClickIcon,
} from '../../assets/icons';
import {useAppTheme} from '../../hooks/useAppTheme';
import {ThemeColors} from '../../theme/theme';

export interface IconBase {
  color?: string;
  size?: number;
  fillColor?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  fillColor?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size = 24,
  fillColor = 'background',
  onPress,
}: IconProps) {
  const SVGIcon = iconRegistry[name];
  const {colors} = useAppTheme();

  const iconProps: React.ComponentProps<typeof SVGIcon> = {
    size,
    color: colors[color],
    fillColor: colors[fillColor],
  };

  if (onPress) {
    return (
      <Pressable testID={name} hitSlop={10} onPress={onPress}>
        <SVGIcon {...iconProps} />
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
  errorRound: ErrorRoundIcon,
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
  cameraClick: CameraClickIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
