import { Component, OnInit } from '@angular/core';
import { Plat } from '../model/plat.model';
import { Menu } from '../model/menu.model';
import { platService } from '../plat.service';
@Component({
  selector: 'app-recherche-par-menu',
  templateUrl: './recherche-par-menu.component.html',
  styleUrls: ['./recherche-par-menu.component.css']
})
export class RechercheParMenuComponent implements OnInit {
  plats! : Plat[];
  idMenu! : number;
  menus! : Menu[];
  constructor(private platService: platService) {

  }
  ngOnInit(): void {
 this.platService.listeMenu().subscribe(mens => {this.menus = mens._embedded.menus;
    console.log(mens);
    });
    }
    onChange() {
      this.platService.rechercherParMenu(this.idMenu).
      subscribe(plts =>{this.plats=plts});
      }
      supprimerPlat(p: Plat) {
        let conf = confirm("Etes-vous sûr ?");
        if (conf && p.idPlat !== undefined) {
          this.platService.supprimerPlat(p.idPlat).subscribe(() => {
            console.log("plat supprimé");
            this.chargerplats();
          });
        }
      }
      chargerplats() {
        this.platService.listePlats().subscribe(plts => {
          console.log(plts);
          this.plats = plts;
        });
      }
}
