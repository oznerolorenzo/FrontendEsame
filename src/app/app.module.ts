import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateOffertaComponent } from './pages/create-offerta/create-offerta.component';
import { UpdateOffertaComponent } from './pages/update-offerta/update-offerta.component';
import { SearchOfferteComponent } from './pages/search-offerte/search-offerte.component';
import { OffertaLavoroService } from './services/offerta-lavoro.service';
import { DeleteOffertaComponent } from './pages/delete-offerta/delete-offerta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateOffertaComponent,
    UpdateOffertaComponent,
    SearchOfferteComponent,
    DeleteOffertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [OffertaLavoroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
