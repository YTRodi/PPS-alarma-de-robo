import React from 'react';
import { styled, VariantProps, CSS } from '../../../../stitches.config';

const Typography = styled('Text', {
  variants: {
    variant: {
      h1: { fontSize: '$h1', lineHeight: '$h1' },
      h2: { fontSize: '$h2', lineHeight: '$h2' },
      h3: { fontSize: '$h3', lineHeight: '$h3' },
      h4: { fontSize: '$h4', lineHeight: '$h4' },
      h5: { fontSize: '$h5', lineHeight: '$h5' },
      h6: { fontSize: '$h6', lineHeight: '$h6' },
      sub1: { fontSize: '$sub1', lineHeight: '$sub1', letterSpacing: '$sub1' },
      sub2: { fontSize: '$sub2', lineHeight: '$sub2', letterSpacing: '$sub2' },
      body1: { fontSize: '$body1', lineHeight: '$body1' },
      body2: {
        fontSize: '$body2',
        lineHeight: '$body2',
        letterSpacing: '$body2',
      },
      tag1: { fontSize: '$tag1', lineHeight: '$tag1' },
      tag2: { fontSize: '$tag2', lineHeight: '$tag2' },
    },
    weight: {
      extraLight: { fontFamily: '$extraLight' },
      light: { fontFamily: '$light' },
      regular: { fontFamily: '$regular' },
      medium: { fontFamily: '$medium' },
      semiBold: { fontFamily: '$semiBold' },
      bold: { fontFamily: '$bold' },
      extraBold: { fontFamily: '$extraBold' },
    },
  },
  defaultVariants: {
    variant: 'body1',
    weight: 'regular',
  },
});

interface Props {
  children: React.ReactNode;
  weight?: VariantProps<typeof Typography>['weight'];
  css?: CSS;
}

function H1(props: Props) {
  return <Typography variant='h1' weight='bold' {...props} />;
}

function H2(props: Props) {
  return <Typography variant='h2' weight='bold' {...props} />;
}

function H3(props: Props) {
  return <Typography variant='h3' weight='bold' {...props} />;
}

function H4(props: Props) {
  return <Typography variant='h4' weight='bold' {...props} />;
}

function H5(props: Props) {
  return <Typography variant='h5' weight='bold' {...props} />;
}

function H6(props: Props) {
  return <Typography variant='h6' weight='bold' {...props} />;
}

function Sub1(props: Props) {
  return <Typography variant='sub1' {...props} />;
}

function Sub2(props: Props) {
  return <Typography variant='sub2' {...props} />;
}

function Body1(props: Props) {
  return <Typography variant='body1' {...props} />;
}

function Body2(props: Props) {
  return <Typography variant='body2' {...props} />;
}

function Tag1(props: Props) {
  return <Typography variant='tag1' {...props} />;
}

function Tag2(props: Props) {
  return <Typography variant='tag2' {...props} />;
}

export { H1, H2, H3, H4, H5, H6, Sub1, Sub2, Body1, Body2, Tag1, Tag2 };
