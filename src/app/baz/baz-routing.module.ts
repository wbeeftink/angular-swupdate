import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BazComponent } from "./baz.component";

const routes: Routes = [{ path: "", component: BazComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BazRoutingModule {}
