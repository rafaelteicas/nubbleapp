import React from 'react';

import {Circle, Path, Svg} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function BellOnIcon({size, color}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C8.14478 0 6.37674 0.756621 5.08152 2.08557C3.78792 3.41285 3.06934 5.2031 3.06934 7.06032C3.06934 10.6401 2.3208 12.4868 1.67022 13.4141C1.34583 13.8765 1.03835 14.1216 0.839037 14.2467C0.738264 14.3099 0.66186 14.3444 0.620345 14.361C0.603454 14.3678 0.592221 14.3716 0.587354 14.3732C0.208622 14.4705 -0.0404097 14.821 0.0054233 15.1977C0.0521331 15.5816 0.390296 15.8711 0.792129 15.8711H19.2079C19.6097 15.8711 19.9479 15.5816 19.9946 15.1977C20.0404 14.821 19.7914 14.4705 19.4126 14.3732C19.4099 14.3723 19.4051 14.3706 19.3983 14.3682C19.3932 14.3663 19.3869 14.3639 19.3797 14.361C19.3381 14.3444 19.2617 14.3099 19.161 14.2467C18.9617 14.1216 18.6542 13.8765 18.3298 13.4141C17.6792 12.4868 16.9307 10.6401 16.9307 7.06032C16.9307 5.20311 16.2121 3.41284 14.9184 2.08555C13.6232 0.756612 11.8552 0 10 0ZM17.0744 14.3473H2.92564C2.94489 14.3208 2.96412 14.2939 2.98332 14.2665C3.86739 13.0064 4.65349 10.8287 4.65349 7.06032C4.65349 5.57664 5.2284 4.16285 6.23722 3.12777C7.24441 2.09434 8.59912 1.52381 10 1.52381C11.4009 1.52381 12.7556 2.09434 13.7627 3.12776L13.7628 3.12779C14.7716 4.16285 15.3465 5.57663 15.3465 7.06032C15.3465 10.8287 16.1326 13.0064 17.0167 14.2665C17.0359 14.2939 17.0551 14.3208 17.0744 14.3473ZM8.91109 17.7143C8.91109 17.2935 8.55646 16.9524 8.11901 16.9524C7.68156 16.9524 7.32693 17.2935 7.32693 17.7143C7.32693 18.3487 7.72069 18.9226 8.18189 19.305C8.66458 19.7051 9.3384 20 10.0992 20C10.86 20 11.5338 19.7051 12.0165 19.305C12.4777 18.9226 12.8715 18.3487 12.8715 17.7143C12.8715 17.2935 12.5168 16.9524 12.0794 16.9524C11.6419 16.9524 11.2873 17.2935 11.2873 17.7143C11.2873 17.7509 11.2378 17.9389 10.9823 18.1507C10.7483 18.3447 10.432 18.4762 10.0992 18.4762C9.76637 18.4762 9.45009 18.3447 9.21609 18.1507C8.96061 17.9389 8.91109 17.7509 8.91109 17.7143Z"
        fill={color}
      />
      <Circle cx="16" cy="5" r="3" fill="black" />
    </Svg>
  );
}
