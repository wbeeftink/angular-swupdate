import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ServiceWorkerModule } from "@angular/service-worker";

import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { LogUpdateService } from "./log-update.service.ts.service";
import { CheckForUpdateService } from "./check-for-update.service";
import { HandleUnrecoverableStateService } from "./handle-unrecoverable-state.service";
import { PromptUpdateService } from "./prompt-update.service";

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
