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

  // Inyección del servicio de pokemons (privado porque solo se usa dentro de la clase)
  private _pokemonService: PokemonService;

  // Lista pública de pokemons que se muestra en el template (binding)
  public pokemons: Pokemon[] = [];

  // Control de paginación
  public paginaActual: number = 1; // Página en la que estamos
  public limitePorPagina: number = 20; // Cantidad de pokemons por página
  public data: any = 0; // Guarda la respuesta completa del servicio

  constructor(pokemonService: PokemonService) {
    // Se inyecta el servicio por constructor y se guarda en la propiedad privada
    this._pokemonService = pokemonService;
  }



  
  // Se ejecuta automáticamente cuando el componente se inicializa
  public ngOnInit(): void {
    this.loadPokemons(); // Carga los pokemons al iniciar
  }

  // Carga la lista de pokemons según la página actual
  public loadPokemons(): void {
    // Calcula el offset para la API (desde qué pokemon empieza)
    const offset = (this.paginaActual - 1) * this.limitePorPagina;

    // Llama al servicio para obtener la lista de pokemons con el offset y el límite
    this._pokemonService.getList(offset, this.limitePorPagina).subscribe(
      (data: Response) => {
        // Asigna la lista de pokemons a la propiedad pública
        this.pokemons = data.results;

        // Guarda toda la respuesta, por si se necesita más adelante
        this.data = data;

        // Muestra la respuesta en consola (debug)
        console.log(data);
      }
    );
  }

  // Devuelve la URL de la imagen de un pokemon a partir de su URL
  public getImageByUrl(pokemon: Pokemon): string {
    // Separa la URL por "/" para obtener el id del pokemon
    const urlSeparated = pokemon.url.split("/");

    // El id es el penúltimo elemento del array (antes del último slash)
    let id = urlSeparated[urlSeparated.length - 2];

    // Devuelve la ruta completa de la imagen del sprite
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
  }

  // Devuelve la URL de detalle del pokemon (para navegar a su vista de detalle)
  public getDetailUrl(pokemon: Pokemon): string {
    // Igual que en la imagen, se obtiene el id separando la URL
    const urlSeparated = pokemon.url.split("/");

    // Devuelve la ruta de detalle del pokemon
    return "/detail/" + urlSeparated[urlSeparated.length - 2];
  }



  //RECORRIDO ENTRE PAGINAS

  // Pasa a la siguiente página de resultados
  public siguiente(): void {
    this.paginaActual++; // Incrementa el número de página
    this.loadPokemons(); // Carga los pokemons de esa página
  }

  // Vuelve a la página anterior (si no está en la primera)
  public anterior(): void {
    if (this.paginaActual > 1) { // Comprueba que no sea la primera página
      this.paginaActual--; // Decrementa el número de página
      this.loadPokemons(); // Carga los pokemons de esa página
    }
  }

}
