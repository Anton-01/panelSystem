import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const appRoutes : Routes = [
  { path: 'dashboard', component: DashboardComponent}
]

export const appRoutingProvider : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
