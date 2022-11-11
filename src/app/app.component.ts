import { Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";

import { LogUpdateService } from "./log-update.service.ts.service";
import { CheckForUpdateService } from "./check-for-update.service";
import { HandleUnrecoverableStateService } from "./handle-unrecoverable-state.service";
import { PromptUpdateService } from "./prompt-update.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-swupdate!";
  constructor(
    swUpdate: SwUpdate,
    _checkForUpdateService: CheckForUpdateService,
    _handleUnrecoverableStateService: HandleUnrecoverableStateService,
    _logUpdateService: LogUpdateService,
    _promptUpdateService: PromptUpdateService,
  ) {
    console.log(`Service worker updates enabled: ${swUpdate.isEnabled}`);
  }
}
