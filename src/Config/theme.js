const colours = {
  primary: [],
  secondary: [],
  accent: [],
  success: [],
  error: [],
  warning: [],
  info: [],
  text: [],
  background: [],
};

const remSize = 10;

const spacing = [
  0,
  8,
  16,
  24,
  32,
  48,
  64,
];

const m = [
  `margin: ${spacing[0] / remSize}rem`,
  `margin: ${spacing[1] / remSize}rem`,
  `margin: ${spacing[2] / remSize}rem`,
  `margin: ${spacing[3] / remSize}rem`,
  `margin: ${spacing[4] / remSize}rem`,
  `margin: ${spacing[5] / remSize}rem`,
  `margin: ${spacing[6] / remSize}rem`,
];

const mx =  [
  `margin-right: ${spacing[0] / remSize}rem;
  margin-left: ${spacing[0] / remSize}rem;`,
  `margin-right: ${spacing[1] / remSize}rem;
  margin-left: ${spacing[1] / remSize}rem;`,
  `margin-right: ${spacing[2] / remSize}rem;
  margin-left: ${spacing[2] / remSize}rem;`,
  `margin-right: ${spacing[3] / remSize}rem;
  margin-left: ${spacing[3] / remSize}rem;`,
  `margin-right: ${spacing[4] / remSize}rem;
  margin-left: ${spacing[4] / remSize}rem;`,
  `margin-right: ${spacing[5] / remSize}rem;
  margin-left: ${spacing[5] / remSize}rem;`,
  `margin-right: ${spacing[6] / remSize}rem;
  margin-left: ${spacing[6] / remSize}rem;`,
];

const my =  [
  `margin-top: ${spacing[0] / remSize}rem;
  margin-bottom: ${spacing[0] / remSize}rem;`,
  `margin-top: ${spacing[1] / remSize}rem;
  margin-bottom: ${spacing[1] / remSize}rem;`,
  `margin-top: ${spacing[2] / remSize}rem;
  margin-bottom: ${spacing[2] / remSize}rem;`,
  `margin-top: ${spacing[3] / remSize}rem;
  margin-bottom: ${spacing[3] / remSize}rem;`,
  `margin-top: ${spacing[4] / remSize}rem;
  margin-bottom: ${spacing[4] / remSize}rem;`,
  `margin-top: ${spacing[5] / remSize}rem;
  margin-bottom: ${spacing[5] / remSize}rem;`,
  `margin-top: ${spacing[6] / remSize}rem;
  margin-bottom: ${spacing[6] / remSize}rem;`,
];

const mt =  [
  `margin-top: ${spacing[0] / remSize}rem;`,
  `margin-top: ${spacing[1] / remSize}rem;`,
  `margin-top: ${spacing[2] / remSize}rem;`,
  `margin-top: ${spacing[3] / remSize}rem;`,
  `margin-top: ${spacing[4] / remSize}rem;`,
  `margin-top: ${spacing[5] / remSize}rem;`,
  `margin-top: ${spacing[6] / remSize}rem;`,
];

const mr =  [
  `margin-right: ${spacing[0] / remSize}rem;`,
  `margin-right: ${spacing[1] / remSize}rem;`,
  `margin-right: ${spacing[2] / remSize}rem;`,
  `margin-right: ${spacing[3] / remSize}rem;`,
  `margin-right: ${spacing[4] / remSize}rem;`,
  `margin-right: ${spacing[5] / remSize}rem;`,
  `margin-right: ${spacing[6] / remSize}rem;`,
];

const mb =  [
  `margin-bottom: ${spacing[0] / remSize}rem;`,
  `margin-bottom: ${spacing[1] / remSize}rem;`,
  `margin-bottom: ${spacing[2] / remSize}rem;`,
  `margin-bottom: ${spacing[3] / remSize}rem;`,
  `margin-bottom: ${spacing[4] / remSize}rem;`,
  `margin-bottom: ${spacing[5] / remSize}rem;`,
  `margin-bottom: ${spacing[6] / remSize}rem;`,
];

const ml =  [
  `margin-left: ${spacing[0] / remSize}rem;`,
  `margin-left: ${spacing[1] / remSize}rem;`,
  `margin-left: ${spacing[2] / remSize}rem;`,
  `margin-left: ${spacing[3] / remSize}rem;`,
  `margin-left: ${spacing[4] / remSize}rem;`,
  `margin-left: ${spacing[5] / remSize}rem;`,
  `margin-left: ${spacing[6] / remSize}rem;`,
];

const margin = {
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
}

const fontSize = [
  10,
  12,
  14,
  16,
  20,
  24,
  34,
  48,
  60,
  96
];

const fontWeight = [
  'regular',
  'bold',
  'black',
];

const fontFamily = {
  serif: '',
  sansSerif: '',
  mono: '',
};

export const theme = {
  remSize,
  colours,
  spacing,
  margin,
  fontSize,
  fontWeight,
  fontFamily,
}