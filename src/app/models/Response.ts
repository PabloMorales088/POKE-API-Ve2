import { Pokemon } from "./pokemon";

export class Response {
    private _count: number;
    private _next: string;
    private _previous: string;
    private _results: Pokemon[];

    constructor(count: number = 0, next: string = '', previous: string = '', results: Pokemon[] = []) {
        this._count = count;
        this._next = next;
        this._previous = previous;
        this._results = results;
    }

    // Getters
    get count(): number {
        return this._count;
    }

    get next(): string {
        return this._next;
    }

    get previous(): string {
        return this._previous;
    }

    get results(): Pokemon[] {
        return this._results;
    }

    // Setters
    set count(value: number) {
        this._count = value;
    }

    set next(value: string) {
        this._next = value;
    }

    set previous(value: string) {
        this._previous = value;
    }

    set results(value: Pokemon[]) {
        this._results = value;
    }
}
