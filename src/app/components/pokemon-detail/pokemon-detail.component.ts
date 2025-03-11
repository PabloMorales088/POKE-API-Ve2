import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetail } from '../../models/pokemon-detail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit{

  private _pokemonService: PokemonService;
  private _route: ActivatedRoute;

  public pokemon: PokemonDetail | undefined = undefined;

  constructor(pokemonService: PokemonService, route: ActivatedRoute){
    this._pokemonService = pokemonService;
    this._route = route;
  }

  public ngOnInit(): void {
    this.loadPokemon();
  }

  public loadPokemon(): void{
    let id = this._route.snapshot.paramMap.get('id');
    if(id){
      this._pokemonService.getDetail(Number(id)).subscribe(
        (data:PokemonDetail)=> {
          this.pokemon = data;
          console.log(this.pokemon);
          
        }
      );
    }
  }

}
