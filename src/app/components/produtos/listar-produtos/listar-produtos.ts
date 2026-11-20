import { ChangeDetectorRef, Component } from '@angular/core';
import { IProduto } from '../../../model/IProduto.model';
import { Produtos } from '../../../services/produtos';

@Component({
  selector: 'app-listar-produtos',
  standalone: false,
  templateUrl: './listar-produtos.html',
  styleUrl: './listar-produtos.css',
})
export class ListarProdutos {
  listaProdutos: IProduto[] = [];

  constructor(private produtosService: Produtos, private cd: ChangeDetectorRef) {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtosService.buscarTodos().subscribe(retorno => {
      this.listaProdutos = retorno;
      this.cd.detectChanges();
    });
  }

  deletar(produto: IProduto): void {
    // produto.id! -> o id é opcional na interface, o "!" garante que ele existe aqui
    this.produtosService.excluir(produto.id!).subscribe(() => {
      this.produtosService.exibirMensagem(
        'SISTEMA',
        `${produto.nome} foi excluido com sucesso!`,
        'toast-error'
      );
      this.carregarProdutos(); // recarrega a lista já sem o item excluído
    });
  }
}
