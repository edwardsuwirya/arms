/**
 * Created by edo on 09/09/2017.
 */
export class MenuItem {
    id:string;
    icon:string;
    title:string;
    direction:string;

    constructor(id:string, icon:string, title:string, direction:string) {
        this.id = id;
        this.icon = icon;
        this.title = title;
        this.direction = direction;
    }
}