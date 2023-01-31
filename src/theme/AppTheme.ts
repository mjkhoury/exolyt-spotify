import COLORS from '@Static/colors'

const BASE_MARGIN = 16
const BASE_PADDING = 16

/**
 * Emotion theming
 */
const AppTheme = Object.freeze({
  colors: {
    primary: COLORS.black,
    secondary: COLORS.green,
    backgroundGray: COLORS.grey2,
    shadowGrey: COLORS.grey1,
    white: COLORS.white,
    black: COLORS.darkBlack,
    transparentPrimary: COLORS.transparentBlack
  },
  margins: {
    half: BASE_MARGIN / 2,
    base: BASE_MARGIN,
    double: BASE_MARGIN * 2
  },
  paddings: {
    half: BASE_PADDING / 2,
    base: BASE_PADDING,
    double: BASE_PADDING * 2
  },
  fontSizes: {
    title: 24,
    subtitle: 20,
    text: 16,
    smallText: 14
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700
  },
  borderRadius: {
    extraLarge: 16,
    large: 10,
    medium: 4,
    small: 2,
    tiny: 1
  },
  boxShadow: {
    base: '0 2px 5px rgb(0 0 0 / 5%), 0 1px 5px rgb(0 0 0 / 3%)'
  }
})

export default AppTheme
