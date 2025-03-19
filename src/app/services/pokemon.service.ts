import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { PokemonDetail } from '../models/pokemon-detail';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _urlBase: string = "https://pokeapi.co/api/v2/pokemon";
  private _httpClient: HttpClient;

  constructor(httpClient: HttpClient){
    this._httpClient = httpClient;
  }
  
  public getList(offset: number = 0, limit: number = 20): Observable<Response> {
    const url = `${this._urlBase}?offset=${offset}&limit=${limit}`;
    return this._httpClient.get<Response>(url);
  }
  

  public getDetail(id: number): Observable<PokemonDetail>{
    return this._httpClient.get<PokemonDetail>(this._urlBase + "/" + id);
  }
}
