import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { AddPuppyComponent } from "./add-puppy/add-puppy.component";
import { MaterialModule } from "../material/material.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [AdminComponent, AddPuppyComponent]
})
export class AdminModule {}
