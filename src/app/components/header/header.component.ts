import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  juegoActivo = false;
  respuestaUsuario = '';
  resultado = '';

  pokemones = [
    { nombre: 'bulbasaur', imagen: 'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png' },
    { nombre: 'charmander', imagen: 'https://img.pokemondb.net/sprites/black-white/normal/charmander.png' },
    { nombre: 'squirtle', imagen: 'https://img.pokemondb.net/sprites/black-white/normal/squirtle.png' },
    { nombre: 'pikachu', imagen: 'https://img.pokemondb.net/sprites/black-white/normal/pikachu.png' },
    { nombre: 'eevee', imagen: 'https://img.pokemondb.net/sprites/black-white/normal/eevee.png' }
    // Agrega más Pokémon si quieres
  ];

  pokemonActual: any = null;

  abrirJuego() {
    this.juegoActivo = true;
    this.seleccionarPokemonAleatorio();
  }

  cerrarJuego() {
    this.juegoActivo = false;
    this.respuestaUsuario = '';
    this.resultado = '';
  }

  seleccionarPokemonAleatorio() {
    const indice = Math.floor(Math.random() * this.pokemones.length);
    this.pokemonActual = this.pokemones[indice];
  }

  comprobarRespuesta() {
    if (!this.respuestaUsuario.trim()) return;

    if (this.respuestaUsuario.trim().toLowerCase() === this.pokemonActual.nombre) {
      this.resultado = '¡Correcto! 🎉';
    } else {
      this.resultado = `Incorrecto. Es ${this.pokemonActual.nombre.toUpperCase()}.`;
    }

    setTimeout(() => {
      this.respuestaUsuario = '';
      this.resultado = '';
      this.seleccionarPokemonAleatorio();
    }, 2000);
  }
}
