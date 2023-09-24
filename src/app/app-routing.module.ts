import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AcceuilComponent } from './Components/acceuil/acceuil.component';
import { PetListComponent } from "./Components/pet-list/pet-list.component";
import { AdoptionFormComponent } from './Components/adoption-form/adoption-form.component';
import { PetaddingComponent } from "./Components/petadding/petadding.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'acceuil', component: AcceuilComponent },
  {path: 'petlist',component: PetListComponent
  },
  {path:'petadding', component: PetaddingComponent},
  {
    path: 'adoptionform',
    component: AdoptionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
