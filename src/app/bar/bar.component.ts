import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-bar",
  templateUrl: "./bar.component.html",
  styleUrls: ["./bar.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarComponent {}
