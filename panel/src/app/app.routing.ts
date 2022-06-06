import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {LoginComponent} from "./components/login/login.component";
import { IndexCollaboratorComponent } from "./components/collaborator/index-collaborator/index-collaborator.component";
import { EditCollaboratorComponent } from "./components/collaborator/edit-collaborator/edit-collaborator.component";
import {CreateCollaboratorComponent} from "./components/collaborator/create-collaborator/create-collaborator.component";

const appRoutes : Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: '', component: LoginComponent},
  { path: 'collaborator', component: IndexCollaboratorComponent},
  { path: 'collaborator/create', component: CreateCollaboratorComponent },
  { path: 'collaborator/:id', component: EditCollaboratorComponent }
]

export const appRoutingProvider : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
