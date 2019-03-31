import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from "./hero/hero.component";
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: 'heroes', component: HeroComponent },
  { path: 'Contacts', component: ContactComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
