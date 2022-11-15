import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-foo",
  templateUrl: "./bar.component.html",
  styleUrls: ["./bar.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarComponent {}
