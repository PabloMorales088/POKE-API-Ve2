import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { Response } from '../../models/Response';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {

  //Inyeccion del servicio
  private _pokemonService: PokemonService;

  //Atributo para binding
  public pokemons: Pokemon[] = [];

  //Atributo para limitar la cantidad de pokemons por pagina
  public paginaActual: number = 1;
  public limitePorPagina: number = 20;
  public data: any = 0;


  constructor(pokemonService: PokemonService) {
    this._pokemonService = pokemonService;
  }

  //Metodo que se llama al cargar el componente
  public ngOnInit(): void {
    this.loadPokemons();
  }

  public loadPokemons(): void {
    const offset = (this.paginaActual - 1) * this.limitePorPagina;

    this._pokemonService.getList(offset, this.limitePorPagina).subscribe(
      (data: Response) => {
        this.pokemons = data.results;
        this.data = data;
        console.log(data);
      }
    );
  }


  //Método que calcula la imagen dado un pokemon
  public getImageByUrl(pokemon: Pokemon): string {
    const urlSeparated = pokemon.url.split("/");
    let id = urlSeparated[urlSeparated.length - 2];
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"
  }

  public getDetailUrl(pokemon: Pokemon): string {
    const urlSeparated = pokemon.url.split("/");
    return "/detail/" + urlSeparated[urlSeparated.length - 2];
  }

  public siguiente(): void {
    this.paginaActual++;
    this.loadPokemons();
  }

  public anterior(): void {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.loadPokemons();
    }
  }




}
