import { Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";

import {
  CheckForUpdateService,
  HandleUnrecoverableStateService,
  LogUpdateService,
  PromptUpdateService,
} from "./services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-swupdate";

  constructor(
    swUpdate: SwUpdate,
    _checkForUpdateService: CheckForUpdateService,
    _promptUpdateService: PromptUpdateService,
    _handleUnrecoverableStateService: HandleUnrecoverableStateService,
    _logUpdateService: LogUpdateService,
  ) {
    console.log(`Service worker updates enabled: ${swUpdate.isEnabled}`);
  }
}
