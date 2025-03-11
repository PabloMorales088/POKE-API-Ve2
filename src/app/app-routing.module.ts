import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { InfoPersonalComponent } from './components/info-personal/info-personal.component'; 
import { DocumentacionComponent } from './components/documentacion/documentacion.component'; 

const routes: Routes = [
  { path: "", 
    component: PokemonListComponent 
  },
  { path: "detail/:id", 
    component: PokemonDetailComponent 
  },
  { path: "infoPersonal", 
    component: InfoPersonalComponent 
  }, 
  { path: "documentacion", 
    component: DocumentacionComponent 
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
