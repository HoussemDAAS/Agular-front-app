import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Menu } from '../model/menu.model';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent {
  @Input() menu! :Menu;
  @Output()  menuUpdated = new EventEmitter<Menu>();
  @Input()
   ajout!:boolean;


  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateMenu ",this.menu);
    }
    saveMenu(){
      this.menuUpdated.emit(this.menu);
      }
}
