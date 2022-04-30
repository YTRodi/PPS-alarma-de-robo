import React from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { CSS } from '../../../stitches.config';
import { StyledTouchableHighlight } from './styles';

export interface Props {
  underlayColor?: ColorValue;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  css?: CSS;
}

const Touchable: React.FC<Props> = ({
  underlayColor,
  disabled,
  onPress,
  style = {},
  children,
  css,
}) => {
  return (
    <StyledTouchableHighlight
      underlayColor={underlayColor}
      activeOpacity={disabled ? 1 : 0.7}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      style={style}
      css={css}
    >
      {children}
    </StyledTouchableHighlight>
  );
};

export default Touchable;
