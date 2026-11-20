import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  nomeProduto:string = "Feijoada Completa";
  //anuncio:string = "O "+this.nomeProduto+" está em promoção";
  anuncio:string = `A ${this.nomeProduto} está em promoção`
  idProduto: number = 1;
  precoProduto: number = 59.9;
  promocao: boolean = true;
  foto:string = "img/feijoada.svg";
  dataValidade = "2027-03-15";

  testeVariaveis(): void {
    console.log("Nome do Produto: ", this.nomeProduto);
    console.log("Anuncio: ", this.anuncio);
    console.log("ID: ", this.idProduto);
    console.log("Preço: ", this.precoProduto);
    console.log("Promoção: ", this.promocao);


  }

}
