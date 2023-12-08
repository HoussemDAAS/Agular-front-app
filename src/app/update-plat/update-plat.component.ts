import { Component, OnInit } from '@angular/core';
import { Plat } from '../model/plat.model';
import { platService } from '../plat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../model/menu.model';
import { Image } from '../model/Image.model';


@Component({
  selector: 'app-update-plat',
  templateUrl: './update-plat.component.html',
  styleUrls: ['./update-plat.component.css']
})
export class UpdatePlatComponent implements OnInit {
  currentPlat = new Plat();
  menus!: Menu[];
  updateidmenu: number | undefined;
  myImage!: string;
  uploadedImage!: File;
  isImageUpdated: Boolean = false;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private platService: platService) { }
//  updatePlat() {
//     this.currentPlat.menu = this.menus.
//       find(men => men.idMenu == this.updateidmenu)!;
//     if (this.isImageUpdated) {
//       this.platService
//         .uploadImage(this.uploadedImage, this.uploadedImage.name,)
//         .subscribe((img: Image) => {
//           this.currentPlat.image = img;
//           this.platService
//             .updatePlat(this.currentPlat)
//             .subscribe((prod) => {
//               this.router.navigate(['plats']);
//             });
//         });
//     }
//     else {
//       this.platService
//         .updatePlat(this.currentPlat)
//         .subscribe((prod) => {
//           this.router.navigate(['plats']);
//         });
//     }}
    // this.platService.updatePlat(this.currentPlat).subscribe(plts => {
    // this.router.navigate(['plats']); }
    // );
  

  ngOnInit(): void {
    this.platService.listeMenu().subscribe(cats => {
      console.log(cats);
      this.menus = cats._embedded.menus;
    });
    this.platService.consulterPlat(this.activatedRoute.snapshot.params['id'])
      .subscribe( prod =>{ this.currentPlat = prod;
   this.updateidmenu = prod.menu?.idMenu;
  } )}

  //   this.platService.consulterPlat(this.activatedRoute.snapshot.params['id']).subscribe(plts => {
  //     this.currentPlat = plts;
  //     this.updateidmenu = this.currentPlat.menu?.idMenu ?? 1; 
  //     this.platService
  //     .loadImage(this.currentPlat.image.idImage)
  //     .subscribe((img: Image) => {
  //     this.myImage = 'data:' + img.type + ';base64,' + img.image;
  //     });// Use a default value if idMenu is undefined
  //   });
  // }


  updatePlat() {
    this.currentPlat.menu = this.menus.find(men => men.idMenu == 
    this.updateidmenu)!; 
    this.platService
    .updatePlat(this.currentPlat)
    .subscribe((plts) => {
    this.router.navigate(['plats']);
    });
    }
    
 
    // ngOnInit(): void {
    //   this.platService.listePlats().
    //   subscribe((response) => { this.menus = response._embedded.menus;
    //   });
    //   this.platService.consulterPlat(this.activatedRoute.snapshot.params['id'])
    //   .subscribe( prod =>{ this.currentPlat = prod;
    //   this.updateidmenu = prod.menu?.idMenu;
    //   } )}
  // onAddImagePlat() {
  //   if (
  //     this.uploadedImage &&
  //     this.uploadedImage.name &&
  //     this.currentPlat &&
  //     this.currentPlat.idPlat !== undefined
  //   ) {
  //     this.platService
  //       .uploadImagePlat(this.uploadedImage, this.uploadedImage.name, this.currentPlat.idPlat)
  //       .subscribe((img: Image) => {
  //         this.currentPlat.images.push(img);
  //       });
  //   } else {
  //     console.error('Error: Invalid values detected.');
  //     console.error('this.uploadedImage:', this.uploadedImage);
  //     console.error('this.currentPlat:', this.currentPlat);
  //   }
  // }
  // onAddImagePlat() {
  //   this.platService
  //   .uploadImagePlat(this.uploadedImage, 
  //   this.uploadedImage.name,this.currentPlat.idPlat!)
  //   .subscribe( (img : Image) => {
  //   this.currentPlat.images.push(img);
  //   });
  //   }
  onAddImagePlat() {
    this.platService
    .uploadImagePlat(this.uploadedImage, 
    this.uploadedImage.name,this.currentPlat.idPlat!)
    .subscribe( (img : Image) => {
    this.currentPlat.images.push(img);
    });
    }
  supprimerImage(img: Image){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.platService.supprimerImage(img.idImage).subscribe(() => {
    //supprimer image du tableau currentProduit.images 
    const index = this.currentPlat.images.indexOf(img, 0);
    if (index > -1) {
    this.currentPlat.images.splice(index, 1);
    }
    });
    }  
  
  





  // Fetch details of the specific plat
  navigateToPlats() {
    this.router.navigate(['/plats']);
  }
  onImageUpload(event: any) {
    if (event.target.files && event.target.files.length) {
      this.uploadedImage = event.target.files[0];
      this.isImageUpdated = true;
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = () => { this.myImage = reader.result as string; };
    }
  }



}



