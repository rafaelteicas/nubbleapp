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
} from '../../assets/icons';

export interface IconBase {
  color?: string;
  size?: number;
}

interface Props {
  name: IconName;
  color?: ThemeColors;
  size?: number;
}

export function Icon({name, color = 'primary', size = 24}: Props) {
  const SVGIcon = iconRegistry[name];
  const {colors} = useAppTheme();
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
  newPost: NewPostIcon,
  profile: ProfileIcon,
  profileFill: ProfileFillIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
