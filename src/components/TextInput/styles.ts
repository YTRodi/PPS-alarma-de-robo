import { styled } from '../../../stitches.config';
import { Body1, Flex } from '../Layout';

const WrapperStyledTextInput = styled(Flex, {
  backgroundColor: '$quatenary',
  borderWidth: 2,
  borderRadius: '$m',

  variants: {
    error: {
      true: { borderColor: '$tertiary' },
    },
  },

  defaultVariants: {
    error: false,
  },
});

const StyledTextInput = styled('TextInput', {
  flex: 1,
  paddingVertical: '$8',
  paddingHorizontal: '$12',
  color: '$primary',
  height: '$7xl',
});

const HelperText = styled(Body1, {});

export { WrapperStyledTextInput, StyledTextInput, HelperText };
