import { Component, OnInit } from '@angular/core';
import { Plat } from '../model/plat.model';
import { platService } from '../plat.service';
import { Menu } from '../model/menu.model';
import { Image } from '../model/Image.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  newPlat = new Plat();
  menus!: Menu[];
  newmenu!: Menu;
  newidmenu!: number;
  uploadedImage!: File;
  imagePath: any;
plat!: Plat;
  constructor(private platService: platService
    , private router: Router) { }
  // addPlat(){
  //   this.newPlat.menu = this.menus.find(men => men.idMenu == this.newidmenu)!;
  //   this.platService.ajouterPlat(this.newPlat)
  //   .subscribe(plts => {
  //   console.log(plts);
  //   this.router.navigate(['']);
  //   });
  //   }
  addPlat() {
    // Step 1: Add the new plat
    this.platService.ajouterPlat(this.newPlat)
      .subscribe((addedPlat: Plat) => {
        // Step 2: Upload the image
        this.platService.uploadImagePlat(this.uploadedImage, this.uploadedImage.name , addedPlat.idPlat!)
          .subscribe((img: Image) => {
            // Step 3: Associate the image with the new plat
            addedPlat.menu = this.menus.find(cat => cat.idMenu == this.newidmenu)!;
            img.plat_id = addedPlat.idPlat!;
            console.log(addedPlat.idPlat)
            console.log(img.plat_id); // Assuming idPlat is the ID property of Plat
            addedPlat.image = img;
  
            // Step 4: Update the plat with the associated image
            this.platService.updatePlat(addedPlat)
              .subscribe(() => {
                this.router.navigate(['plats']);
              });
          });
      });
  }
  
  ngOnInit(): void {
    this.platService.listeMenu().subscribe(cats => {
      console.log(cats);
      this.menus = cats._embedded.menus;
    });
  }
  navigateToPlats() {
    this.router.navigate(['/plats']);
  }
  // onImageUpload(event: any) {
  //   this.uploadedImage = event.target.files[0];
  //   var reader = new FileReader();
  //   reader.readAsDataURL(this.uploadedImage);
  //   reader.onload = (_event) => { this.imagePath = reader.result; }
  // }
  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = (_event) => { this.imagePath = reader.result; }
    }

    
}
