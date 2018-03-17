import { ApiService } from "./service/api.service";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ItemComponent } from "./components/item/item.component";

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, HttpClientModule],
  declarations: [DashboardComponent, ItemComponent],
  providers: [ApiService]
})
export class DashboardModule {}
