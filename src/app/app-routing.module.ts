import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { AddProductComponent } from './shop/components/add-product/add-product.component';

const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'Accueil', component: NavComponent },
  { path: 'Contact', component: NavComponent },
  { path: 'panier', component: AddProductComponent },
  { path: '**', component: NavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
