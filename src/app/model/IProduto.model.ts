export interface IProduto {
  id?: number; // opcional: quem gera o id é a API ao cadastrar
  nome: string;
  validade: Date;
  precoProduto: number;
}
