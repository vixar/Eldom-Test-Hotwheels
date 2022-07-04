export interface Hotwheels {
    id:          string;
    nombre:      number;
    Description: string;
    picture:     string;
    tipo:        Tipo;
    imagen?:     boolean;
}

export interface Tipo {
    id:     number;
    nombre: string;
}
