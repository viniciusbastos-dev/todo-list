export class ExampleService {
  static async exampleFunction() {
    const random = Math.round(Math.random() * 100);
    if (random >= 50) {
      return { error: 'Deu Erro' };
    }

    return { message: 'Deu Certo' };
  }
}
