import colors from '../res/colors';

export function selectColorByCriseNivel(slideValue) {
  switch (slideValue) {
    case 1:
      return colors.nivel1;
    case 2:
      return colors.nivel2;
    case 3:
      return colors.nivel3;
    case 4:
      return colors.nivel4;
    case 5:
      return colors.nivel5;
  }
}
