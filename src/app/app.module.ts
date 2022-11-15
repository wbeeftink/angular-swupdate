import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ServiceWorkerModule } from "@angular/service-worker";

import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import {
  CheckForUpdateService,
  HandleUnrecoverableStateService,
  LogUpdateService,
  PromptUpdateService,
} from "./services";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000",
    }),
  ],
  providers: [
    LogUpdateService,
    CheckForUpdateService,
    HandleUnrecoverableStateService,
    PromptUpdateService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
