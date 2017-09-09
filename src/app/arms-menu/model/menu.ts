import {MenuItem} from "./menu-item";
/**
 * Created by edo on 09/09/2017.
 */
export class Menu {
    id:string;
    title:string;
    tabNo:number;
    menuItem:MenuItem[];

    constructor(id:string, title:string, tabNo:number, menuItem:MenuItem[]) {
        this.tabNo = tabNo;
        this.id = id;
        this.title = title;
        this.menuItem = menuItem;
    }
}