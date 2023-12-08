import { Component } from '@angular/core';
import { Plat } from '../model/plat.model';
import { Menu } from '../model/menu.model';
import { platService } from '../plat.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent {
  plats! : Plat[];
  idMenu! : number;
  menus! : Menu[];
  nomPlat: string='';
  allPlats! : Plat[];
  searchTerm!: string;
  constructor(private platService: platService) {}


  ngOnInit(): void {
    this.platService.listePlats().subscribe(plts=> {
    console.log(plts);
    this.allPlats = plts;
    });
    }
  rechercherPlats(){
    
    this.platService.rechercherParNom(this.nomPlat).
    subscribe(pltss => {
    this.plats = pltss; 
    console.log(pltss)});
    }
    onKeyUp(filterText : string){
      this.plats = this.allPlats.filter(item =>
      item.nomPlat!.toLowerCase().includes(filterText));
      }
      
}
