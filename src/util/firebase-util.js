export function convertMessage(message) {
  console.log(message);
  switch (message) {
    case 'auth/email-already-in-use':
      return 'Já existe uma conta com este e-mail';
    case 'auth/invalid-email':
      return 'E-mail inválido';
    case 'auth/operation-not-allowed':
      return 'Operação não permitida';
    case 'auth/weak-password':
      return 'Senha deve ter no mínimo 6 caracteres';
    case 'auth/wrong-password':
      return 'Senha incorreta';
    default:
      'Ocorreu um erro';
  }
}
