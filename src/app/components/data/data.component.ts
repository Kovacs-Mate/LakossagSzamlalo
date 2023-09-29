import { Component, OnInit } from "@angular/core";
import { map } from "rxjs";
import { BaseService } from "src/app/services/base.service";

@Component({
    selector: "app-data",
    templateUrl: "./data.component.html",
    styleUrls: ["./data.component.css"]
})
export class DataComponent implements OnInit {
    public error: boolean = false;
    public errorMessage: string = "";
    public dataList = [];

    constructor(private bs: BaseService) {}

    ngOnInit(): void {
        this.getList();
    }

    private getList(): void {
        this.bs
            .getList()
            .snapshotChanges()
            .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))))
            .subscribe({
                next: data => {
                    this.dataList = data;
                    this.dataList.sort((a, b) => b.evszam - a.evszam);
                },
                error: error => {
                    this.error = true;
                    this.errorMessage = error.message;
                    console.log(error.message);
                }
            });
    }
}
