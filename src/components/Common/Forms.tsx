import styled from 'styled-components';
// prettier-ignore

/**
 * Button
 *
 * @param {string} size
 * @param {string} color
 * @param {boolean} disabled
 * @param {boolean} text, style button as a text
 */
interface Props{
    size?: keyof {
        tiny: string;
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    },
    color?: keyof{
        white: string
        success: string
        body: string

        primary: {
          light: string
          main: string
          dark: string
          contrastText: string
        },

        secondary: {
          light: string,
          main: string,
          dark: string,
          contrastText: string
        },

        text: {
          primary: string
          secondary: string,
          disabled: string,
          hint: string
        },

        border: {
          light: string,
          main: string,
          dark: string
        },

        error: {
          light: string,
          main: string,
          dark: string,
          contrastText: string
        },

        warning: string,

        info: string,

        grey: {
          50: string,
          100: string,
          200: string,
          300: string,
          400: string,
          500: string,
          600: string,
          700: string,
          800: string,
          900: string
        }
    },
    weight?: keyof{
        light: string;
        normal: string;
        bold: string;
    },
    text?: string,
    ghost?: string,
    fullWidth?: boolean,
}

export const Button = styled.button<Props>`
  letter-spacing: 0.5px;
  outline: 0;
  transition: opacity 0.1s;
  border: 0;
  color: ${(p) => p.theme.colors.white};
  font-size: ${(p) =>
    p.size ? p.theme.font.size[p.size] : p.theme.font.size.xs};
  border-radius: ${(p) => p.theme.radius.sm};
  padding: ${(p) => p.theme.spacing.xs} ${(p) => p.theme.spacing.sm};
  background-color: ${(p) =>
    p.color ? p.theme.colors[p.color] : p.theme.colors.primary.main};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: ${(p) =>
    p.weight ? p.theme.font.weight[p.weight] : p.theme.font.weight.bold};
  white-space: nowrap;
  align-self: flex-start;
  ${(p) =>
    p.disabled &&
    `
    background-color: ${p.theme.colors.grey[500]};
    cursor: not-allowed;
  `};
  ${(p) =>
    !p.disabled &&
    `
    &:hover {
      opacity .9;
      cursor: pointer;
    }
  `};
  ${(p) =>
    p.fullWidth &&
    `
    width: 100%;
  `}
`;

/**
 * Input type text
 */
export const InputText = styled.input`
  outline: 0;
  height: 36px;
  width: 100%;
  border: 1px solid ${(p) => p.theme.dayNight.colors.secondaryteen};
  border-radius: ${(p) => p.theme.radius.sm};
  padding-left: ${(p) => p.theme.spacing.xs};
  color: ${(p) => p.theme.colors.text.secondary};
  &:focus {
    border: 2px solid ${(p) => p.theme.colors.primary.main};
  }
  &:hover {
    border: 2px solid ${(p) => p.theme.colors.primary.main};
  }
`;

/**
 * Textarea
 */
export const Textarea = styled.textarea`
  outline: 0;
  height: 50px;
  width: 100%;
  resize: none;
  border: 0;
  padding-left: ${(p) => p.theme.spacing.sm};
  padding-top: ${(p) => p.theme.spacing.xs};
  font-size: ${(p) => p.theme.font.size.xs};
  &::placeholder {
    color: ${(p) => p.theme.colors.text.secondary};
  }
`;

/**
 * Form component
 */
export const FormDiv = styled.div`
  display: block;
  border-radius: ${(p) => p.theme.radius.sm};
  padding: ${(p) => p.theme.spacing.lg} ${(p) => p.theme.spacing.sm};
  background-color: ${(p) => p.theme.dayNight.colors.background};
  border-top: 1px solid ${(p) => p.theme.colors.border.main};
  border-bottom: 1px solid ${(p) => p.theme.colors.border.main};
`;
