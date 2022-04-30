import { Props as TouchableProps } from '../Touchable';
import { StyledTouchable, Container, Spinner, Text } from './styles';
import { useTheme, VariantProps } from '../../../stitches.config';

type VariantType = VariantProps<typeof Container>['variant'];
type CustomTouchableProps = Omit<TouchableProps, 'underlayColor'>;
interface Props extends CustomTouchableProps {
  text: string;
  full?: boolean;
  loading?: boolean;
  variant?: VariantType;
}

function Button({
  text,
  full = false,
  loading = false,
  variant = 'default',
  ...touchableProps
}: Props) {
  const { colors } = useTheme();
  const { disabled, onPress } = touchableProps;
  const isTextVariant = variant === 'text';
  const isDisabled = disabled || loading;

  let spinnerColor = colors.whiteA12;
  if (variant !== 'default' && isDisabled) {
    spinnerColor = colors.gray8;
  }

  return (
    <StyledTouchable
      underlayColor={!isTextVariant ? colors.gray12 : 'transparent'}
      disabled={isDisabled}
      onPress={onPress}
      full={full}
    >
      <Container
        align='center'
        justify='center'
        disabled={isDisabled}
        variant={variant}
      >
        {loading ? (
          <Spinner color={spinnerColor} />
        ) : (
          <Text weight='bold' disabled={disabled} variant={variant}>
            {text}
          </Text>
        )}
      </Container>
    </StyledTouchable>
  );
}

export default Button;
