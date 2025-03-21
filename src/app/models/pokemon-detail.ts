import { Pokemon } from "./pokemon";

// Modelo que representa el detalle de un Pokémon
export class PokemonDetail {

    // Propiedades privadas del detalle
    private _id: number;
    private _weight: number;
    private _height: number;
    private _image: string;
    private _name: string;

    // Un Pokémon puede tener varios tipos (array de objetos con un nombre dentro de "type")
    private _types: { type: { name: string; }; }[];

    // Objeto opcional que contiene el sprite por defecto (puede venir vacío o sin definir)
    private _sprites?: { front_default: string; } | undefined;

    // Constructor para inicializar todas las propiedades de la clase
    constructor(
        id: number,
        weight: number,
        height: number,
        types: { type: { name: string } }[],
        image: string,
        name: string,
        sprites?: { front_default: string }
    ) {
        this._id = id;
        this._weight = weight;
        this._height = height;
        this._types = types;
        this._image = image;
        this._name = name;
        this._sprites = sprites; // Puede ser undefined si no se proporciona
    }

    // Getter y setter para el id del Pokémon
    public get id(): number { return this._id; }
    public set id(value: number) { this._id = value; }

    // Getter y setter para el peso
    public get weight(): number { return this._weight; }
    public set weight(value: number) { this._weight = value; }

    // Getter y setter para la altura
    public get height(): number { return this._height; }
    public set height(value: number) { this._height = value; }

    // Getter y setter para la imagen (URL o referencia)
    public get image(): string { return this._image; }
    public set image(value: string) { this._image = value; }

    // Getter y setter para el nombre
    public get name(): string { return this._name; }
    public set name(value: string) { this._name = value; }

    // Getter y setter para el array de tipos
    public get types(): { type: { name: string; }; }[] {
        return this._types;
    }
    public set types(value: { type: { name: string; }; }[]) {
        this._types = value;
    }

    // Getter y setter para los sprites (opcional)
    public get sprites(): { front_default: string; } | undefined {
        return this._sprites;
    }
    public set sprites(value: { front_default: string; } | undefined) {
        this._sprites = value;
    }

}
