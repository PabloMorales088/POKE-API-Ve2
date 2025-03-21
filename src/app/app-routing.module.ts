import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { InfoPersonalComponent } from './components/info-personal/info-personal.component'; 
import { DocumentacionComponent } from './components/documentacion/documentacion.component'; 

// Definición de las rutas de la aplicación
const routes: Routes = [
  { 
    path: "", // Ruta cuando la URL está vacía
    component: PokemonListComponent 
  },
  { 
    path: "detail/:id", // Ruta q recibe un parámetro id
    component: PokemonDetailComponent 
  },
  { 
    path: "infoPersonal", // Ruta estática para la información personal
    component: InfoPersonalComponent 
  }, 
  { 
    path: "documentacion", // Ruta estática para la documentación del proyecto
    component: DocumentacionComponent 
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
