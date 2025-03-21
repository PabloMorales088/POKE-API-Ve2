import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { PokemonDetail } from '../models/pokemon-detail';

// INYECTABLE
@Injectable({
  providedIn: 'root' 
})
export class PokemonService {


  // URL base de la API de Pokémon
  private _urlBase: string = "https://pokeapi.co/api/v2/pokemon";


  // Cliente HTTP para hacer las peticiones a la API
  private _httpClient: HttpClient;

  
  // Se inyecta el HttpClient al crear el servicio
  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  // Obtiene una lista paginada de pokemons desde la API
  public getList(offset: number = 0, limit: number = 20): Observable<Response> {
    // Se construye la URL con los parámetros de paginación
    const url = `${this._urlBase}?offset=${offset}&limit=${limit}`;

    // Hace la llamada GET y devuelve un Observable con la respuesta tipada
    return this._httpClient.get<Response>(url);
  }

  // Obtiene el detalle de un Pokémon según su ID
  public getDetail(id: number): Observable<PokemonDetail> {
    // Hace la llamada GET al endpoint del detalle y devuelve el Observable con el resultado
    return this._httpClient.get<PokemonDetail>(this._urlBase + "/" + id);
  }

}
