import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetail } from '../../models/pokemon-detail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit {

  // Inyecciones y se guardan como privadas
  private _pokemonService: PokemonService;
  private _route: ActivatedRoute;



  // Propiedad pública donde se almacena el detalle del Pokémon
  public pokemon: PokemonDetail | undefined = undefined;

  constructor(pokemonService: PokemonService, route: ActivatedRoute) {
    // Se asignan los servicios recibidos en el constructor a las propiedades privadas
    this._pokemonService = pokemonService;
    this._route = route;
  }



  

  public ngOnInit(): void {
    // Se carga el Pokémon cuando se inicializa el componente
    this.loadPokemon();
  }

  public loadPokemon(): void {
    // Obtiene el parámetro 'id' de la URL (ruta activa)
    let id = this._route.snapshot.paramMap.get('id');

    // Si hay un id, se llama al servicio para obtener los detalles del Pokémon
    if (id) {
      this._pokemonService.getDetail(Number(id)).subscribe(
        (data: PokemonDetail) => {
          // Asigna el resultado a la propiedad 'pokemon' para mostrarlo en la vista
          this.pokemon = data;

          // Se muestra el detalle en consola (para depuración)
          console.log(this.pokemon);
        }
      );
    }
  }

}
