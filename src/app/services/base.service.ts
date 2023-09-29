import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/compat/database";
import { Population } from "../interfaces/population";

@Injectable({
    providedIn: "root"
})
export class BaseService {
    private populationList: AngularFireList<Population>;

    constructor(private afDB: AngularFireDatabase) {
        this.populationList = this.afDB.list("population");
    }

    public getList(): AngularFireList<Population> {
        this.populationList = this.afDB.list("population");
        return this.populationList;
    }

    public addItem(item: Population): void {
        this.populationList.push(item);
    }

    public updateItem(key: string, item: Population): void {
        this.populationList.update(key, item);
    }

    public deleteItem(key: string): void {
        this.populationList.remove(key);
    }
}
