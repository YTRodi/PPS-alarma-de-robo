import Constants from 'expo-constants';
import {
  blackA,
  whiteA,
  gray,
  blue,
  red,
  green,
  // grayDark,
  // blueDark,
  // redDark,
  // greenDark,
} from '@radix-ui/colors';
import { createStitches } from 'stitches-native';
import type * as Stitches from 'stitches-native';
export type { VariantProps } from 'stitches-native';

export const { styled, config, useTheme, ThemeProvider, theme, css } =
  createStitches({
    theme: {
      colors: {
        primary: Constants.manifest?.splash?.backgroundColor || '#fff',
        ...blackA,
        ...whiteA,
        ...gray,
        ...blue,
        ...red,
        ...green,
      },
      fonts: {
        extraLight: 'Manrope_200ExtraLight',
        light: 'Manrope_300Light',
        regular: 'Manrope_400Regular',
        medium: 'Manrope_500Medium',
        semiBold: 'Manrope_600SemiBold',
        bold: 'Manrope_700Bold',
        extraBold: 'Manrope_800ExtraBold',
      },
      fontSizes: {
        h1: 96,
        h2: 60,
        h3: 40,
        h4: 32,
        h5: 24,
        h6: 20,
        sub1: 16,
        sub2: 14,
        body1: 13,
        body2: 12,
        tag1: 11,
        tag2: 8,
      },
      lineHeights: {
        h1: 96,
        h2: 76,
        h3: 56,
        h4: 40,
        h5: 32,
        h6: 28,
        sub1: 24,
        sub2: 22,
        body1: 24,
        body2: 20,
        tag1: 18,
        tag2: 16,
      },
      letterSpacings: {
        sub1: 0.4,
        sub2: 0.2,
        body2: 0.2,
      },

      space: {
        0: 0,
        4: 4,
        8: 8,
        12: 12,
        16: 16,
        20: 20,
        24: 24,
        28: 28,
        32: 32,
        36: 36,
        40: 40,
      },
      sizes: {
        none: 0,
        xs: 4,
        s: 8,
        xm: 12,
        m: 16,
        l: 20,
        xl: 24,
        '2xl': 28,
        '3xl': 32,
        '4xl': 36,
        '5xl': 40,
        '6xl': 44,
        '7xl': 48,
        '8xl': 52,
        '9xl': 56,
        '10xl': 60,
      },
      radii: {
        xs: 4,
        s: 6,
        m: 8,
        l: 12,
        pill: 1000,
      },
    },
    utils: {
      shadow: (level: 'small' | 'medium' | 'large') => {
        return {
          small: {
            elevation: 2,
            shadowOffset: { width: 0, height: 1 },
            shadowRadius: 3,
            shadowOpacity: 0.1,
            shadowColor: '#000',
          },
          medium: {
            elevation: 5,
            shadowOffset: { width: 0, height: 3 },
            shadowRadius: 6,
            shadowOpacity: 0.2,
            shadowColor: '#000',
          },
          large: {
            elevation: 10,
            shadowOffset: { width: 0, height: 6 },
            shadowRadius: 12,
            shadowOpacity: 0.4,
            shadowColor: '#000',
          },
        }[level];
      },
      // Padding
      p: (value: Stitches.PropertyValue<'padding'>) => ({ padding: value }),
      pv: (value: Stitches.PropertyValue<'paddingVertical'>) => ({
        paddingVertical: value,
      }),
      ph: (value: Stitches.PropertyValue<'paddingHorizontal'>) => ({
        paddingHorizontal: value,
      }),
      pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
      }),
      pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
        paddingRight: value,
      }),
      pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
        paddingBottom: value,
      }),
      pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
      }),
      px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<'padding'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      // Margin
      m: (value: Stitches.PropertyValue<'margin'>) => ({
        margin: value,
      }),
      mv: (value: Stitches.PropertyValue<'marginVertical'>) => ({
        marginVertical: value,
      }),
      mh: (value: Stitches.PropertyValue<'marginHorizontal'>) => ({
        marginHorizontal: value,
      }),
      mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
      }),
      mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
        marginRight: value,
      }),
      mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
        marginBottom: value,
      }),
      ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
      }),
      mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
        marginBottom: value,
      }),

      // Text align
      ta: (value: Stitches.PropertyValue<'textAlign'>) => ({
        textAlign: value,
      }),

      // Display
      d: (value: Stitches.PropertyValue<'display'>) => ({
        display: value,
      }),
      fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
        flexDirection: value,
      }),
      fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

      ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
        alignItems: value,
      }),
      ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
        alignContent: value,
      }),
      jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
        justifyContent: value,
      }),
      as: (value: Stitches.PropertyValue<'alignSelf'>) => ({
        alignSelf: value,
      }),
      fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
      fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
        flexShrink: value,
      }),
      fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({
        flexBasis: value,
      }),

      // Color
      c: (value: Stitches.PropertyValue<'color'>) => ({ color: value }),

      // Background color
      bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
        backgroundColor: value,
      }),

      // Border radius
      br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
        borderRadius: value,
      }),
      btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
        borderTopRightRadius: value,
      }),
      bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
        borderBottomRightRadius: value,
      }),
      btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
        borderTopLeftRadius: value,
      }),
      bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
        borderBottomLeftRadius: value,
      }),

      // Line height
      lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
        lineHeight: value,
      }),

      // Width & height
      size: (value: Stitches.PropertyValue<'width'>) => ({
        width: value,
        height: value,
      }),
    },
  });

export type CSS = Stitches.CSS<typeof config>;
