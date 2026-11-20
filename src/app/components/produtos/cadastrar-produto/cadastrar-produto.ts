import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IProduto } from '../../../model/IProduto.model';
import { Produtos } from '../../../services/produtos';

@Component({
  selector: 'app-cadastrar-produto',
  standalone: false,
  templateUrl: './cadastrar-produto.html',
  styleUrl: './cadastrar-produto.css',
})
export class CadastrarProduto {
  private produtosService = inject(Produtos);
  private router = inject(Router);

  // o id não é informado: ele é gerado pela API
  produto: IProduto = {
    nome: '',
    validade: new Date(),
    precoProduto: 0,
  };

  salvarProduto(): void {
    this.produtosService.cadastrar(this.produto).subscribe(retorno => {
      this.produto = retorno; // agora o produto já volta com o ID gerado pela API
      this.produtosService.exibirMensagem(
        'Sistema',
        `${this.produto.nome} foi cadastrado com sucesso. ID ${this.produto.id}`,
        'toast-success'
      );
      this.router.navigate(['/produtos']);
    });
  }
}
