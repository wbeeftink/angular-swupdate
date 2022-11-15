import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "foo",
    loadChildren: () => import("./foo/foo.module").then((m) => m.FooModule),
  },
  {
    path: "bar",
    loadChildren: () => import("./bar/bar.module").then((m) => m.BarModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
