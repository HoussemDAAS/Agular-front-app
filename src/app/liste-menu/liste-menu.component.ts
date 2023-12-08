import { Component } from '@angular/core';
import { Menu } from '../model/menu.model';
import { platService } from '../plat.service';
@Component({
  selector: 'app-liste-menu',
  templateUrl: './liste-menu.component.html',
  styleUrls: ['./liste-menu.component.css']
})
export class ListeMenuComponent {
  menues!: Menu[];
  ajout:boolean=true;
constructor( private platService: platService){}
updatedMenu:Menu = {"idMenu":0,"nomMenu":"Pattes"};
ngOnInit(): void {
  this.platService.listeMenu().
  subscribe(men => {this.menues = men._embedded.menus;
  console.log(men);
  })
  
}
menuUpdated(men:Menu){
  console.log("men updated event",men);
  this.platService.ajouterMenu(men).
   subscribe( ()=> this.chargerMenu());
  }
  chargerMenu(){
    this.platService.listeMenu().
    subscribe(men => {this.menues = men._embedded.menus;
    console.log(men);
    });
    }
    updateMenu(men:Menu) {
      this.updatedMenu=men;
      this.ajout=false;
      }
}
