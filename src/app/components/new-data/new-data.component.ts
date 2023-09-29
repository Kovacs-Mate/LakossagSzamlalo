import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BaseService } from "src/app/services/base.service";

@Component({
    selector: "app-new-data",
    templateUrl: "./new-data.component.html",
    styleUrls: ["./new-data.component.css"]
})
export class NewDataComponent implements OnInit {
    public populationData: FormGroup;

    constructor(private bs: BaseService, private router: Router, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.populationData = this.fb.group({
            egyeb: [null, [Validators.required]],
            evszam: [new Date().getFullYear(), [Validators.required]],
            magyar: [null, [Validators.required]],
            nemet: [null, [Validators.required]],
            szlovak: [null, [Validators.required]]
        });
    }

    public addItem(): void {
        if (this.populationData.valid) {
            this.bs.addItem(this.populationData.value);
            this.router.navigate(["data"]);
        } else alert("Minden mezőt ki kell tölteni!");
    }
}
