import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { DataComponent } from "./components/data/data.component";
import { NewDataComponent } from "./components/new-data/new-data.component";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "data", component: DataComponent },
    { path: "new-data", component: NewDataComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
