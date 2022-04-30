import { ComponentProps } from 'react';
import { TextInput as TInput } from 'react-native';
import { CSS, useTheme } from '../../../stitches.config';
import { useToggle } from '../../hooks';
import { Flex, Sub2 } from '../Layout';
import Button from '../Button';
import { WrapperStyledTextInput, StyledTextInput, HelperText } from './styles';

type TextInputProps = ComponentProps<typeof TInput>;
interface Props extends TextInputProps {
  label?: string;
  error?: boolean;
  helperText?: string;
  css?: CSS;
}

function TextInput({ label, error = false, helperText, css, ...rest }: Props) {
  const { colors } = useTheme();
  const [showPassword, toggleShowPassword] = useToggle(rest.secureTextEntry);
  const color = error ? colors.red10 : colors.whiteA12;

  return (
    <Flex direction='column' css={css}>
      {label && <Sub2 css={{ color, mb: '$4' }}>{label}</Sub2>}
      <WrapperStyledTextInput align='center' error={error}>
        <StyledTextInput
          autoCapitalize='none'
          selectionColor={colors.primary}
          placeholderTextColor={colors.blackA9}
          autoCorrect={false}
          {...rest}
          secureTextEntry={showPassword}
        />
        {rest.secureTextEntry && (
          <Flex css={{ mh: '$8' }}>
            <Button
              variant='text'
              onPress={toggleShowPassword}
              text={showPassword ? 'Mostrar' : 'Ocultar'}
            />
          </Flex>
        )}
      </WrapperStyledTextInput>
      {helperText && <HelperText css={{ color }}>{helperText}</HelperText>}
    </Flex>
  );
}

export default TextInput;
