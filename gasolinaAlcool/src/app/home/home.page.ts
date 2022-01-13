import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public resultado: String ="Resultado"
  public precoAlcool
  public precoGasolina



  calcular(){

    //Validar se os campos foram preenchidos
    if(this.precoAlcool && this.precoGasolina){
      
      var pAcool = parseFloat(this.precoAlcool)
      var pGasolina = parseFloat(this.precoGasolina)
      
      /* 

      Faz cálculo(precoAlcool / precoGasolina)
      se: resultado >= 0.7 melhor utilizar gasolina
      senão: melhor utilizar álccol
      
      */

      var res = pAcool / pGasolina
      if(res >= 0.7){
        this.resultado = "Melhor usar Gasolina"

      }else{
        this.resultado = "Melhor usar Álcool"

      }

      
    }else{
      this.resultado = "Preencha corretamente os campos!!"

    }

  }

}
