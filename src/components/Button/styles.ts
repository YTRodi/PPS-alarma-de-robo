import { ActivityIndicator } from 'react-native';
import { styled } from '../../../stitches.config';
import { Flex, Body1 } from '../Layout';
import Touchable from '../Touchable';

const StyledTouchable = styled(Touchable, {
  borderRadius: '$m',
  minWidth: '$10xl',

  variants: {
    full: {
      true: { flex: 1 },
      false: {},
    },
  },

  defaultVariants: {
    full: false,
  },
});

const Container = styled(Flex, {
  height: '$7xl',
  borderRadius: '$m',

  variants: {
    disabled: {
      true: {},
      false: {},
    },
    variant: {
      text: {},
      outlined: {
        borderWidth: 1,
        borderColor: '$primary',
      },
      default: {
        backgroundColor: '$primary',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'outlined',
      disabled: true,
      css: {
        backgroundColor: '$whiteA12',
        borderColor: '$gray8',
      },
    },
    {
      variant: 'default',
      disabled: true,
      css: {
        backgroundColor: '$gray8',
      },
    },
  ],

  defaultVariants: {
    variant: 'default',
    disabled: false,
  },
});

const Spinner = styled(ActivityIndicator, {});

const Text = styled(Body1, {
  variants: {
    disabled: {
      true: {},
      false: {},
    },
    variant: {
      outlined: {
        color: '$primary',
      },
      text: {
        color: '$primary',
      },
      default: {
        color: '$whiteA12',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'outlined',
      disabled: true,
      css: {
        color: '$gray8',
      },
    },
    {
      variant: 'text',
      disabled: true,
      css: {
        color: '$gray8',
      },
    },
  ],
  defaultVariants: {
    variant: 'default',
    disabled: false,
  },
});

export { StyledTouchable, Container, Spinner, Text };
