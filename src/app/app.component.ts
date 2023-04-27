import { Component } from '@angular/core';
import { animali } from './models/animali.models';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Animali : animali[]
  constructor(){
    this.Animali = [
      new animali("cane","bau", 4, "cammina"),
      new animali("rana", "cra", 4, "salta"),
      new animali("canarino", "fiu", 2, "vola"),
      new animali("serpente", "fss", 0, "striscia"),
    ]
  }
  OrdineNome(){
    this.Animali = this.Animali.sort((a, b)=> a.nome.localeCompare(b.nome))
  }
  OrdineZampe(){
    this.Animali = this.Animali.sort((a, b)=> a.zampe - (b.zampe))
  }
}
