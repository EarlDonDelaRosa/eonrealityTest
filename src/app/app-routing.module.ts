import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { EonrealityComponent } from './eonreality/eonreality.component';
import { NextComponent } from './next/next.component';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', component: EonrealityComponent },
  { path: 'next', component: NextComponent },
  { path: 'forgotpw', component: ForgotpwComponent },
  { path: 'create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
