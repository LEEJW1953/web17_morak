import { vars } from '@styles/index.css';
import { recipe } from '@vanilla-extract/recipes';

export const button = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: vars.font.family.pretendard,
    fontWeight: vars.font.weight.semibold,
    border: '1px solid transparent',
    borderRadius: '0.8rem',
    cursor: 'pointer',
  },

  variants: {
    theme: {
      primary: {},
      danger: {},
    },
    shape: {
      fill: {},
      line: {},
      text: {},
    },
    size: {
      small: {
        padding: '0.2rem 1.6rem',
        fontSize: '1.4rem',
      },
      medium: {
        padding: '0.4rem 2.4rem',
        fontSize: '1.4rem',
      },
      large: {
        padding: '0.8rem 3.6rem',
        fontSize: '1.6rem',
      },
    },
    disabled: {
      true: { cursor: 'not-allowed' },
      false: {
        ':hover': {
          filter: 'brightness(1.1)',
        },
        ':active': {
          filter: 'brightness(0.9)',
        },
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },

  compoundVariants: [
    {
      variants: {
        theme: 'primary',
        shape: 'fill',
      },
      style: {
        background: vars.color.morakGreen,
        color: vars.color.grayscaleWhite,
      },
    },
    {
      variants: {
        theme: 'danger',
        shape: 'fill',
      },
      style: {
        background: vars.color.morakRed,
        color: vars.color.grayscaleWhite,
      },
    },
    {
      variants: {
        theme: 'primary',
        shape: 'line',
      },
      style: {
        border: `1px solid ${vars.color.morakGreen}`,
        background: vars.color.grayscaleWhite,
        color: vars.color.morakGreen,
      },
    },
    {
      variants: {
        theme: 'danger',
        shape: 'line',
      },
      style: {
        border: `1px solid ${vars.color.morakRed}`,
        background: vars.color.grayscaleWhite,
        color: vars.color.morakRed,
      },
    },
    {
      variants: {
        theme: 'primary',
        shape: 'text',
      },
      style: {
        color: vars.color.morakGreen,
        background: 'none',
      },
    },
    {
      variants: {
        theme: 'danger',
        shape: 'text',
      },
      style: {
        color: vars.color.morakRed,
        background: 'none',
      },
    },
    {
      variants: {
        disabled: true,
        shape: 'fill',
      },
      style: {
        background: vars.color.grayscale200,
        color: vars.color.grayscaleWhite,
      },
    },
    {
      variants: {
        disabled: true,
        shape: 'line',
      },
      style: {
        border: `1px solid ${vars.color.grayscale200}`,
        background: vars.color.grayscaleWhite,
        color: vars.color.grayscale200,
      },
    },
    {
      variants: {
        disabled: true,
        shape: 'text',
      },
      style: {
        color: vars.color.grayscale200,
      },
    },
  ],
});