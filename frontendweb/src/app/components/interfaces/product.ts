import {Input} from "@angular/core";

export interface Product {
  id: number;
  name: string;
  price: number;
  pictureUrl: string;
  isFavourite: boolean;
  manufacturer?: Manufacturer;
  type?: GuitarType;
  subtype?: GuitarSubtype;
}

export interface Manufacturer {
  id: number;
  name: string;
}

export interface GuitarType {
  id: number;
  name: string;
}

export interface GuitarSubtype {
  id: number;
  name: string;
}
