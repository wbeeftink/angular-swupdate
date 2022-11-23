import { ChangeDetectionStrategy, Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";

import {
  CheckForUpdateService,
  HandleUnrecoverableStateService,
  LogUpdateService,
  PromptUpdateService,
} from "./services";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = "angular-swupdate";

  constructor(
    private matSnackBar: MatSnackBar,
    swUpdate: SwUpdate,
    _checkForUpdateService: CheckForUpdateService,
    _handleUnrecoverableStateService: HandleUnrecoverableStateService,
    _logUpdateService: LogUpdateService,
    _promptUpdateService: PromptUpdateService,
  ) {
    console.log(`Service worker updates enabled: ${swUpdate.isEnabled}`);
  }

  showSnackBar(): void {
    this.matSnackBar
      .open("👍 This is a snackbar", "Close", {
        verticalPosition: "top",
      })
      .afterDismissed();
  }
}
