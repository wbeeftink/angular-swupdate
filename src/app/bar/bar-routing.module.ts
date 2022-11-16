import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BarComponent } from "./bar.component";

const routes: Routes = [
  { path: "", component: BarComponent },
  {
    path: "baz",
    loadChildren: () =>
      import("../baz/baz.module").then((module) => module.BazModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarRoutingModule {}
