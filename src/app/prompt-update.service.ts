import { Injectable } from "@angular/core";
import { SwUpdate, VersionReadyEvent } from "@angular/service-worker";
import { filter } from "rxjs";

/**
 * Updating to the latest version
 * https://angular.io/guide/service-worker-communications#updating-to-the-latest-version
 */
@Injectable()
export class PromptUpdateService {
  constructor(swUpdate: SwUpdate) {
    swUpdate.versionUpdates
      .pipe(
        filter(
          (event): event is VersionReadyEvent => event.type === "VERSION_READY",
        ),
      )
      .subscribe(() => {
        if (confirm("A new version is available, click OK to refresh.")) {
          // Reload the page to update to the latest version.
          document.location.reload();
        }
      });
  }
}
