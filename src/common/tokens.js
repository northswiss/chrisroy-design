export const color = {
  mistyMorning: "#FBFBF9",
  greenLight: "#D6FFE7",
  green: "#6fcf97",
  greenDark: "#2BB565",
  nightSky: "#0D0B3F",
  white: "#ffffff",
}

export const theme = {
  day: {
    background: color.mistyMorning,
    textPrimary: color.nightSky,
    primary: {
      main: color.green,
      dark: color.greenDark,
    },
  },
  night: {
    background: color.nightSky,
    textPrimary: color.mistyMorning,
    primary: {
      main: color.green,
    },
  },
}

export const typography = {
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 600,
  },
}
