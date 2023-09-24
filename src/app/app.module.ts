import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule once

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AcceuilComponent } from './Components/acceuil/acceuil.component';
import { AdoptionFormComponent } from './Components/adoption-form/adoption-form.component';
import { PetListComponent } from './Components/pet-list/pet-list.component';
import { PetaddingComponent } from './Components/petadding/petadding.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AcceuilComponent,
    AdoptionFormComponent,
    PetListComponent,
    PetaddingComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
