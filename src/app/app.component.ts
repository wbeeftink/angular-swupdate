import { ChangeDetectionStrategy, Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { MatSnackBar } from "@angular/material/snack-bar";

import {
  CheckForUpdateService,
  HandleUnrecoverableStateService,
  LogUpdateService,
  PromptUpdateService,
  WhatTheCommitService,
} from "./services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = "angular-swupdate";

  constructor(
    private _checkForUpdateService: CheckForUpdateService,
    private _handleUnrecoverableStateService: HandleUnrecoverableStateService,
    private _logUpdateService: LogUpdateService,
    private _promptUpdateService: PromptUpdateService,
    private matSnackBar: MatSnackBar,
    private swUpdate: SwUpdate,
    private whatTheCommitService: WhatTheCommitService,
  ) {
    console.log(`Service worker updates enabled: ${swUpdate.isEnabled}`);
  }

  showSnackBar(): void {
    this.matSnackBar.open("👍 This is a snackbar", "Close", {
      verticalPosition: "top",
    });
  }

  showCommitMessage(): void {
    this.whatTheCommitService.getCommitMessage().subscribe((commitMessage) => {
      const message = `git commit -m "${commitMessage.commit_message}"`;
      return this.matSnackBar.open(message, "Close", {
        verticalPosition: "top",
      });
    });
  }
}
