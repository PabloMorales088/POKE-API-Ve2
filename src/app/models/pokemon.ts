// Clase que representa un Pokémon básico (solo nombre y URL)
export class Pokemon {

    // Propiedades privadas
    private _name: string; // Nombre del Pokémon
    private _url: string;  // URL más información

    // Constructor para inicializar el Pokémon con su nombre y URL
    constructor(name: string, url: string) {
        this._name = name;
        this._url = url;
    }


    
    // Getter y setter para la propiedad URL
    public get url(): string { return this._url; }
    public set url(value: string) { this._url = value; }

    // Getter y setter para la propiedad nombre
    public get name(): string { return this._name; }
    public set name(value: string) { this._name = value; }
}
