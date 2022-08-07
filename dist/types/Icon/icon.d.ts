import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
export declare type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
    icon: any;
}
/**
 * ```js
 * import { Icon } from 'speed-ui'
 * import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
 * ```
 */
export declare const Icon: React.FC<IconProps>;
