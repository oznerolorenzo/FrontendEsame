import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateOffertaComponent } from './pages/create-offerta/create-offerta.component';
import { UpdateOffertaComponent } from './pages/update-offerta/update-offerta.component';
import { SearchOfferteComponent } from './pages/search-offerte/search-offerte.component';
import { DeleteOffertaComponent } from './pages/delete-offerta/delete-offerta.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-offerta', component: CreateOffertaComponent },
  { path: 'update-offerta', component: UpdateOffertaComponent },
  { path: 'search-offerte', component: SearchOfferteComponent },
  { path: 'delete-offerta', component: DeleteOffertaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
