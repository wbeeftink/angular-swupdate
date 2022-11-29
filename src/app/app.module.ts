import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ServiceWorkerModule } from "@angular/service-worker";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import {
  CheckForUpdateService,
  HandleUnrecoverableStateService,
  LogUpdateService,
  PromptUpdateService,
} from "./services";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000",
    }),
    MatButtonModule,
    MatSnackBarModule,
    AppRoutingModule,
  ],
  providers: [
    CheckForUpdateService,
    HandleUnrecoverableStateService,
    LogUpdateService,
    PromptUpdateService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
