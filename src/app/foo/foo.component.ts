import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-foo",
  templateUrl: "./foo.component.html",
  styleUrls: ["./foo.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooComponent {}
