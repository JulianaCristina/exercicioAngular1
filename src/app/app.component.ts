import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angulaExercicio1';
  nomes: string[] = ['joão', 'maria', 'jose', 'pedro', 'felipe'];

  nomesFiltros: string[];

  buscar(valor: string) {
    this.nomesFiltros = [];

    // //metodo1
    // for(var i = 0; i< this.nomes.length; i++){
    //     if(this.nomes[i].toLowerCase().includes(valor.toLowerCase())){
    //       this.nomesFiltros.push(this.nomes[i]);
    //     }
    // }
    //
    // //metodo2
    //
    // let temp = [];
    // this.nomes.forEach(buscarItem);
    // function buscarItem(nome) {
    //   if(nome.toLowerCase().includes(valor.toLowerCase())){
    //     temp.push(nome)
    //   }
    //
    // }
    // this.nomesFiltros = temp;
    //
    // //metodo3
    // this.nomesFiltros = this.nomes.filter(function(nome) {
    //   return nome.toLowerCase().includes(valor.toLowerCase());
    //
    // })

    //metodo4
    this.nomesFiltros = this.nomes.filter(
      (nome) => nome.toLowerCase().includes(valor.toLowerCase())
    );
  }

  pessoas: any = [
    {id: 1, nome: 'joao', salario: 5000},
    {id: 2, nome: 'maria', salario: 1000},
    {id: 3, nome: 'jose', salario: 2000},
    {id: 4, nome: 'pedro', salario: 3000},
    {id: 5, nome: 'felipe', salario: 10000},
    {id: 6, nome: 'carlos', salario: 800},
  ]

  getValorTotal() : Number{
    return this.pessoas.reduce(
      (soma, pessoa) => soma+pessoa.salario, 0);
  }

  buscarId(id){
    return this.pessoas.find(pessoa => pessoa.id == id);
  }

  aumentarSalario(percetual){
    this.pessoas.map(pessoa =>
      pessoa.salario += pessoa.salario * percetual/100)
  }
  //aplicando every
  verificaSalario(valor:number){
    return this.pessoas.every(pessoa => pessoa.salario > valor);
  }

  //aplicando o some
  buscaCampos(criterio: string){
    return this.pessoas.filter((pessoa) =>
      Object.keys(pessoa).some(
        chave => pessoa[chave].toString().includes(criterio)
      )
    );
  }
}
