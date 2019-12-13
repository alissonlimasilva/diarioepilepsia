export function getIcon(atributo) {
  switch (atributo) {
    case 'sono':
      return 'seat-individual-suite';
    case 'fome':
      return 'food';
    case 'privacaoSono':
      return 'sleep-off';
    case 'remedio':
      return 'clock';
  }
}
