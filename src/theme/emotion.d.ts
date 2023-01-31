import '@emotion/react'

import CSS from 'csstype'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: CSS.Property.Color
      secondary: CSS.Property.Color
      appGreen: CSS.Property.Color
      backgroundGray: CSS.Property.Color
      shadowGrey: CSS.Property.Color
      white: CSS.Property.Color
      black: CSS.Property.Color
      transparentPrimary: CSS.Property.Color
    }
    margins: {
      half: CSS.Property.Margin
      base: CSS.Property.Margin
      double: CSS.Property.Margin
    }
    paddings: {
      half: CSS.Property.Padding
      base: CSS.Property.Padding
      double: CSS.Property.Padding
    }
    fontSizes: {
      title: CSS.Property.FontSize
      subtitle: CSS.Property.FontSize
      text: CSS.Property.FontSize
      smallText: CSS.Property.FontSize
    }
    fontWeights: {
      regular: CSS.Property.FontWeight
      medium: CSS.Property.FontWeight
      bold: CSS.Property.FontWeight
    }
    borderRadius: {
      extraLarge: CSS.Property.BorderRadius
      large: CSS.Property.BorderRadius
      medium: CSS.Property.BorderRadius
      small: CSS.Property.BorderRadius
      tiny: CSS.Property.BorderRadius
    }
    boxShadow: {
      base: CSS.Property.BoxShadow
    }
  }
}
