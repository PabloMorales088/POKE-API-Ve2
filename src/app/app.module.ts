import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoPersonalComponent } from './components/info-personal/info-personal.component';
import { DocumentacionComponent } from './components/documentacion/documentacion.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  // ✅ Importación de FormsModule agregada

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    HeaderComponent,
    FooterComponent,
    InfoPersonalComponent,
    DocumentacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule  // ✅ FormsModule añadido a imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
