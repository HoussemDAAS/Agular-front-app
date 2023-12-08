import { Component, OnInit } from '@angular/core';
import { Plat } from '../model/plat.model';
import { platService } from '../plat.service';
import { AuthService } from '../services/auth.service';
import { Image } from '../model/Image.model';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {
  plats!: Plat[];  // Definite assignment assertion

  constructor(private platService: platService,
    public authService: AuthService) {
    platService.listePlats().subscribe(values => {
      this.plats = values;
      console.log(this.plats);
    });
  }

  ngOnInit(): void {
    this.chargerplats();
  }

  // chargerplats(){
  //   this.platService.listePlats().subscribe(prods => {
  //   this.plats = prods;
  //   this.plats.forEach((prod) => {
  //   prod.imageStr = 'data:' + prod.images[0].type + ';base64,' + 
  //   prod.images[0].image;
  //   }); 
  //   });
  //   }
  chargerplats() {
    this.platService.listePlats().subscribe(
      (prods: Plat[]) => {
        this.plats = prods;
        this.plats.forEach((prod) => {
          if (prod.images && prod.images.length > 0) {
            prod.imageStr = 'data:' + prod.images[0].type + ';base64,' + prod.images[0].image;
          }
        });
      },
      (error) => {
        console.error('Error loading plats', error);
        // Handle error gracefully, e.g., show an error message to the user
      }
    );
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
  
}
