import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BazRoutingModule } from "./baz-routing.module";
import { BazComponent } from "./baz.component";

@NgModule({
  declarations: [BazComponent],
  imports: [CommonModule, BazRoutingModule],
})
export class BazModule {}
