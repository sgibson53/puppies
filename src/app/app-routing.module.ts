import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";

const routes: Routes = [
  {
    path: "admin",
    loadChildren: "./admin/admin.module#AdminModule"
  },
  {
    path: "",
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
