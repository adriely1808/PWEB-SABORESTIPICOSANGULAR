import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from '../../../model/IProduto.model';
import { Produtos } from '../../../services/produtos';

@Component({
  selector: 'app-atualizar-produto',
  standalone: false,
  templateUrl: './atualizar-produto.html',
  styleUrl: './atualizar-produto.css',
})
export class AtualizarProduto implements OnInit {
  private produtosService = inject(Produtos);
  private router = inject(Router);
  private activateRouter = inject(ActivatedRoute);
  private cd = inject(ChangeDetectorRef);

  produto: IProduto = {
    nome: '',
    validade: new Date(),
    precoProduto: 0,
  };

  ngOnInit(): void {
    // pega o :id que veio na rota (produtos/atualizar/:id)
    const id = Number(this.activateRouter.snapshot.paramMap.get('id'));

    this.produtosService.buscarPorId(id).subscribe(retorno => {
      this.produto = retorno;
      this.cd.detectChanges();
    });
  }

  salvarProduto(): void {
    this.produtosService.atualizar(this.produto).subscribe(() => {
      this.produtosService.exibirMensagem(
        'Sistema',
        `${this.produto.nome} foi atualizado com sucesso.`,
        'toast-success'
      );
      this.router.navigate(['/produtos']);
    });
  }
}
