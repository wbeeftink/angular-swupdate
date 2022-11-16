import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-baz",
  templateUrl: "./baz.component.html",
  styleUrls: ["./baz.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BazComponent {}
