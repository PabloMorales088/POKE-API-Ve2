import { Pokemon } from "./pokemon";

// Clase que representa la respuesta de la API al listar pokemons
export class Response {

    // Total de pokemons disponibles en la API
    private _count: number;

    // URL de la siguiente página de resultados 
    private _next: string;

    // URL de la página anterior de resultados 
    private _previous: string;

    // Array con los pokemons devueltos en la página actual
    private _results: Pokemon[];

    // Constructor con valores por defecto, útil por si se inicializa sin datos
    constructor(
        count: number = 0,
        next: string = '',
        previous: string = '',
        results: Pokemon[] = []
    ) {
        this._count = count;
        this._next = next;
        this._previous = previous;
        this._results = results;
    }

    // Getter para obtener el número total de pokemons
    get count(): number {
        return this._count;
    }

    // Getter para la URL de la siguiente página
    get next(): string {
        return this._next;
    }

    // Getter para la URL de la página anterior
    get previous(): string {
        return this._previous;
    }

    // Getter para acceder a la lista de pokemons de la respuesta
    get results(): Pokemon[] {
        return this._results;
    }

    // Setter para actualizar el número total de pokemons
    set count(value: number) {
        this._count = value;
    }

    // Setter para actualizar la URL de la siguiente página
    set next(value: string) {
        this._next = value;
    }

    // Setter para actualizar la URL de la página anterior
    set previous(value: string) {
        this._previous = value;
    }

    // Setter para actualizar la lista de pokemons
    set results(value: Pokemon[]) {
        this._results = value;
    }
}
