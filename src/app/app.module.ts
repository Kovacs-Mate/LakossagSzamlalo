import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "./components/home/home.component";
import { DataComponent } from "./components/data/data.component";
import { NewDataComponent } from "./components/new-data/new-data.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { environment } from "./environment/environment";

@NgModule({
    declarations: [AppComponent, HomeComponent, DataComponent, NewDataComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
