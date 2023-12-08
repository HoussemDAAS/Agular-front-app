import { Menu } from "./menu.model";
import { Image } from "./Image.model";
export class Plat {
    idPlat? : number;
    nomPlat? : string;
    prix? : number;
     menu? : Menu;
     image! : Image;
imageStr!:string
images!: Image[];
    }