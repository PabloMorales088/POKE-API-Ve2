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
  
  public getList(): Observable<Response>{
    return this._httpClient.get<Response>(this._urlBase);
  }

  public getDetail(id: number): Observable<PokemonDetail>{
    return this._httpClient.get<PokemonDetail>(this._urlBase + "/" + id);
  }
}
